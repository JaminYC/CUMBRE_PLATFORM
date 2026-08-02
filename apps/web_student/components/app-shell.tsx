"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { commonMessages, useAppLocale } from "@cumbre/app-runtime/client";
import {
  Armazon,
  IconoAula,
  IconoGenerador,
  IconoInicio,
  IconoPractica,
  IconoProgreso,
  IconoRuta,
  IconoUnirse,
  type ItemDeNavegacion
} from "@cumbre/ui";
import { useAuthSession } from "@/features/auth/auth-session";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";

/**
 * El armazon del alumno: la barra y su comportamiento viven en @cumbre/ui.
 * Aqui solo queda lo que de verdad distingue a esta aplicacion —sus secciones,
 * quien ha entrado y el enlace para retomar el recorrido.
 */
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

  const items: ItemDeNavegacion[] = [
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
    <Armazon
      ambito={t({ es: "Espacio del estudiante", en: "Student space" })}
      items={items}
      usuario={{
        nombre: session?.displayName ?? t({ es: "Estudiante", en: "Student" }),
        detalle: session?.email
      }}
      alCerrarSesion={() => void signOut()}
      etiquetaCerrarSesion={t(commonMessages.signOut)}
      etiquetaSecciones={t({ es: "Secciones", en: "Sections" })}
      etiquetaPlegar={t({ es: "Plegar la barra", en: "Collapse sidebar" })}
      etiquetaDesplegar={t({ es: "Desplegar la barra", en: "Expand sidebar" })}
      title={title}
      description={description}
      breadcrumbs={breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
      headerActions={
        <>
          {resumeHref && resumeHref !== pathname ? (
            <Link className="button button--ghost" href={resumeHref}>
              {t({ es: "Retomar recorrido", en: "Resume journey" })}
            </Link>
          ) : null}
          {headerActions}
        </>
      }
    >
      {children}
    </Armazon>
  );
}
