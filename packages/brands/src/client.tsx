"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Marca } from "./types";
import { CUMBRE } from "./registro";

/**
 * La marca, disponible en los componentes de cliente.
 *
 * El layout resuelve la institución en el servidor —a partir del dominio— y
 * la pasa por aquí. Los componentes que muestran el logo o el nombre la
 * leen con `useMarca()`, sin importar en qué aplicación estén.
 *
 * Se podría leer el atributo `data-marca` del <html>, pero eso solo daría el
 * identificador: haría falta un segundo lugar donde buscar los logos y los
 * textos, y dos fuentes de verdad para lo mismo terminan discrepando.
 */
const ContextoDeMarca = createContext<Marca>(CUMBRE);

export function ProveedorDeMarca({
  marca,
  children
}: {
  marca: Marca;
  children: ReactNode;
}) {
  return (
    <ContextoDeMarca.Provider value={marca}>{children}</ContextoDeMarca.Provider>
  );
}

/**
 * Devuelve CUMBRE si nadie envolvió el árbol. Es el mismo criterio que el
 * resolutor por dominio: ante la duda, la marca propia — nunca una pantalla
 * sin logo ni nombre.
 */
export function useMarca(): Marca {
  return useContext(ContextoDeMarca);
}

export type { Marca };
