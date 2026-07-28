"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mantiene visible la pantalla de carga un tiempo mínimo.
 *
 * Sin esto, cuando los datos llegan en 150 ms el indicador aparece y
 * desaparece de golpe: se lee como un parpadeo, no como una carga. Y el
 * logo no llega ni a empezar a armarse.
 *
 * 1200 ms es lo que tarda la última pieza del logo en entrar
 * (825 ms de escalonado + 300 ms de su propia entrada). Justo lo
 * suficiente para verlo completo, sin que la app se sienta lenta.
 *
 * Si la carga real tarda más, no agrega nada: el mínimo ya se cumplió.
 */
export function useCargaMinima(cargando: boolean, minimoMs = 1200) {
  const [visible, setVisible] = useState(cargando);
  const comenzoEn = useRef<number | null>(null);

  useEffect(() => {
    if (cargando) {
      if (comenzoEn.current === null) comenzoEn.current = Date.now();
      setVisible(true);
      return;
    }

    if (comenzoEn.current === null) {
      setVisible(false);
      return;
    }

    const transcurrido = Date.now() - comenzoEn.current;
    const resta = Math.max(0, minimoMs - transcurrido);

    if (resta === 0) {
      comenzoEn.current = null;
      setVisible(false);
      return;
    }

    const temporizador = setTimeout(() => {
      comenzoEn.current = null;
      setVisible(false);
    }, resta);

    return () => clearTimeout(temporizador);
  }, [cargando, minimoMs]);

  return visible;
}
