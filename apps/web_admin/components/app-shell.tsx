"use client";

import type { ReactNode } from "react";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { Armazon, IconoGestion, IconoPanel, type ItemDeNavegacion } from "@cumbre/ui";
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
  const { t } = useAppLocale();

  const items: ItemDeNavegacion[] = [
    {
      href: "/dashboard",
      etiqueta: t({ es: "Panel administrativo", en: "Admin dashboard" }),
      Icono: IconoPanel
    },
    {
      href: "/management",
      etiqueta: t({ es: "Espacio de gestión", en: "Management workspace" }),
      Icono: IconoGestion,
      prefijo: true
    }
  ];

  return (
    <Armazon
      ambito={t({ es: "Espacio administrativo", en: "Admin space" })}
      items={items}
      usuario={{
        nombre: t({ es: "Base administrativa", en: "Admin baseline" }),
        detalle: t({
          es: "Supervisión y gestión operativa",
          en: "Operational oversight and management"
        })
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
