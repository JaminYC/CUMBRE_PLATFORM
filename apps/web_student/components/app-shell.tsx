"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { commonMessages, useAppLocale } from "@cumbre/app-runtime/client";
import { useAuthSession } from "@/features/auth/auth-session";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { useMarca } from "@cumbre/brands/client";
import {
  IconoAula,
  IconoGenerador,
  IconoInicio,
  IconoPliegue,
  IconoPractica,
  IconoProgreso,
  IconoRuta,
  IconoUnirse
} from "@/components/iconos-navegacion";

/**
 * Barra lateral plegable del campus.
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
 */

const CLAVE_PLIEGUE = "campus:barra-plegada";

/** Un item con `prefijo` se marca activo tambien en sus subpaginas. */
type ItemNav = {
  href: string;
  etiqueta: string;
  Icono: (p: { grosor?: number }) => ReactNode;
  prefijo?: boolean;
};

export function AppShell({
  title,
  description,
  children,
  breadcrumbs,
  headerActions
}: {
  title: string;
  description?: string;
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  headerActions?: ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useAppLocale();
  const marca = useMarca();
  const { session, signOut, rememberRoute } = useAuthSession();
  const [plegada, setPlegada] = useState(false);

  // El atributo ya lo dejo puesto el script previo al pintado; aqui solo se
  // sincroniza React con lo que el documento ya dice, para que el boton anuncie
  // el estado correcto a un lector de pantalla.
  useEffect(() => {
    const raiz = document.documentElement;
    setPlegada(raiz.dataset.barra === "plegada");

    // Misma regla que el script del layout, para que girar el movil o cambiar
    // el tamaño de la ventana no deje la barra en un estado que no cabe.
    const estrecha = window.matchMedia("(max-width: 980px)");
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
   * Es un blanco enorme comparado con el boton de 34 px, y cuando la barra
   * esta reducida a iconos es justo lo que sobra. Tres decisiones:
   *
   *   - Solo abre, nunca cierra. Si tambien plegara, un clic despistado en el
   *     margen derramaria la navegacion mientras lees.
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

  const items: ItemNav[] = [
    { href: "/dashboard", etiqueta: t({ es: "Inicio", en: "Home" }), Icono: IconoInicio },
    {
      href: "/practica",
      etiqueta: t({ es: "Práctica", en: "Practice" }),
      Icono: IconoPractica,
      prefijo: true
    },
    {
      href: "/progress",
      etiqueta: t({ es: "Progreso", en: "Progress" }),
      Icono: IconoProgreso
    },
    {
      href: "/classroom",
      etiqueta: t({ es: "Aula", en: "Classroom" }),
      Icono: IconoAula,
      prefijo: true
    },
    {
      href: "/join-class",
      etiqueta: t({ es: "Unirme a clase", en: "Join class" }),
      Icono: IconoUnirse
    },
    {
      href: "/generator",
      etiqueta: t({ es: "Generador", en: "Generator" }),
      Icono: IconoGenerador
    }
  ];

  if (session?.defaultLearningPathId) {
    items.push({
      href: `/learning-path/${session.defaultLearningPathId}`,
      etiqueta: t({ es: "Ruta de aprendizaje", en: "Learning path" }),
      Icono: IconoRuta,
      prefijo: true
    });
  }

  // Con `prefijo`, /classroom sigue marcado al entrar en /classroom/modules.
  // Sin el, la comparacion es exacta: /dashboard no debe encenderse desde otra.
  const esActivo = (item: ItemNav) =>
    item.prefijo ? pathname.startsWith(item.href) : pathname === item.href;

  const resumeHref =
    session?.lastTopicId && session?.lastLessonId
      ? `/topics/${session.lastTopicId}/lessons/${session.lastLessonId}`
      : session?.lastVisitedPath;

  useEffect(() => {
    if (pathname) {
      rememberRoute(pathname);
    }
  }, [pathname, session?.userId]);

  const nombre = session?.displayName ?? t({ es: "Estudiante", en: "Student" });
  const inicial = (nombre.trim()[0] ?? "?").toUpperCase();

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
              <img
                className="barra__logo-completo"
                src={marca.logo.principal}
                alt={marca.nombre}
                draggable={false}
              />
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
              aria-label={
                plegada
                  ? t({ es: "Desplegar la barra", en: "Expand sidebar" })
                  : t({ es: "Plegar la barra", en: "Collapse sidebar" })
              }
            >
              <IconoPliegue />
            </button>
          </div>

          <nav className="barra__menu" aria-label={t({ es: "Secciones", en: "Sections" })}>
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
                </Link>
              );
            })}
          </nav>

          <div className="barra__pie">
            <div className="barra__usuario" title={session?.email ?? nombre}>
              <span className="barra__avatar" aria-hidden="true">
                {inicial}
              </span>
              <span className="barra__usuario-datos">
                <span className="barra__usuario-nombre">{nombre}</span>
                <span className="barra__usuario-meta">
                  {session?.email ?? t({ es: "Sesión activa", en: "Active session" })}
                </span>
              </span>
            </div>
            <button
              className="button button--ghost barra__salir"
              onClick={() => void signOut()}
              title={t(commonMessages.signOut)}
            >
              <span className="barra__etiqueta">{t(commonMessages.signOut)}</span>
              <span className="barra__salir-icono" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 20H6.5A1.5 1.5 0 0 1 5 18.5v-13A1.5 1.5 0 0 1 6.5 4H14" />
                  <path d="M17.5 15.5 21 12l-3.5-3.5" />
                  <path d="M21 12h-11" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </aside>

      <main className="shell__main">
        <header className="page-header">
          <div className="page-header__content">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <p className="page-header__eyebrow">
              {t({ es: "Espacio del estudiante", en: "Student space" })}
            </p>
            <h2>{title}</h2>
            {description ? <p className="page-header__description">{description}</p> : null}
          </div>
          <div className="page-header__actions">
            {resumeHref && resumeHref !== pathname ? (
              <Link className="button button--ghost" href={resumeHref}>
                {t({ es: "Retomar recorrido", en: "Resume journey" })}
              </Link>
            ) : null}
            {headerActions}
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
