"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { SignOutButton } from "@/components/sign-out-button";
import { useMarca } from "@cumbre/brands/client";

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
const NAV_ITEMS = [
  { href: "/dashboard",      es: "Panel docente",         en: "Dashboard",       Icon: GridIcon,      badge: null },
  { href: "/classrooms",     es: "Aulas",                 en: "Classrooms",      Icon: UsersIcon,     badge: null },
  { href: "/yarinet",        es: "YariNET",               en: "YariNET",         Icon: YariNetIcon,   badge: "Nuevo" },
  { href: "/materials",      es: "Materiales",            en: "Materials",       Icon: FilesIcon,     badge: null },
  { href: "/module-builder", es: "Constructor de módulos", en: "Module builder",  Icon: BlocksIcon,    badge: null },
  { href: "/exams",          es: "Examenes",              en: "Exams",           Icon: ClipboardIcon, badge: null },
  { href: "/authoring",      es: "Estudio de autoría",    en: "Authoring",       Icon: PenIcon,       badge: null },
] as const;

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
  const marca = useMarca();
  const pathname = usePathname();
  const { t } = useAppLocale();

  return (
    <div className="shell">
      <aside className="shell__nav">
        {/* Brand */}
        <div className="shell__brand-block">
          <p className="shell__eyebrow">{t({ es: "Espacio docente", en: "Teacher space" })}</p>
          <h1 className="shell__brand">{marca.nombreCorto}</h1>
        </div>

        {/* Nav */}
        <nav className="shell__menu">
          {NAV_ITEMS.map(({ href, es, en, Icon }) => {
            const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={active ? "shell__link active" : "shell__link"}
              >
                <span className="shell__link-icon"><Icon /></span>
                <span>{t({ es, en })}</span>
              </Link>
            );
          })}
        </nav>

        {/* Profile */}
        <div className="shell__profile">
          <div className="shell__avatar">D</div>
          <div className="shell__profile-info">
            <p className="shell__profile-name">{t({ es: "Docente", en: "Teacher" })}</p>
            <p className="shell__profile-meta">
              {t({ es: "Autoria y seguimiento", en: "Authoring & tracking" })}
            </p>
          </div>
          <SignOutButton />
        </div>
      </aside>

      <main className="shell__main">
        <header className="page-header">
          <div className="page-header__content">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <p className="page-header__eyebrow">
              {t({ es: "Aplicacion docente", en: "Teacher application" })}
            </p>
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
