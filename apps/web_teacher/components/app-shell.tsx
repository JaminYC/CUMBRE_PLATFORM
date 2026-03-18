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
    { href: "/dashboard", label: t({ es: "Panel docente", en: "Teacher dashboard" }) },
    { href: "/classrooms", label: t({ es: "Aulas", en: "Classrooms" }) },
    { href: "/materials", label: t({ es: "Materiales", en: "Materials" }) },
    {
      href: "/module-builder",
      label: t({ es: "Constructor de modulos", en: "Module builder" })
    },
    { href: "/exams", label: t({ es: "Examenes", en: "Exams" }) },
    { href: "/authoring", label: t({ es: "Estudio de autoria", en: "Authoring studio" }) }
  ];

  return (
    <div className="shell">
      <aside className="shell__nav">
        <div>
          <p className="shell__eyebrow">{t({ es: "Espacio docente", en: "Teacher space" })}</p>
          <h1 className="shell__brand">Cumbre</h1>
          <p className="shell__caption">
            {t({
              es: "Visibilidad del aula y autoria ligera para lecciones, mapeo conceptual y curacion instruccional.",
              en: "Classroom visibility plus lightweight authoring for lessons, concept mapping, and instructional curation."
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
            {t({ es: "Base docente", en: "Teacher baseline" })}
          </p>
          <p className="shell__profile-meta">
            {t({ es: "Espacio de observacion y autoria", en: "Observation and authoring workspace" })}
          </p>
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
