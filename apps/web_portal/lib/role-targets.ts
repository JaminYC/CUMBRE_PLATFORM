import type { AppRole } from "@cumbre/app-auth";
import type { UserRole } from "@cumbre/types";
import { portalAppConfig } from "./env";

type SupportedPortalRole = "student" | "teacher" | "administrator";

export interface PortalRoleTarget {
  userRole: SupportedPortalRole;
  appRole: AppRole;
  label: string;
  appUrl: string;
  dashboardUrl: string;
  loginUrl: string;
  sessionCookieName: string;
  sessionCookieDomain?: string;
  sessionSecret: string;
}

/**
 * La cookie de sesion NO depende de la institucion.
 *
 * Las dos viven bajo .teamvastoria.com, asi que comparten nombre, dominio y
 * secreto. Se deja aparte a proposito: leer la sesion activa o cerrarla no
 * necesita saber quien entro, y exigirle la marca a esas funciones solo
 * agregaria ruido sin ganar nada.
 *
 * El dia que una institucion se mude a su propio dominio —academiabryce.com,
 * por ejemplo— esto tambien tendra que separarse por marca.
 */
export interface CookieDeRol {
  userRole: SupportedPortalRole;
  sessionCookieName: string;
  sessionCookieDomain?: string;
  sessionSecret: string;
}

export const cookiesDeRol: CookieDeRol[] = [
  {
    userRole: "administrator",
    sessionCookieName: portalAppConfig.adminSessionCookieName,
    sessionCookieDomain: portalAppConfig.adminSessionCookieDomain,
    sessionSecret: portalAppConfig.adminSessionSecret
  },
  {
    userRole: "teacher",
    sessionCookieName: portalAppConfig.teacherSessionCookieName,
    sessionCookieDomain: portalAppConfig.teacherSessionCookieDomain,
    sessionSecret: portalAppConfig.teacherSessionSecret
  },
  {
    userRole: "student",
    sessionCookieName: portalAppConfig.studentSessionCookieName,
    sessionCookieDomain: portalAppConfig.studentSessionCookieDomain,
    sessionSecret: portalAppConfig.studentSessionSecret
  }
];

/**
 * A donde se manda a cada rol, segun la institucion por la que entro.
 *
 * Esto era un valor unico —STUDENT_APP_URL y compania—. Con una sola marca
 * daba igual; desde que el portal sirve a dos, esa variable global mandaba a
 * los alumnos de CUMBRE al campus de Bryce, porque el destino se decidia sin
 * mirar por que dominio habia llegado la persona.
 *
 * En desarrollo las dos comparten puerto, pero no host: la marca viaja en el
 * subdominio porque el campus la resuelve igual que el portal, mirando de
 * donde viene la peticion. Apuntar a `localhost` a secas mandaba al alumno de
 * Bryce a un campus con los colores de CUMBRE.
 */
const enProduccion = process.env.NODE_ENV === "production";

/**
 * Antepone el subdominio de la institucion al host local.
 *
 * Cualquier nombre que termine en `.localhost` resuelve a la maquina misma sin
 * tocar el fichero de hosts, asi que `bryce.localhost:3100` funciona tal cual
 * y el campus reconoce la marca.
 */
function enLocalPara(marca: string, url: string): string {
  try {
    const destino = new URL(url);
    if (destino.hostname === "localhost" || destino.hostname === "127.0.0.1") {
      destino.hostname = `${marca}.localhost`;
    }
    return destino.origin;
  } catch {
    return url;
  }
}

const DESTINOS_POR_MARCA: Record<string, Record<SupportedPortalRole, string>> = {
  cumbre: {
    student: portalAppConfig.studentAppUrl,
    teacher: portalAppConfig.teacherAppUrl,
    administrator: portalAppConfig.adminAppUrl
  },
  bryce: {
    student:
      process.env.BRYCE_STUDENT_APP_URL ??
      (enProduccion
        ? "https://alumno.bryce.teamvastoria.com"
        : enLocalPara("bryce", portalAppConfig.studentAppUrl)),
    teacher:
      process.env.BRYCE_TEACHER_APP_URL ??
      (enProduccion
        ? "https://docente.bryce.teamvastoria.com"
        : enLocalPara("bryce", portalAppConfig.teacherAppUrl)),
    administrator:
      process.env.BRYCE_ADMIN_APP_URL ??
      (enProduccion
        ? "https://direccion.bryce.teamvastoria.com"
        : enLocalPara("bryce", portalAppConfig.adminAppUrl))
  }
};

function destinosDeMarca(marcaId: string) {
  return DESTINOS_POR_MARCA[marcaId] ?? DESTINOS_POR_MARCA.cumbre;
}

const ETIQUETAS: Record<
  SupportedPortalRole,
  { label: string; appRole: AppRole }
> = {
  student: { label: "Espacio del estudiante", appRole: "student" },
  teacher: { label: "Espacio docente", appRole: "teacher" },
  administrator: { label: "Espacio administrativo", appRole: "admin" }
};

function construirDestino(
  role: SupportedPortalRole,
  marcaId: string
): PortalRoleTarget {
  const base = destinosDeMarca(marcaId)[role];
  const cookie = cookiesDeRol.find((c) => c.userRole === role)!;

  return {
    userRole: role,
    appRole: ETIQUETAS[role].appRole,
    label: ETIQUETAS[role].label,
    appUrl: base,
    dashboardUrl: `${base}/dashboard`,
    loginUrl: `${base}/login`,
    sessionCookieName: cookie.sessionCookieName,
    sessionCookieDomain: cookie.sessionCookieDomain,
    sessionSecret: cookie.sessionSecret
  };
}

export function portalRoleTargetsPara(
  marcaId: string
): Record<SupportedPortalRole, PortalRoleTarget> {
  return {
    student: construirDestino("student", marcaId),
    teacher: construirDestino("teacher", marcaId),
    administrator: construirDestino("administrator", marcaId)
  };
}

export function portalRoleTargetOrderPara(marcaId: string): PortalRoleTarget[] {
  const destinos = portalRoleTargetsPara(marcaId);
  return [destinos.administrator, destinos.teacher, destinos.student];
}

export function isPortalSupportedRole(
  role: UserRole
): role is SupportedPortalRole {
  return role === "student" || role === "teacher" || role === "administrator";
}

export function resolvePortalTargetForRole(role: UserRole, marcaId: string) {
  if (!isPortalSupportedRole(role)) {
    throw new Error(
      "Este rol todavía no tiene una aplicación de destino dentro del portal."
    );
  }

  return construirDestino(role, marcaId);
}
