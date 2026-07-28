import type { PermissionScope } from "@cumbre/types";
import { buildAppSessionPayload, createServerSessionHelpers } from "@cumbre/app-runtime";
import { adminAppConfig } from "./env";

const sessionHelpers = createServerSessionHelpers(adminAppConfig);

export const getServerSession = sessionHelpers.getServerSession;
export const writeSessionCookie = sessionHelpers.writeSessionCookie;
export const clearSessionCookie = sessionHelpers.clearSessionCookie;

export async function requireAdminSession(
  requiredScopes: PermissionScope[] = ["analytics:read"]
) {
  return sessionHelpers.requireSession({
    roles: ["administrator"],
    scopes: requiredScopes
  });
}

export function buildAdminAppSession(input: Parameters<typeof buildAppSessionPayload>[1]) {
  return buildAppSessionPayload(adminAppConfig, input);
}
