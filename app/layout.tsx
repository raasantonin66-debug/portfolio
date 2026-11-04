import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antonin RAAS · Robotique et systèmes asservis",
  description:
    "Portfolio d'Antonin RAAS, étudiant ingénieur en robotique et systèmes embarqués à SeaTech Toulon, champion de France de gymnastique artistique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
