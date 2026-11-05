import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import test from "node:test";

async function getAvailablePort() {
  const server = createServer();
  server.unref();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.notEqual(address, null);
  assert.equal(typeof address, "object");
  const port = address.port;
  server.close();
  await once(server, "close");
  return port;
}

async function waitForServer(url, processExited) {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    const result = await Promise.race([
      fetch(url).then(() => "ready").catch(() => "retry"),
      processExited.then(() => "exited"),
    ]);
    if (result === "ready") return;
    if (result === "exited") throw new Error("Next.js exited before becoming ready");
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Next.js did not become ready in time");
}

test("serves the production routes", { timeout: 30_000 }, async () => {
  const port = await getAvailablePort();
  const baseUrl = `http://127.0.0.1:${port}`;
  let output = "";
  const nextProcess = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    {
      cwd: new URL("..", import.meta.url),
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  nextProcess.stdout.on("data", (chunk) => { output += chunk; });
  nextProcess.stderr.on("data", (chunk) => { output += chunk; });
  const processExited = once(nextProcess, "exit");

  try {
    await waitForServer(`${baseUrl}/login`, processExited);

    const rootResponse = await fetch(baseUrl, { redirect: "manual" });
    assert.ok([307, 308].includes(rootResponse.status));
    assert.equal(rootResponse.headers.get("location"), "/login");

    const loginResponse = await fetch(`${baseUrl}/login`);
    assert.equal(loginResponse.status, 200);
    const loginHtml = await loginResponse.text();
    assert.match(loginHtml, /Connexion/);
    assert.match(loginHtml, /emsi-logo\.png/);
    assert.match(loginHtml, /mot-de-passe-oublie/);

    const resetResponse = await fetch(`${baseUrl}/mot-de-passe-oublie`);
    assert.equal(resetResponse.status, 200);
    assert.match(await resetResponse.text(), /Mot de passe oublié/);
  } catch (error) {
    throw new Error(`${error.message}\n${output}`);
  } finally {
    if (nextProcess.exitCode === null) nextProcess.kill("SIGTERM");
    await processExited;
  }
});
