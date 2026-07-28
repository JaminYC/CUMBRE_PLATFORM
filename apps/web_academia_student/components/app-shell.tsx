"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { LogoBryce } from "@/components/logo-bryce";
import { usePathname } from "next/navigation";
import { commonMessages, useAppLocale } from "@cumbre/app-runtime/client";
import { useAuthSession } from "@/features/auth/auth-session";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";

const CLAVE_BARRA = "bryce.barra.abierta";

/* ── Iconos. Trazo de 1.75 para que se lean bien a 20px. ── */

function Ico({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconoInicio = () => (
  <Ico>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
  </Ico>
);
const IconoProgreso = () => (
  <Ico>
    <path d="M3 3v18h18" />
    <path d="M7 15l4-5 3 3 5-7" />
  </Ico>
);
const IconoAula = () => (
  <Ico>
    <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  </Ico>
);
const IconoUnirme = () => (
  <Ico>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
  </Ico>
);
const IconoGenerador = () => (
  <Ico>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
  </Ico>
);
const IconoRuta = () => (
  <Ico>
    <circle cx="6" cy="19" r="3" />
    <circle cx="18" cy="5" r="3" />
    <path d="M9 19h6a3 3 0 0 0 3-3V8" />
  </Ico>
);
const IconoPanel = () => (
  <Ico>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M9 3v18" />
  </Ico>
);

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
  const { session, signOut, rememberRoute } = useAuthSession();

  /* Arranca abierta y se corrige tras montar: si leyéramos localStorage
     durante el render, el servidor y el navegador dibujarían distinto. */
  const [abierta, setAbierta] = useState(true);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
    const guardado = window.localStorage.getItem(CLAVE_BARRA);
    if (guardado === "0") setAbierta(false);
  }, []);

  function alternar() {
    setAbierta((previo) => {
      const siguiente = !previo;
      window.localStorage.setItem(CLAVE_BARRA, siguiente ? "1" : "0");
      return siguiente;
    });
  }

  const navItems = [
    { href: "/dashboard", label: t({ es: "Inicio", en: "Dashboard" }), Icono: IconoInicio },
    { href: "/progress", label: t({ es: "Progreso", en: "Progress" }), Icono: IconoProgreso },
    { href: "/classroom", label: t({ es: "Aula", en: "Classroom" }), Icono: IconoAula },
    { href: "/join-class", label: t({ es: "Unirme a clase", en: "Join class" }), Icono: IconoUnirme },
    { href: "/generator", label: t({ es: "Generador", en: "Generator" }), Icono: IconoGenerador }
  ];

  useEffect(() => {
    if (pathname) {
      rememberRoute(pathname);
    }
  }, [pathname, session?.userId]);

  const iniciales = (session?.displayName ?? "E")
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase() ?? "")
    .join("");

  /**
   * Plegada, cualquier zona vacía de la barra la reabre.
   * Los enlaces siguen navegando: si el clic cayó sobre uno, no se
   * despliega — sería frustrante querer ir a "Progreso" y que solo se abra.
   */
  function clicEnBarra() {
    if (!abierta) alternar();
  }

  /* Los enlaces cortan la propagación: navegar no debe desplegar.
     Deducirlo del DOM no sirve — plegada, el enlace mide 256 px por
     dentro aunque se vea recortado a 56, así que el punto del clic
     engaña. */
  function noDesplegar(evento: React.MouseEvent) {
    evento.stopPropagation();
  }

  return (
    <div className={abierta ? "shell" : "shell shell--plegada"}>
      <aside
        className="shell__nav"
        data-montado={montado}
        onClick={clicEnBarra}
        title={!abierta ? t({ es: "Abrir menú", en: "Open menu" }) : undefined}
      >
        {/* Ancho fijo por dentro: sin esto el contenido se aplasta
            mientras el contenedor se achica. */}
        <div className="shell__nav-inner">
          <header className="shell__cabecera">
            <button
              type="button"
              className="shell__marca"
              /* El botón existe para quien navega con teclado: el clic
                 general del aside no es accesible por sí solo. */
              onClick={
                !abierta
                  ? (evento) => {
                      evento.stopPropagation();
                      alternar();
                    }
                  : undefined
              }
              aria-label={
                abierta ? "Academia Bryce" : t({ es: "Abrir menú", en: "Open menu" })
              }
            >
              <LogoBryce />
            </button>

            {abierta ? (
              <button
                type="button"
                className="shell__plegar"
                onClick={alternar}
                aria-label={t({ es: "Cerrar menú", en: "Close menu" })}
              >
                <IconoPanel />
              </button>
            ) : null}
          </header>

          <nav className="shell__menu">
            {navItems.map(({ href, label, Icono }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "shell__link active" : "shell__link"}
                title={!abierta ? label : undefined}
                onClick={noDesplegar}
              >
                <span className="shell__link-ico">
                  <Icono />
                </span>
                <span className="shell__link-txt">{label}</span>
              </Link>
            ))}

            {session?.defaultLearningPathId ? (
              <Link
                href={`/learning-path/${session.defaultLearningPathId}`}
                className={
                  pathname.startsWith("/learning-path")
                    ? "shell__link active"
                    : "shell__link"
                }
                title={!abierta ? t({ es: "Ruta de aprendizaje", en: "Learning path" }) : undefined}
                onClick={noDesplegar}
              >
                <span className="shell__link-ico">
                  <IconoRuta />
                </span>
                <span className="shell__link-txt">
                  {t({ es: "Ruta de aprendizaje", en: "Learning path" })}
                </span>
              </Link>
            ) : null}
          </nav>

          <div className="shell__perfil">
            <span className="shell__avatar" aria-hidden="true">
              {iniciales}
            </span>
            <div className="shell__perfil-datos">
              <p className="shell__perfil-nombre">
                {session?.displayName ?? t({ es: "Estudiante", en: "Student" })}
              </p>
              <p className="shell__perfil-correo">{session?.email ?? ""}</p>
            </div>
            <button
              type="button"
              className="shell__salir"
              onClick={signOut}
              aria-label={t(commonMessages.signOut)}
              title={t(commonMessages.signOut)}
            >
              <Ico>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M16 17l5-5-5-5" />
                <path d="M21 12H9" />
              </Ico>
            </button>
          </div>
        </div>
      </aside>

      <main className="shell__main">
        <header className="page-header">
          <div className="page-header__content">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <h2>{title}</h2>
            {description ? <p className="page-header__description">{description}</p> : null}
          </div>
          {headerActions ? (
            <div className="page-header__actions">{headerActions}</div>
          ) : null}
        </header>
        {children}
      </main>
    </div>
  );
}
