"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { commonMessages, useAppLocale } from "@cumbre/app-runtime/client";
import { useAuthSession } from "@/features/auth/auth-session";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { useMarca } from "@cumbre/brands/client";

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
  const navItems = [
    { href: "/dashboard", label: t({ es: "Inicio", en: "Dashboard" }) },
    { href: "/progress", label: t({ es: "Progreso", en: "Progress" }) },
    { href: "/classroom", label: t({ es: "Aula", en: "Classroom" }) },
    { href: "/join-class", label: t({ es: "Unirme a clase", en: "Join class" }) },
    { href: "/generator", label: t({ es: "✨ Generador", en: "✨ Generator" }) }
  ];
  const resumeHref =
    session?.lastTopicId && session?.lastLessonId
      ? `/topics/${session.lastTopicId}/lessons/${session.lastLessonId}`
      : session?.lastVisitedPath;

  useEffect(() => {
    if (pathname) {
      rememberRoute(pathname);
    }
  }, [pathname, session?.userId]);

  return (
    <div className="shell">
      <aside className="shell__nav">
        <div>
          <p className="shell__eyebrow">
            {t({ es: "Espacio del estudiante", en: "Student space" })}
          </p>
          <h1 className="shell__brand">{marca.nombreCorto}</h1>
          <p className="shell__caption">
            {t({
              es: "Aprendizaje adaptativo, hitos claros y siguientes pasos guiados.",
              en: "Adaptive learning, clear milestones, and guided next steps."
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

          {session?.defaultLearningPathId ? (
            <Link
              href={`/learning-path/${session.defaultLearningPathId}`}
              className={
                pathname.startsWith("/learning-path")
                  ? "shell__link active"
                  : "shell__link"
              }
            >
              {t({ es: "Ruta de aprendizaje", en: "Learning path" })}
            </Link>
          ) : null}
        </nav>

        <div className="shell__profile">
          <p className="shell__profile-name">
            {session?.displayName ?? t({ es: "Estudiante", en: "Student" })}
          </p>
          <p className="shell__profile-meta">
            {session?.email ??
              t({
                es: "Sesion iniciada con el backend local",
                en: "Signed in with local backend"
              })}
          </p>
          <button className="button button--ghost" onClick={() => void signOut()}>
            {t(commonMessages.signOut)}
          </button>
        </div>
      </aside>

      <main className="shell__main">
        <header className="page-header">
          <div className="page-header__content">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <p className="page-header__eyebrow">
              {t({ es: "Aplicacion del estudiante", en: "Student application" })}
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
            {session?.defaultLearningPathId && !pathname.startsWith("/learning-path") ? (
              <Link
                className="button button--ghost"
                href={`/learning-path/${session.defaultLearningPathId}`}
              >
                {t({ es: "Ruta actual", en: "Current path" })}
              </Link>
            ) : null}
            {pathname !== "/progress" ? (
              <Link className="button button--ghost" href="/progress">
                {t({ es: "Progreso", en: "Progress" })}
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
