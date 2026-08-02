"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Cortina entre pantallas del campus.
 *
 * Es la misma pieza que separa la portada del acceso, con dos diferencias que
 * vienen de que aqui se usa mucho mas:
 *
 *   1. Barre solo el area de contenido. La barra lateral —y con ella el logo de
 *      la institucion— se queda quieta. Un cambio de pestaña no es un cambio de
 *      sitio: si el logo tambien desapareciera, cada clic parecería salir y
 *      volver a entrar. El recorte sale de `--barra-ancho`, la misma variable
 *      que gobierna el ancho de la barra, asi que encaja tambien plegada.
 *
 *   2. Dura la mitad. En la portada la cortina se ve una vez y marca el tono;
 *      aqui un alumno cambia de pestaña decenas de veces por sesion, y una
 *      animacion que se disfruta la primera vez estorba a la vigesima. 240 ms
 *      al tapar y 300 ms al destapar mantienen el gesto por debajo del umbral
 *      en que se empieza a sentir espera.
 *
 * Vive en el layout y no dentro de AppShell a proposito: cada pagina monta su
 * propio AppShell, de modo que al navegar se desmontaria a mitad de animacion.
 *
 * Precauciones heredadas: temporizador de rescate para no dejar la pantalla
 * tapada si la navegacion falla, no intercepta lo que el usuario espera que
 * abra fuera, y con movimiento reducido no aparece.
 */

const SUBE = 240;
const BAJA = 300;
const RESCATE = 2000;

export function Cortina() {
  const router = useRouter();
  const ruta = usePathname();
  const [estado, setEstado] = useState<"quieta" | "cubriendo" | "descubriendo">(
    "quieta"
  );
  const destino = useRef<string | null>(null);
  const temporizador = useRef<number | null>(null);
  const [sentido, setSentido] = useState<"adelante" | "atras">("adelante");
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
      // Solo el boton principal y sin teclas: lo demas abre en otra pestaña.
      if (
        evento.button !== 0 ||
        evento.metaKey ||
        evento.ctrlKey ||
        evento.shiftKey ||
        evento.altKey ||
        evento.defaultPrevented
      ) {
        return;
      }

      const enlace = (evento.target as HTMLElement)?.closest?.("a");
      if (!enlace) return;

      const href = enlace.getAttribute("href");
      if (!href || !href.startsWith("/")) return; // externo o ancla
      if (enlace.target && enlace.target !== "_self") return; // abre fuera
      if (enlace.hasAttribute("download")) return;
      if (href === window.location.pathname) return; // ya estamos ahi

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

      // Se navega cuando la cortina ya tapa; antes se veria el cambio debajo.
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

  // La ruta ya cambio: la pantalla nueva esta montada y se puede descubrir.
  useEffect(() => {
    if (estado !== "cubriendo" || !destino.current) return;
    if (ruta !== destino.current) return;

    limpiar();
    destino.current = null;
    setEstado("descubriendo");
  }, [ruta, estado, limpiar]);

  /*
   * Retroceso y avance del navegador. Aqui no se puede tapar antes: cuando la
   * ruta cambia por sus botones la pantalla nueva ya esta puesta, asi que solo
   * queda la segunda mitad y las capas barren hacia el lado contrario.
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
   * una razon concreta: aquel depende de `estado`, asi que al cambiarlo se
   * vuelve a ejecutar y su limpieza cancelaria el temporizador recien creado.
   * La cortina se quedaba entonces tapando la pantalla.
   */
  useEffect(() => {
    if (estado !== "descubriendo") return;
    const t = window.setTimeout(() => setEstado("quieta"), BAJA);
    return () => window.clearTimeout(t);
  }, [estado]);

  return (
    <div
      className="cortina"
      data-estado={estado}
      data-sentido={sentido}
      aria-hidden="true"
      // Mientras esta quieta no debe interceptar clics de nadie.
      style={{ pointerEvents: estado === "quieta" ? "none" : "auto" }}
    >
      {/* Tres capas: al taparse se leen como una sola, pero al retirarse salen
          escalonadas y se ve cada color por separado. Ese desfase es lo que
          hace que el barrido tenga cuerpo. */}
      <span className="cortina__panel" data-capa="1" />
      <span className="cortina__panel" data-capa="2" />
      <span className="cortina__panel" data-capa="3" />
    </div>
  );
}
