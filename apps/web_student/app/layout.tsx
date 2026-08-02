import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { marcaPorHost, variablesDeMarca } from "@cumbre/brands";
import { ProveedorDeMarca } from "@cumbre/brands/client";
import { AppLocaleProvider } from "@cumbre/app-runtime/client";
import { AuthSessionProvider } from "@/features/auth/auth-session";
import { Cortina } from "@/components/cortina";
import "./globals.css";

/**
 * Decide si la barra lateral arranca plegada, antes de que se pinte nada.
 *
 * Va como script sincrono y no como efecto de React por lo mismo que los
 * colores de la marca van en el HTML: un efecto corre despues del primer
 * pintado, asi que la barra se veria abierta y daria un salto al plegarse.
 *
 * En pantalla estrecha se pliega siempre: 17rem no caben en un movil.
 */
const PLIEGUE_INICIAL = `(function(){
  var raiz = document.documentElement;
  try {
    var guardado = localStorage.getItem("campus:barra-plegada");
    var estrecha = window.matchMedia("(max-width: 980px)").matches;
    raiz.dataset.barra = (estrecha || guardado === "1") ? "plegada" : "abierta";
  } catch (e) {
    raiz.dataset.barra = "abierta";
  }
})();`;

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
    /*
      suppressHydrationWarning por el `data-barra` que pone el script de
      arriba: lo escribe antes de que React hidrate, asi que el atributo que
      encuentra no es el que el servidor mando. Es el aviso correcto para este
      caso —un script previo al pintado que toca <html> a proposito— y se
      limita a este elemento: dentro de la pagina los avisos siguen saliendo.
    */
    <html lang="es" data-marca={marca.id} suppressHydrationWarning>
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
        <script dangerouslySetInnerHTML={{ __html: PLIEGUE_INICIAL }} />
      </head>
      <body>
        <ProveedorDeMarca marca={marca}>
          <AppLocaleProvider initialLocale="es">
            <AuthSessionProvider>{children}</AuthSessionProvider>
          </AppLocaleProvider>
          {/* Fuera del contenido: cada pantalla monta su propio AppShell, asi
              que aqui dentro la cortina se desmontaria a mitad de animacion. */}
          <Cortina />
        </ProveedorDeMarca>
      </body>
    </html>
  );
}
