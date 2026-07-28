"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { LogoBryce } from "@/components/logo-bryce";
import { usePathname } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { SignOutButton } from "@/components/sign-out-button";

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function GridIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="1" y="1" width="5.5" height="5.5" rx="1.2" fill="currentColor"/>
      <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.2" fill="currentColor"/>
      <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.2" fill="currentColor"/>
      <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.2" fill="currentColor"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <circle cx="5.5" cy="4.5" r="2.3" fill="currentColor"/>
      <path d="M1 12.5c0-2.485 2.015-3.5 4.5-3.5s4.5 1.015 4.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="11.5" cy="4.5" r="1.8" fill="currentColor" opacity=".5"/>
      <path d="M13.5 12.5c0-1.5-.9-2.6-2-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}

function FilesIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="3" y="2" width="7.5" height="10" rx="1.3" fill="currentColor" opacity=".25"/>
      <rect x="4.5" y="1" width="7.5" height="10" rx="1.3" stroke="currentColor" strokeWidth="1.3"/>
      <line x1="6.5" y1="4.5" x2="10" y2="4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="6.5" y1="7" x2="10" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}

function BlocksIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="1" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.2" fill="currentColor"/>
      <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.2" fill="currentColor" opacity=".4"/>
      <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="2.5" y="2.5" width="10" height="12" rx="1.3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5.5 2.5V2A2 2 0 0 1 7.5 0v0A2 2 0 0 1 9.5 2v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="5" y1="6.5" x2="10" y2="6.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="5" y1="9.5" x2="10" y2="9.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M10 2.5l2.5 2.5L5.5 12H3v-2.5L10 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M8 4.5l2.5 2.5" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  );
}

function YariNetIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M7.5 1.5v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M2 4.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M3.8 4.5L2 8.5a2 2 0 0 0 3.6 0L3.8 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M11.2 4.5L9.4 8.5a2 2 0 0 0 3.6 0L11.2 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <circle cx="7.5" cy="2" r="1.3" fill="currentColor"/>
    </svg>
  );
}

// ── Nav config ────────────────────────────────────────────────────────────────
/* YariNET quedó fuera: es un módulo de CUMBRE, no de Bryce. */
const NAV_ITEMS = [
  { href: "/dashboard",      es: "Panel",                  en: "Dashboard",      Icon: GridIcon },
  { href: "/classrooms",     es: "Aulas",                  en: "Classrooms",     Icon: UsersIcon },
  { href: "/materials",      es: "Materiales",             en: "Materials",      Icon: FilesIcon },
  { href: "/module-builder", es: "Constructor de módulos", en: "Module builder", Icon: BlocksIcon },
  { href: "/exams",          es: "Exámenes",               en: "Exams",          Icon: ClipboardIcon },
  { href: "/authoring",      es: "Crear lecciones",        en: "Authoring",      Icon: PenIcon },
] as const;

const CLAVE_BARRA = "bryce.barra.abierta";

function IconoPanel() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M9 3v18" />
    </svg>
  );
}

// ── AppShell ──────────────────────────────────────────────────────────────────
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

  /* Arranca abierta y se corrige tras montar: leer localStorage durante
     el render haría que servidor y navegador dibujen distinto. */
  const [abierta, setAbierta] = useState(true);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
    if (window.localStorage.getItem(CLAVE_BARRA) === "0") setAbierta(false);
  }, []);

  function alternar() {
    setAbierta((previo) => {
      const siguiente = !previo;
      window.localStorage.setItem(CLAVE_BARRA, siguiente ? "1" : "0");
      return siguiente;
    });
  }

  return (
    <div className={abierta ? "shell" : "shell shell--plegada"}>
      <aside
        className="shell__nav"
        data-montado={montado}
        onClick={() => {
          if (!abierta) alternar();
        }}
        title={!abierta ? t({ es: "Abrir menú", en: "Open menu" }) : undefined}
      >
        {/* Ancho fijo por dentro: evita que el contenido se aplaste
            mientras el contenedor se achica. */}
        <div className="shell__nav-inner">
          <header className="shell__cabecera">
            <button
              type="button"
              className="shell__marca"
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
            {NAV_ITEMS.map(({ href, es, en, Icon }) => {
              const active =
                pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? "shell__link active" : "shell__link"}
                  title={!abierta ? t({ es, en }) : undefined}
                  /* Navegar no debe desplegar. */
                  onClick={(evento) => evento.stopPropagation()}
                >
                  <span className="shell__link-ico">
                    <Icon />
                  </span>
                  <span className="shell__link-txt">{t({ es, en })}</span>
                </Link>
              );
            })}
          </nav>

          <div className="shell__perfil">
            <span className="shell__avatar" aria-hidden="true">
              D
            </span>
            <div className="shell__perfil-datos">
              <p className="shell__perfil-nombre">{t({ es: "Docente", en: "Teacher" })}</p>
              <p className="shell__perfil-correo">
                {t({ es: "Academia Bryce", en: "Academia Bryce" })}
              </p>
            </div>
            <SignOutButton />
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
