import { createHmac, timingSafeEqual } from "node:crypto";
import {
  resolvePermissionScopes,
  type PermissionScope,
  type UserRole
} from "@cumbre/types";

export type AppRole = "student" | "teacher" | "admin";

export interface AppSessionPayload {
  appRole: AppRole;
  userId: string;
  displayName: string;
  email?: string;
  primaryRole: UserRole;
  roles: UserRole[];
  scopes?: PermissionScope[];
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  refreshExpiresAt: string;
  issuedAt: string;
  lastValidatedAt: string;
}

export function serializeAppSession(
  payload: AppSessionPayload,
  secret: string
): string {
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  const signature = sign(encodedPayload, secret);
  return `${encodedPayload}.${signature}`;
}

export function parseAppSession(
  serializedValue: string | undefined,
  secret: string
): AppSessionPayload | null {
  if (!serializedValue) {
    return null;
  }

  const [encodedPayload, providedSignature] = serializedValue.split(".");

  if (!encodedPayload || !providedSignature) {
    return null;
  }

  const expectedSignature = sign(encodedPayload, secret);

  try {
    if (
      !timingSafeEqual(
        Buffer.from(providedSignature),
        Buffer.from(expectedSignature)
      )
    ) {
      return null;
    }
  } catch {
    return null;
  }

  try {
    return JSON.parse(decodeBase64Url(encodedPayload)) as AppSessionPayload;
  } catch {
    return null;
  }
}

export function isSessionExpired(
  session: Pick<AppSessionPayload, "expiresAt">,
  now = new Date()
) {
  return new Date(session.expiresAt).getTime() <= now.getTime();
}

export function isRefreshExpired(
  session: Pick<AppSessionPayload, "refreshExpiresAt">,
  now = new Date()
) {
  return new Date(session.refreshExpiresAt).getTime() <= now.getTime();
}

export function sessionHasRole(
  session: Pick<AppSessionPayload, "roles">,
  allowedRoles: UserRole[]
) {
  return allowedRoles.some((role) => session.roles.includes(role));
}

export function sessionHasScopes(
  session: Pick<AppSessionPayload, "roles" | "scopes">,
  requiredScopes: PermissionScope[]
) {
  if (requiredScopes.length === 0) {
    return true;
  }

  const scopes = resolveSessionScopes(session);
  return requiredScopes.every((scope) => scopes.includes(scope));
}

export function resolveSessionScopes(
  session: Pick<AppSessionPayload, "roles" | "scopes">
) {
  return session.scopes?.length ? session.scopes : resolvePermissionScopes(session.roles);
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function encodeBase64Url(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decodeBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}
