import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Inmobiliaria Samper — Donde encontramos el hogar que nadie ve",
    template: "%s | Inmobiliaria Samper",
  },
  description:
    "Inmobiliaria Samper — especialistas en casas, pisos, terrenos y locales en el Bajo Aragón: Samper de Calanda, Alcorisa, Andorra, Híjar y alrededores.",
  keywords: [
    "inmobiliaria",
    "Samper de Calanda",
    "Bajo Aragón",
    "casas",
    "pisos",
    "terrenos",
    "Alcorisa",
    "Andorra",
    "Híjar",
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
