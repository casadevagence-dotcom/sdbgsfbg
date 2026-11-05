import Image from "next/image";

export default function Login() {
  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <Image
          className="school-logo"
          src="/emsi-logo.png"
          alt="Ecole Marocaine des Sciences de l'Ingénieur"
          width={284}
          height={72}
          priority
        />

        <h1 id="login-title">Connexion</h1>

        <form
          className="login-form"
          action="https://ens.emsi.ma/"
          method="get"
          aria-label="Connexion"
        >
          <label className="field floating-field email-field">
            <input
              type="email"
              inputMode="email"
              placeholder=" "
              autoComplete="off"
              required
              aria-required="true"
            />
            <span>Email*</span>
          </label>

          <label className="field floating-field password-field">
            <input
              type="password"
              placeholder=" "
              autoComplete="off"
              required
              aria-required="true"
            />
            <span>Mot de passe*</span>
          </label>

          <button type="submit">Se connecter</button>

          <a href="/mot-de-passe-oublie">Mot de passe oublié ?</a>
        </form>
      </section>
    </main>
  );
}
