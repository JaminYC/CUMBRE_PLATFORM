import type { PermissionScope } from "@cumbre/types";
import { buildAppSessionPayload, createServerSessionHelpers } from "@cumbre/app-runtime";
import { teacherAppConfig } from "./env";

const sessionHelpers = createServerSessionHelpers(teacherAppConfig);

export const getServerSession = sessionHelpers.getServerSession;
export const writeSessionCookie = sessionHelpers.writeSessionCookie;
export const clearSessionCookie = sessionHelpers.clearSessionCookie;

export async function requireTeacherSession(
  requiredScopes: PermissionScope[] = ["analytics:read"]
) {
  return sessionHelpers.requireSession({
    roles: ["teacher", "administrator"],
    scopes: requiredScopes
  });
}

export function buildTeacherAppSession(input: Parameters<typeof buildAppSessionPayload>[1]) {
  return buildAppSessionPayload(teacherAppConfig, input);
}
