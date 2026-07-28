import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { marcaPorHost, variablesDeMarca } from "@cumbre/brands";
import { ProveedorDeMarca } from "@cumbre/brands/client";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import { AuthSessionProvider } from "@/features/auth/auth-session";
import "./globals.css";

/**
 * El titulo y la descripcion salen de la marca que corresponde al dominio,
 * no de una constante: la misma aplicacion atiende a todas las
 * instituciones.
 */
export async function generateMetadata(): Promise<Metadata> {
  const marca = marcaPorHost((await headers()).get("host"));

  return {
    title: `${marca.nombreCorto} · Estudiante`,
    description: marca.descripcion
  };
}

export default async function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  const marca = marcaPorHost((await headers()).get("host"));

  return (
    <html lang="es" data-marca={marca.id}>
      <head>
        {/*
          Los colores de la institucion, inyectados antes de la hoja de
          estilos. Las reglas heredadas ya usan var(--paper), var(--ink) y
          demas, asi que toman el valor correcto sin tocar ninguna.

          Va en el HTML y no en una hoja aparte porque un archivo adicional
          se cargaria despues: la pagina alcanzaria a pintarse con los
          colores de la marca equivocada.
        */}
        <style
          id="tokens-de-marca"
          dangerouslySetInnerHTML={{ __html: variablesDeMarca(marca) }}
        />
      </head>
      <body>
        <ProveedorDeMarca marca={marca}>
          <AppLocaleProvider initialLocale="es">
            <AuthSessionProvider>{children}</AuthSessionProvider>
          </AppLocaleProvider>
        </ProveedorDeMarca>
      </body>
    </html>
  );
}
