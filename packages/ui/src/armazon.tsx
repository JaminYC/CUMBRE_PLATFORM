"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMarca } from "@cumbre/brands/client";
import { IconoPliegue, IconoSalir, type PropsIcono } from "./iconos";

/**
 * Armazon de las aplicaciones de rol: barra lateral plegable y area de
 * contenido con su cabecera.
 *
 * Habia una copia en cada aplicacion. Compartian el mismo vocabulario de
 * clases y la misma firma de props, pero habian derivado: la del alumno tenia
 * iconos de trazo, la del docente rellenos, la de administracion ninguno, y
 * solo una se plegaba. Tres sitios donde arreglar cada cosa.
 *
 * Tres decisiones que conviene no deshacer sin querer:
 *
 * 1. El DOM es identico plegada y desplegada. Todo el cambio lo hace el CSS a
 *    partir de un atributo en <html>. Asi no hay ramas que dependan del estado
 *    al pintar en el servidor —origen clasico de avisos de hidratacion— y el
 *    hover, el foco y el movimiento reducido se resuelven donde saben
 *    resolverse, que es la hoja de estilos y no doce manejadores de raton.
 *
 * 2. El estado vive en `document.documentElement`, no solo en React. Tiene que
 *    verlo tambien la cortina, que se monta en el layout y recorta su barrido
 *    justo donde acaba la barra. Una variable CSS compartida es el unico punto
 *    de verdad; medir anchos desde JavaScript se desincroniza en cuanto la
 *    animacion esta a medias.
 *
 * 3. Se navega con <Link>, nunca con router.push desde un <button>. Un enlace
 *    de verdad admite el clic central, el ctrl+clic y el "copiar direccion", y
 *    ademas es lo que la cortina escucha para dispararse.
 *
 * Lo que cambia entre aplicaciones llega por props. Lo unico que se toma del
 * contexto es la marca, porque es la fuente de verdad de la identidad y las
 * cuatro aplicaciones ya montan su proveedor.
 */

const CLAVE_PLIEGUE = "campus:barra-plegada";
const ANCHO_ESTRECHO = "(max-width: 980px)";

export interface ItemDeNavegacion {
  href: string;
  etiqueta: string;
  Icono: (p: PropsIcono) => ReactNode;
  /** Marca activo tambien en las subpaginas: /aula sigue encendido en /aula/modulos. */
  prefijo?: boolean;
  /** Distintivo corto, del tipo "Nuevo". */
  insignia?: string;
}

export interface PropsArmazon {
  /** "Espacio docente", "Espacio del estudiante". Identifica el area. */
  ambito: string;
  items: ItemDeNavegacion[];
  /** Quien ha entrado. Sin esto el pie solo muestra el boton de salir. */
  usuario?: { nombre: string; detalle?: string };
  /**
   * Cerrar sesion, de dos formas segun lo que tenga cada aplicacion.
   *
   * `alCerrarSesion` para un manejador suelto; `botonCerrarSesion` cuando la
   * aplicacion ya tiene su propio componente con su llamada al servidor. Las
   * dos acaban en el mismo sitio —el pie de la barra— porque lo importante es
   * que el usuario lo encuentre siempre donde mismo, venga de donde venga.
   */
  alCerrarSesion?: () => void;
  botonCerrarSesion?: ReactNode;
  etiquetaCerrarSesion?: string;
  etiquetaSecciones?: string;
  etiquetaPlegar?: string;
  etiquetaDesplegar?: string;

  title: string;
  description?: string;
  /** Ya renderizadas: cada aplicacion tiene su propio componente de migas. */
  breadcrumbs?: ReactNode;
  headerActions?: ReactNode;
  children: ReactNode;
}

/**
 * Decide si la barra arranca plegada, antes de que se pinte nada.
 *
 * Se sirve como cadena para que cada layout lo inyecte en su <head>. Va como
 * script sincrono y no como efecto de React por lo mismo que los colores de la
 * marca van en el HTML: un efecto corre despues del primer pintado, asi que la
 * barra se veria abierta y daria un salto al plegarse.
 *
 * En pantalla estrecha se pliega siempre: 17rem no caben en un movil.
 */
export const GUION_PLIEGUE_INICIAL = `(function(){
  var raiz = document.documentElement;
  try {
    var guardado = localStorage.getItem("${CLAVE_PLIEGUE}");
    var estrecha = window.matchMedia("${ANCHO_ESTRECHO}").matches;
    raiz.dataset.barra = (estrecha || guardado === "1") ? "plegada" : "abierta";
  } catch (e) {
    raiz.dataset.barra = "abierta";
  }
})();`;

export function Armazon({
  ambito,
  items,
  usuario,
  alCerrarSesion,
  botonCerrarSesion,
  etiquetaCerrarSesion = "Cerrar sesión",
  etiquetaSecciones = "Secciones",
  etiquetaPlegar = "Plegar la barra",
  etiquetaDesplegar = "Desplegar la barra",
  title,
  description,
  breadcrumbs,
  headerActions,
  children
}: PropsArmazon) {
  const pathname = usePathname();
  const marca = useMarca();
  const [plegada, setPlegada] = useState(false);

  // El atributo ya lo dejo puesto el script previo al pintado; aqui solo se
  // sincroniza React con lo que el documento ya dice, para que el boton anuncie
  // el estado correcto a un lector de pantalla.
  useEffect(() => {
    const raiz = document.documentElement;
    setPlegada(raiz.dataset.barra === "plegada");

    // Misma regla que el script del layout, para que girar el movil o cambiar
    // el tamaño de la ventana no deje la barra en un estado que no cabe.
    const estrecha = window.matchMedia(ANCHO_ESTRECHO);
    const alCambiarElAncho = (evento: MediaQueryListEvent) => {
      let guardado: string | null = null;
      try {
        guardado = window.localStorage.getItem(CLAVE_PLIEGUE);
      } catch {
        // Sin almacenamiento manda solo el ancho.
      }
      const debePlegarse = evento.matches || guardado === "1";
      raiz.dataset.barra = debePlegarse ? "plegada" : "abierta";
      setPlegada(debePlegarse);
    };

    estrecha.addEventListener("change", alCambiarElAncho);
    return () => estrecha.removeEventListener("change", alCambiarElAncho);
  }, []);

  const alternar = useCallback(() => {
    setPlegada((anterior) => {
      const siguiente = !anterior;
      document.documentElement.dataset.barra = siguiente ? "plegada" : "abierta";
      try {
        window.localStorage.setItem(CLAVE_PLIEGUE, siguiente ? "1" : "0");
      } catch {
        // Modo privado o almacenamiento lleno: el pliegue funciona igual,
        // solo que no se recuerda. No es motivo para romper la navegacion.
      }
      return siguiente;
    });
  }, []);

  /**
   * Plegada, el hueco vacio del carril tambien abre.
   *
   * Es un blanco enorme comparado con el boton, y cuando la barra esta
   * reducida a iconos es justo lo que sobra. Tres decisiones:
   *
   *   - Solo abre, nunca cierra. Si tambien plegara, un clic despistado en el
   *     margen derrumbaria la navegacion mientras lees.
   *   - No toca lo que ya es pulsable. Un clic en un enlace navega, y el
   *     `closest` cubre tambien los hijos —el icono dentro del enlace—.
   *   - Es un añadido para el raton, no la unica via: el boton de pliegue
   *     sigue estando y es el que atiende al teclado. Por eso el <aside> no
   *     lleva role de boton: seguiria sin ser alcanzable con tabulador y
   *     ademas perderia su papel de region.
   */
  const alPulsarElHueco = useCallback(
    (evento: React.MouseEvent<HTMLElement>) => {
      if (!plegada) return;
      if ((evento.target as HTMLElement).closest("a, button, input, select, textarea")) {
        return;
      }
      alternar();
    },
    [plegada, alternar]
  );

  // Con `prefijo`, /aula sigue marcado al entrar en /aula/modulos. Sin el, la
  // comparacion es exacta: el panel no debe encenderse desde otra pagina.
  const esActivo = (item: ItemDeNavegacion) =>
    item.prefijo ? pathname.startsWith(item.href) : pathname === item.href;

  const inicial = (usuario?.nombre.trim()[0] ?? "?").toUpperCase();

  return (
    <div className="shell">
      <aside className="barra" onClick={alPulsarElHueco}>
        {/* Ancho fijo por dentro: al animar el ancho de fuera, el contenido no
            se reajusta, solo se recorta. Sin esto las etiquetas se estrujan
            durante la transicion y el texto salta de linea. */}
        <div className="barra__interior">
          <div className="barra__cabecera">
            <Link href="/dashboard" className="barra__logo" aria-label={marca.nombre}>
              {/* Los dos logos estan siempre en el DOM y el CSS enseña el que
                  toca. Cambiar el `src` haria que el navegador descargara la
                  otra imagen justo al plegar, y se veria el hueco. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="barra__logo-completo"
                src={marca.logo.principal}
                alt={marca.nombre}
                draggable={false}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="barra__logo-marca"
                src={marca.logo.marca}
                alt=""
                aria-hidden="true"
                draggable={false}
              />
            </Link>

            <button
              type="button"
              className="barra__pliegue"
              onClick={alternar}
              aria-expanded={!plegada}
              aria-label={plegada ? etiquetaDesplegar : etiquetaPlegar}
            >
              <IconoPliegue />
            </button>
          </div>

          <nav className="barra__menu" aria-label={etiquetaSecciones}>
            {items.map((item) => {
              const activo = esActivo(item);
              const { Icono } = item;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="barra__enlace"
                  data-activo={activo ? "si" : undefined}
                  aria-current={activo ? "page" : undefined}
                  // Con la barra plegada la etiqueta no se lee; el title la
                  // devuelve sin montar un sistema de bocadillos.
                  title={item.etiqueta}
                >
                  <span className="barra__icono">
                    <Icono grosor={activo ? 2.1 : 1.7} />
                  </span>
                  <span className="barra__etiqueta">{item.etiqueta}</span>
                  {item.insignia ? (
                    <span className="barra__insignia barra__etiqueta">{item.insignia}</span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="barra__pie">
            {usuario ? (
              <div className="barra__usuario" title={usuario.detalle ?? usuario.nombre}>
                <span className="barra__avatar" aria-hidden="true">
                  {inicial}
                </span>
                <span className="barra__usuario-datos">
                  <span className="barra__usuario-nombre">{usuario.nombre}</span>
                  {usuario.detalle ? (
                    <span className="barra__usuario-meta">{usuario.detalle}</span>
                  ) : null}
                </span>
              </div>
            ) : null}

            {botonCerrarSesion ? (
              <div className="barra__salir-propio">{botonCerrarSesion}</div>
            ) : alCerrarSesion ? (
              <button
                className="button button--ghost barra__salir"
                onClick={alCerrarSesion}
                title={etiquetaCerrarSesion}
              >
                <span className="barra__etiqueta">{etiquetaCerrarSesion}</span>
                <span className="barra__salir-icono" aria-hidden="true">
                  <IconoSalir />
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </aside>

      <main className="shell__main">
        <header className="page-header">
          <div className="page-header__content">
            {breadcrumbs}
            <p className="page-header__eyebrow">{ambito}</p>
            <h2>{title}</h2>
            {description ? <p className="page-header__description">{description}</p> : null}
          </div>
          <div className="page-header__actions">{headerActions}</div>
        </header>
        {children}
      </main>
    </div>
  );
}
