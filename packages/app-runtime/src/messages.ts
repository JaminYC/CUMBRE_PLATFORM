import type { LocalizedText } from "./i18n";

export const commonMessages = {
  signOut: {
    es: "Cerrar sesión",
    en: "Sign out"
  },
  retry: {
    es: "Reintentar",
    en: "Try again"
  },
  loadingViewTitle: {
    es: "Estamos cargando esta vista.",
    en: "We are loading this view."
  },
  loadingDashboardTitle: {
    es: "Estamos cargando este panel.",
    en: "We are loading this dashboard."
  },
  viewLoadErrorTitle: {
    es: "No pudimos cargar esta vista.",
    en: "We could not load this view."
  },
  dashboardLoadErrorTitle: {
    es: "No pudimos cargar este panel.",
    en: "We could not load this dashboard."
  },
  breadcrumbLabel: {
    es: "Migas de navegación",
    en: "Breadcrumb"
  }
} satisfies Record<string, LocalizedText>;
