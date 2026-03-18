import type { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isRefreshExpired,
  parseAppSession,
  serializeAppSession,
  sessionHasRole,
  sessionHasScopes,
  type AppRole,
  type AppSessionPayload
} from "@cumbre/app-auth";
import {
  resolvePermissionScopes,
  type PermissionScope,
  type UserRole
} from "@cumbre/types";

export interface AppRuntimeConfig {
  appRole: AppRole;
  appSessionCookieName: string;
  appSessionSecret: string;
  appSessionCookieDomain?: string;
  loginPath?: string;
}

export function createServerSessionHelpers(config: AppRuntimeConfig) {
  async function getServerSession() {
    const cookieStore = await cookies();
    const serializedValue = cookieStore.get(config.appSessionCookieName)?.value;
    const session = parseAppSession(serializedValue, config.appSessionSecret);

    if (!session || isRefreshExpired(session)) {
      return null;
    }

    return session;
  }

  async function requireSession(options: {
    roles?: UserRole[];
    scopes?: PermissionScope[];
  } = {}) {
    const session = await getServerSession();

    if (!session) {
      redirect(config.loginPath ?? "/login");
    }

    const activeSession = session;

    if (options.roles?.length && !sessionHasRole(activeSession, options.roles)) {
      redirect(config.loginPath ?? "/login");
    }

    if (options.scopes?.length && !sessionHasScopes(activeSession, options.scopes)) {
      redirect(config.loginPath ?? "/login");
    }

    return activeSession;
  }

  function writeSessionCookie(response: NextResponse, session: AppSessionPayload) {
    response.cookies.set({
      name: config.appSessionCookieName,
      value: serializeAppSession(session, config.appSessionSecret),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      domain: config.appSessionCookieDomain,
      path: "/",
      expires: new Date(session.refreshExpiresAt)
    });
  }

  function clearSessionCookie(response: NextResponse) {
    response.cookies.set({
      name: config.appSessionCookieName,
      value: "",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      domain: config.appSessionCookieDomain,
      path: "/",
      expires: new Date(0)
    });
  }

  return {
    getServerSession,
    requireSession,
    writeSessionCookie,
    clearSessionCookie
  };
}

export function buildAppSessionPayload(
  config: Pick<AppRuntimeConfig, "appRole">,
  input: {
    user: {
      id: string;
      displayName: string;
      email?: string;
      primaryRole: UserRole;
      roles: UserRole[];
      scopes?: PermissionScope[];
    };
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    refreshExpiresAt: string;
  }
): AppSessionPayload {
  return {
    appRole: config.appRole,
    userId: input.user.id,
    displayName: input.user.displayName,
    email: input.user.email,
    primaryRole: input.user.primaryRole,
    roles: input.user.roles,
    scopes: input.user.scopes ?? resolvePermissionScopes(input.user.roles),
    accessToken: input.accessToken,
    refreshToken: input.refreshToken,
    expiresAt: input.expiresAt,
    refreshExpiresAt: input.refreshExpiresAt,
    issuedAt: new Date().toISOString(),
    lastValidatedAt: new Date().toISOString()
  };
}
