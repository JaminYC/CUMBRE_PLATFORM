"use client";

import { Fragment } from "react";

/**
 * Titular que entra letra por letra.
 *
 * Se parte en palabras y luego en letras: partir solo en letras romperia el
 * salto de linea, porque cada letra seria una caja suelta y el navegador
 * cortaria a mitad de palabra.
 *
 * El escalonado va en una variable CSS y no en `style` por letra, para que la
 * animacion viva entera en la hoja de estilos y corra fuera del hilo principal.
 *
 * Para quien usa lector de pantalla, el texto se anuncia una vez desde
 * `aria-label`; las letras quedan ocultas. Sin eso se leeria deletreado.
 */
export function TituloAnimado({
  texto,
  className = "",
  retardoBase = 0
}: {
  texto: string;
  className?: string;
  /** Milisegundos antes de la primera letra. */
  retardoBase?: number;
}) {
  const palabras = texto.split(" ");
  let indice = 0;

  return (
    <h1 className={`ble-titulo-anim ${className}`.trim()} aria-label={texto}>
      {palabras.map((palabra, p) => (
        <Fragment key={`${palabra}-${p}`}>
          <span className="ble-titulo-anim__palabra" aria-hidden="true">
            {[...palabra].map((letra, l) => (
              <span
                key={l}
                className="ble-titulo-anim__letra"
                style={
                  {
                    "--retardo": `${retardoBase + indice++ * 18}ms`
                  } as React.CSSProperties
                }
              >
                {letra}
              </span>
            ))}
          </span>{" "}
        </Fragment>
      ))}
    </h1>
  );
}
