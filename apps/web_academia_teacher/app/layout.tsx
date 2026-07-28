import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academia Bryce | Espacio docente",
  description:
    "Campus virtual de la Academia Preuniversitaria Bryce. Espacio docente."
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
