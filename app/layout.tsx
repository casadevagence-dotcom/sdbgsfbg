import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampuSphere Cloud Instructor Portal",
  description: "Reproduction visuelle de la page de connexion EMSI.",
  icons: {
    icon: "/campusphere-favicon.png",
    shortcut: "/campusphere-favicon.png",
    apple: "/campusphere-favicon.png",
  },
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
