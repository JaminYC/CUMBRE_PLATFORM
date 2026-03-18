import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cumbre Docente",
  description: "Panel operativo docente para seguimiento del aprendizaje."
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
