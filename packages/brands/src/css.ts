import type { Marca } from "./types";

/**
 * Convierte los tokens de una marca en variables CSS.
 *
 * Se inyecta en el `<head>` del layout, antes de la hoja de estilos, para
 * que las reglas heredadas —que ya usan `var(--paper)`, `var(--ink)` y
 * compañía— tomen los valores de la institución que corresponde sin que
 * haya que tocar ninguna de ellas.
 *
 * Sale con `:root` y no como atributo `style` en el <html> porque asi gana
 * la cascada frente al `:root` de globals.css sin necesidad de `!important`.
 */
export function variablesDeMarca(marca: Marca): string {
  const t = marca.tokens;

  return `:root{
--paper:${t.paper};
--paper-strong:${t.paperStrong};
--ink:${t.ink};
--ink-muted:${t.inkMuted};
--mint:${t.mint};
--mint-strong:${t.mintStrong};
--sun:${t.sun};
--sand:${t.sand};
--error:${t.error};
--border:${t.border};
--shadow:${t.shadow};
}`;
}
