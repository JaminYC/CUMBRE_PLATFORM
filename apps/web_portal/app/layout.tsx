import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cumbre | Aprendizaje adaptativo para aulas reales",
  description:
    "Portal unificado de entrada para estudiantes, docentes y administracion dentro del ecosistema CUMBRE."
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AppLocaleProvider initialLocale="es">{children}</AppLocaleProvider>
      </body>
    </html>
  );
}
