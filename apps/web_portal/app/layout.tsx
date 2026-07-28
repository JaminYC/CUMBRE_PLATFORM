import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { marcaPorHost, variablesDeMarca } from "@cumbre/brands";
import { ProveedorDeMarca } from "@cumbre/brands/client";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const marca = marcaPorHost((await headers()).get("host"));

  return {
    title: `${marca.nombreCorto}`,
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
        {/* Los colores de la institucion, antes de la hoja de estilos: en un
            archivo aparte cargarian despues y la pagina alcanzaria a
            pintarse con los de la marca equivocada. */}
        <style
          id="tokens-de-marca"
          dangerouslySetInnerHTML={{ __html: variablesDeMarca(marca) }}
        />
      </head>
      <body>
        <ProveedorDeMarca marca={marca}>
          <AppLocaleProvider initialLocale="es">{children}</AppLocaleProvider>
        </ProveedorDeMarca>
      </body>
    </html>
  );
}
