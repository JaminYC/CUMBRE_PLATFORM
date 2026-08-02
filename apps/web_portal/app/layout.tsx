import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { marcaPorHost, variablesDeMarca } from "@cumbre/brands";
import { ProveedorDeMarca } from "@cumbre/brands/client";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import { Manrope } from "next/font/google";
import { Cortina } from "@/features/landing/cortina";
import "./globals.css";

/*
 * Manrope, la misma que usa la referencia que gusto al cliente.
 *
 * Se carga con next/font: descarga los archivos en la compilacion y los sirve
 * desde nuestro dominio, asi que no hay peticion a un CDN ajeno ni el
 * parpadeo de texto que aparece cuando la fuente llega tarde.
 *
 * De momento solo la usa la portada de Bryce, a traves de la variable. El
 * resto de la plataforma sigue como estaba: cambiar la tipografia base
 * movería los espaciados de las cuatro apps y eso se revisa aparte.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--fuente-manrope",
  display: "swap"
});

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
    <html lang="es" data-marca={marca.id} className={manrope.variable}>
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
          {/* Vive fuera del contenido: si estuviera dentro, el cambio de
              página la desmontaría a mitad de animación. */}
          <Cortina />
        </ProveedorDeMarca>
      </body>
    </html>
  );
}
