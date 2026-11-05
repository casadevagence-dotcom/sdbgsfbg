import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connexion | EMSI",
  description: "Reproduction visuelle de la page de connexion EMSI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
