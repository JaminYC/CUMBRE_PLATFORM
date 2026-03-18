"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { SignOutButton } from "@/components/sign-out-button";

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
  const navItems = [
    { href: "/dashboard", label: t({ es: "Panel administrativo", en: "Admin dashboard" }) },
    { href: "/management", label: t({ es: "Espacio de gestion", en: "Management workspace" }) }
  ];

  return (
    <div className="shell">
      <aside className="shell__nav">
        <div>
          <p className="shell__eyebrow">
            {t({ es: "Espacio administrativo", en: "Admin space" })}
          </p>
          <h1 className="shell__brand">Cumbre</h1>
          <p className="shell__caption">
            {t({
              es: "Visibilidad de plataforma y gestion de grafo/contenido para temas, conceptos, relaciones y reparacion de integridad.",
              en: "Platform visibility plus graph/content management for topics, concepts, edges, and integrity repair."
            })}
          </p>
        </div>

        <nav className="shell__menu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "shell__link active" : "shell__link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shell__profile">
          <p className="shell__profile-name">
            {t({ es: "Base administrativa", en: "Admin baseline" })}
          </p>
          <p className="shell__profile-meta">
            {t({ es: "Supervision y gestion operativa", en: "Operational oversight and management" })}
          </p>
          <SignOutButton />
        </div>
      </aside>

      <main className="shell__main">
        <header className="page-header">
          <div className="page-header__content">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <p className="page-header__eyebrow">
              {t({ es: "Aplicacion administrativa", en: "Admin application" })}
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
