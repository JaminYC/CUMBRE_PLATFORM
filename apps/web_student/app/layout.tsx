import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import { AuthSessionProvider } from "@/features/auth/auth-session";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cumbre Estudiante",
  description: "Aplicación de aprendizaje adaptativo para estudiantes en la plataforma CUMBRE."
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AppLocaleProvider initialLocale="es">
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </AppLocaleProvider>
      </body>
    </html>
  );
}
