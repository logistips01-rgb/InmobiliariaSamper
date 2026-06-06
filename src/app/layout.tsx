import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Revivtaliza — Donde las casas vuelven a vivir",
    template: "%s | Revivtaliza",
  },
  description:
    "Revivtaliza conecta casas abandonadas del Bajo Aragón con personas que quieren vivir diferente. Combatimos la despoblación rural en Teruel a través del mercado inmobiliario.",
  keywords: [
    "despoblación",
    "casas rurales",
    "Bajo Aragón",
    "Teruel",
    "casas abandonadas",
    "vivir en el pueblo",
    "Alcorisa",
    "Andorra",
    "Híjar",
    "Samper de Calanda",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
