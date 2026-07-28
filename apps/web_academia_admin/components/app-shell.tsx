"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { LogoBryce } from "@/components/logo-bryce";
import { usePathname } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { SignOutButton } from "@/components/sign-out-button";


const CLAVE_BARRA = "bryce.barra.abierta";

function Ico({ children }: { children: ReactNode }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const IconoPersonas = () => (
  <Ico>
    <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  </Ico>
);

const IconoContenido = () => (
  <Ico>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </Ico>
);

function IconoPanel() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M9 3v18" />
    </svg>
  );
}

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

  const navItems = [
    {
      href: "/dashboard",
      label: t({ es: "Tu academia", en: "Your academy" }),
      Icono: IconoPersonas
    },
    {
      href: "/management",
      label: t({ es: "Contenido", en: "Content" }),
      Icono: IconoContenido
    }
  ];

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
            {navItems.map(({ href, label, Icono }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "shell__link active" : "shell__link"}
                title={!abierta ? label : undefined}
                onClick={(evento) => evento.stopPropagation()}
              >
                <span className="shell__link-ico">
                  <Icono />
                </span>
                <span className="shell__link-txt">{label}</span>
              </Link>
            ))}
          </nav>

          <div className="shell__perfil">
            <span className="shell__avatar" aria-hidden="true">
              DA
            </span>
            <div className="shell__perfil-datos">
              <p className="shell__perfil-nombre">
                {t({ es: "Dirección", en: "Administration" })}
              </p>
              <p className="shell__perfil-correo">Bryce · Arequipa</p>
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
