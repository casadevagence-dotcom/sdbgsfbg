import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

        <div className="login-form" role="form" aria-label="Connexion">
          <label className="field">
            <span className="sr-only">Email</span>
            <input
              type="email"
              placeholder="Email*"
              autoComplete="off"
              aria-required="true"
            />
          </label>

          <label className="field">
            <span className="sr-only">Mot de passe</span>
            <input
              type="password"
              placeholder="Mot de passe*"
              autoComplete="off"
              aria-required="true"
            />
          </label>

          <button type="button" disabled>
            Se connecter
          </button>

          <Link href="/mot-de-passe-oublie">
            Mot de passe oublié ?
          </Link>
        </div>
      </section>
    </main>
  );
}
