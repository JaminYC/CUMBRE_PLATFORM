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

export const portalRoleTargets: Record<SupportedPortalRole, PortalRoleTarget> = {
  student: {
    userRole: "student",
    appRole: "student",
    label: "Espacio del estudiante",
    appUrl: portalAppConfig.studentAppUrl,
    dashboardUrl: `${portalAppConfig.studentAppUrl}/dashboard`,
    loginUrl: `${portalAppConfig.studentAppUrl}/login`,
    sessionCookieName: portalAppConfig.studentSessionCookieName,
    sessionCookieDomain: portalAppConfig.studentSessionCookieDomain,
    sessionSecret: portalAppConfig.studentSessionSecret
  },
  teacher: {
    userRole: "teacher",
    appRole: "teacher",
    label: "Espacio docente",
    appUrl: portalAppConfig.teacherAppUrl,
    dashboardUrl: `${portalAppConfig.teacherAppUrl}/dashboard`,
    loginUrl: `${portalAppConfig.teacherAppUrl}/login`,
    sessionCookieName: portalAppConfig.teacherSessionCookieName,
    sessionCookieDomain: portalAppConfig.teacherSessionCookieDomain,
    sessionSecret: portalAppConfig.teacherSessionSecret
  },
  administrator: {
    userRole: "administrator",
    appRole: "admin",
    label: "Espacio administrativo",
    appUrl: portalAppConfig.adminAppUrl,
    dashboardUrl: `${portalAppConfig.adminAppUrl}/dashboard`,
    loginUrl: `${portalAppConfig.adminAppUrl}/login`,
    sessionCookieName: portalAppConfig.adminSessionCookieName,
    sessionCookieDomain: portalAppConfig.adminSessionCookieDomain,
    sessionSecret: portalAppConfig.adminSessionSecret
  }
};

export const portalRoleTargetOrder: PortalRoleTarget[] = [
  portalRoleTargets.administrator,
  portalRoleTargets.teacher,
  portalRoleTargets.student
];

export function isPortalSupportedRole(
  role: UserRole
): role is SupportedPortalRole {
  return role === "student" || role === "teacher" || role === "administrator";
}

export function resolvePortalTargetForRole(role: UserRole) {
  if (!isPortalSupportedRole(role)) {
    throw new Error(
      "Este rol todavía no tiene una aplicación de destino dentro del portal."
    );
  }

  return portalRoleTargets[role];
}
