import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mot de passe oublié | EMSI",
  description: "Reproduction visuelle de la réinitialisation EMSI.",
};

export default function ForgotPassword() {
  return (
    <main className="login-page">
      <section
        className="login-card reset-card"
        aria-labelledby="reset-title"
      >
        <Image
          className="school-logo"
          src="/emsi-logo.png"
          alt="Ecole Marocaine des Sciences de l'Ingénieur"
          width={284}
          height={72}
          priority
        />

        <h1 id="reset-title">Mot de passe oublié</h1>

        <div className="reset-form" role="form" aria-label="Réinitialisation">
          <p>
            Entrez votre adresse e-mail. Vous recevrez un lien de
            réinitialisation.
          </p>

          <label className="field reset-field">
            <span className="sr-only">Adresse e-mail</span>
            <input
              type="email"
              placeholder="Adresse e-mail*"
              autoComplete="off"
              aria-required="true"
            />
          </label>

          <button type="button" disabled>
            Envoyer le lien
          </button>

          <Link className="back-link" href="/">
            <span aria-hidden="true">←</span>
            Retour à la connexion
          </Link>
        </div>
      </section>
    </main>
  );
}
