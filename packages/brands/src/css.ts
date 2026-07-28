import type { Marca } from "./types";

/**
 * Descompone un color hexadecimal en sus tres componentes.
 *
 * Hace falta porque buena parte del CSS heredado usa `rgba(R, G, B, alfa)`
 * con los valores escritos a mano. Emitiendo tambien la forma "R, G, B" se
 * pueden reescribir esas reglas como `rgba(var(--x-rgb), alfa)` y quedan
 * atadas a la marca, sin tener que reemplazarlas por `color-mix` una por
 * una.
 *
 * Si el valor no es un hexadecimal —hay tokens que ya vienen como `rgba()`—
 * devuelve null y simplemente no se emite esa variante.
 */
function componentes(hex: string): string | null {
  const limpio = hex.trim().replace("#", "");

  const completo =
    limpio.length === 3
      ? limpio.split("").map((c) => c + c).join("")
      : limpio;

  if (!/^[0-9a-fA-F]{6}$/.test(completo)) return null;

  const n = parseInt(completo, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

/**
 * Convierte los tokens de una marca en variables CSS.
 *
 * Se inyecta en el `<head>` del layout, antes de la hoja de estilos, para
 * que las reglas heredadas —que ya usan `var(--paper)`, `var(--ink)` y
 * compañia— tomen los valores de la institucion que corresponde sin que
 * haya que tocar ninguna de ellas.
 *
 * Sale como bloque `:root` y no como atributo `style` en el <html> porque
 * asi gana la cascada frente al `:root` de globals.css sin `!important`.
 */
export function variablesDeMarca(marca: Marca): string {
  const t = marca.tokens;

  const lineas: string[] = [
    `--paper:${t.paper}`,
    `--paper-strong:${t.paperStrong}`,
    `--paper-top:${t.paperTop}`,
    `--ink:${t.ink}`,
    `--ink-muted:${t.inkMuted}`,
    `--mint:${t.mint}`,
    `--mint-strong:${t.mintStrong}`,
    `--mint-alt:${t.mintAlt}`,
    `--accent:${t.accent}`,
    `--accent-text:${t.accentText}`,
    `--sun:${t.sun}`,
    `--sand:${t.sand}`,
    `--error:${t.error}`,
    `--border:${t.border}`,
    `--shadow:${t.shadow}`,
    `--carga-1:${t.cargaGradiente[0]}`,
    `--carga-2:${t.cargaGradiente[1]}`,
    `--carga-3:${t.cargaGradiente[2]}`
  ];

  // Variantes en componentes, para las reglas que usan rgba() con alfa.
  const conAlfa: Array<[string, string]> = [
    ["paper", t.paper],
    ["paper-strong", t.paperStrong],
    ["ink", t.ink],
    ["mint", t.mint],
    ["mint-strong", t.mintStrong],
    ["sun", t.sun],
    ["sand", t.sand],
    ["accent", t.accent],
    ["error", t.error]
  ];

  for (const [nombre, valor] of conAlfa) {
    const rgb = componentes(valor);
    if (rgb) lineas.push(`--${nombre}-rgb:${rgb}`);
  }

  return `:root{\n${lineas.join(";\n")};\n}`;
}
