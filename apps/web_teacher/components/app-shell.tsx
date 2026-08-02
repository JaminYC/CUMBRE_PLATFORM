"use client";

import type { ReactNode } from "react";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { useMarca } from "@cumbre/brands/client";
import {
  Armazon,
  IconoAulas,
  IconoAutoria,
  IconoExamenes,
  IconoMateriales,
  IconoModulos,
  IconoPanel,
  IconoYariNet,
  type ItemDeNavegacion
} from "@cumbre/ui";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui";
import { SignOutButton } from "@/components/sign-out-button";

/**
 * `funcionalidad` marca las entradas que dependen de la institucion. Sin ese
 * campo, la entrada la ven todas.
 */
const SECCIONES = [
  { href: "/dashboard", es: "Panel docente", en: "Dashboard", Icono: IconoPanel },
  { href: "/classrooms", es: "Aulas", en: "Classrooms", Icono: IconoAulas },
  {
    href: "/yarinet",
    es: "YariNET",
    en: "YariNET",
    Icono: IconoYariNet,
    insignia: "Nuevo",
    funcionalidad: "yarinet"
  },
  { href: "/materials", es: "Materiales", en: "Materials", Icono: IconoMateriales },
  {
    href: "/module-builder",
    es: "Constructor de módulos",
    en: "Module builder",
    Icono: IconoModulos
  },
  { href: "/exams", es: "Exámenes", en: "Exams", Icono: IconoExamenes },
  { href: "/authoring", es: "Estudio de autoría", en: "Authoring", Icono: IconoAutoria }
] as const;

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
  const { t } = useAppLocale();

  const items: ItemDeNavegacion[] = SECCIONES.filter(
    (seccion) =>
      !("funcionalidad" in seccion) ||
      marca.funcionalidades[
        seccion.funcionalidad as keyof typeof marca.funcionalidades
      ]
  ).map((seccion) => ({
    href: seccion.href,
    etiqueta: t({ es: seccion.es, en: seccion.en }),
    Icono: seccion.Icono,
    // El panel se compara exacto; el resto siguen encendidos en sus subpaginas.
    prefijo: seccion.href !== "/dashboard",
    insignia: "insignia" in seccion ? seccion.insignia : undefined
  }));

  return (
    <Armazon
      ambito={t({ es: "Espacio docente", en: "Teacher space" })}
      items={items}
      usuario={{
        nombre: t({ es: "Docente", en: "Teacher" }),
        detalle: t({ es: "Autoría y seguimiento", en: "Authoring & tracking" })
      }}
      etiquetaSecciones={t({ es: "Secciones", en: "Sections" })}
      etiquetaPlegar={t({ es: "Plegar la barra", en: "Collapse sidebar" })}
      etiquetaDesplegar={t({ es: "Desplegar la barra", en: "Expand sidebar" })}
      title={title}
      description={description}
      breadcrumbs={breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
      botonCerrarSesion={<SignOutButton />}
      headerActions={headerActions}
    >
      {children}
    </Armazon>
  );
}
