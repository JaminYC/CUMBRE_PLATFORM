"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Cortina entre páginas.
 *
 * Al pulsar un enlace interno, un panel sube y cubre la pantalla; por debajo se
 * cambia de página; cuando la nueva está montada, el panel se retira. El hueco
 * en que la pantalla está tapada es lo que hace que el cambio se sienta
 * deliberado en vez de un salto.
 *
 * No se usa la API de View Transitions del navegador porque hoy Firefox no la
 * tiene y porque una cortina real se controla mejor: es un elemento del DOM
 * con sus tiempos, no una foto que el navegador cruza por su cuenta.
 *
 * Precauciones, en orden de importancia:
 *
 *   - Hay un temporizador de rescate. Si la navegación falla o tarda, la
 *     cortina se retira igual: dejar la pantalla tapada sería peor que no
 *     tener animación.
 *   - No intercepta lo que el usuario espera que abra fuera: clic con Ctrl o
 *     Cmd, rueda del ratón, target distinto, enlaces externos, anclas y
 *     descargas siguen su camino normal.
 *   - Con movimiento reducido no aparece.
 */

const SUBE = 520;
const BAJA = 620;
const RESCATE = 2500;

export function Cortina() {
  const router = useRouter();
  const ruta = usePathname();
  const [estado, setEstado] = useState<"quieta" | "cubriendo" | "descubriendo">(
    "quieta"
  );
  const destino = useRef<string | null>(null);
  const temporizador = useRef<number | null>(null);
  // Hacia donde barre. Al retroceder se invierte, de modo que el gesto dice
  // por si solo si vas o vuelves.
  const [sentido, setSentido] = useState<"adelante" | "atras">("adelante");
  // La ultima ruta que vimos, para distinguir la navegacion que iniciamos
  // nosotros de la que hace el navegador con sus botones.
  const rutaPrevia = useRef(ruta);

  const limpiar = useCallback(() => {
    if (temporizador.current) {
      window.clearTimeout(temporizador.current);
      temporizador.current = null;
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function alPulsar(evento: MouseEvent) {
      // Solo el botón principal y sin teclas: lo demás abre en otra pestaña.
      if (evento.button !== 0 || evento.metaKey || evento.ctrlKey ||
          evento.shiftKey || evento.altKey || evento.defaultPrevented) {
        return;
      }

      const enlace = (evento.target as HTMLElement)?.closest?.("a");
      if (!enlace) return;

      const href = enlace.getAttribute("href");
      if (!href || !href.startsWith("/")) return;              // externo o ancla
      if (enlace.target && enlace.target !== "_self") return;  // abre fuera
      if (enlace.hasAttribute("download")) return;
      if (href === window.location.pathname) return;           // ya estamos ahí

      /*
       * Se para aqui mismo. El <Link> de Next lleva su propio manejador y, si
       * la escucha fuera en burbuja, para cuando llegara el turno de esta ya
       * habria navegado —y con defaultPrevented a true nos saldriamos sin
       * hacer nada. Por eso se escucha en captura y se corta la propagacion:
       * la navegacion la decide esta cortina, no el enlace.
       */
      evento.preventDefault();
      evento.stopPropagation();
      destino.current = href;
      setSentido("adelante");
      setEstado("cubriendo");

      // Se navega cuando la cortina ya tapa; si se hiciera antes, se vería el
      // cambio por debajo del panel.
      window.setTimeout(() => router.push(href), SUBE);

      limpiar();
      temporizador.current = window.setTimeout(() => {
        destino.current = null;
        setEstado("quieta");
      }, RESCATE);
    }

    // true = fase de captura: corre antes que los manejadores de React.
    document.addEventListener("click", alPulsar, true);
    return () => {
      document.removeEventListener("click", alPulsar, true);
      limpiar();
    };
  }, [router, limpiar]);

  // La ruta ya cambió: la página nueva está montada y se puede descubrir.
  useEffect(() => {
    if (estado !== "cubriendo" || !destino.current) return;
    if (ruta !== destino.current) return;

    limpiar();
    destino.current = null;
    setEstado("descubriendo");
  }, [ruta, estado, limpiar]);

  /*
   * Retroceso y avance del navegador.
   *
   * Aqui no se puede tapar antes: cuando popstate llega, la ruta ya cambio y
   * la pagina nueva esta montada. Asi que se toca solo la segunda mitad —el
   * descubrimiento— y las capas barren hacia el lado contrario.
   *
   * Se compara con la ruta anterior en vez de escuchar popstate porque asi se
   * cubre cualquier navegacion que no venga de un enlace, incluida la que
   * hagan otras partes del codigo.
   */
  useEffect(() => {
    if (ruta === rutaPrevia.current) return;
    const laIniciamosNosotros = destino.current !== null;
    rutaPrevia.current = ruta;
    if (laIniciamosNosotros || estado !== "quieta") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setSentido("atras");
    setEstado("descubriendo");
  }, [ruta, estado]);

  /*
   * El regreso a "quieta" va en su propio efecto, y no junto al anterior, por
   * una razón concreta: aquel depende de `estado`, así que al cambiarlo se
   * vuelve a ejecutar y su limpieza cancelaría el temporizador recién creado.
   * La cortina se quedaba entonces tapando la pantalla y bloqueando los clics.
   */
  useEffect(() => {
    if (estado !== "descubriendo") return;
    const t = window.setTimeout(() => setEstado("quieta"), BAJA);
    return () => window.clearTimeout(t);
  }, [estado]);

  return (
    <div
      className="ble-cortina"
      data-estado={estado}
      data-sentido={sentido}
      aria-hidden="true"
      // Mientras está quieta no debe interceptar clics de nadie.
      style={{ pointerEvents: estado === "quieta" ? "none" : "auto" }}
    >
      {/* Tres capas: al taparse se leen como una sola, pero al retirarse
          salen escalonadas y se ve cada color por separado. Ese desfase es
          lo que hace que el barrido tenga cuerpo. */}
      <span className="ble-cortina__panel" data-capa="1" />
      <span className="ble-cortina__panel" data-capa="2" />
      <span className="ble-cortina__panel" data-capa="3" />
    </div>
  );
}
