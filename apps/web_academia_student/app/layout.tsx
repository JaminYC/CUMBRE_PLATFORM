import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import { AuthSessionProvider } from "@/features/auth/auth-session";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academia Bryce | Espacio del estudiante",
  description: "Campus virtual de la Academia Preuniversitaria Bryce. Espacio del estudiante."
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
