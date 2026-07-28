import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import type { AuthLoginResponse } from "@cumbre/schemas";
import { isRefreshExpired, parseAppSession, serializeAppSession } from "@cumbre/app-auth";
import { buildAppSessionPayload } from "@cumbre/app-runtime";
import { portalRoleTargetOrder, resolvePortalTargetForRole, type PortalRoleTarget } from "./role-targets";

export async function getActivePortalSession() {
  const cookieStore = await cookies();

  for (const target of portalRoleTargetOrder) {
    const cookieValue = cookieStore.get(target.sessionCookieName)?.value;
    const session = parseAppSession(cookieValue, target.sessionSecret);

    if (!session || isRefreshExpired(session)) {
      continue;
    }

    return {
      target,
      session,
      redirectTo: target.dashboardUrl
    };
  }

  return null;
}

export function clearRoleSessionCookies(response: NextResponse) {
  for (const target of portalRoleTargetOrder) {
    response.cookies.set({
      name: target.sessionCookieName,
      value: "",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      domain: target.sessionCookieDomain,
      path: "/",
      expires: new Date(0)
    });
  }
}

export function bridgePortalLoginToRoleApp(
  authResponse: AuthLoginResponse
) {
  const target = resolvePortalTargetForRole(authResponse.user.primaryRole);
  const session = buildAppSessionPayload(
    { appRole: target.appRole },
    authResponse
  );

  return {
    target,
    session,
    redirectTo: target.dashboardUrl
  };
}

export function applyPortalRoleSession(
  response: NextResponse,
  bridgedSession: ReturnType<typeof bridgePortalLoginToRoleApp>
) {
  clearRoleSessionCookies(response);
  writeRoleSessionCookie(response, bridgedSession.target, bridgedSession.session);
}

function writeRoleSessionCookie(
  response: NextResponse,
  target: PortalRoleTarget,
  serializedSession: ReturnType<typeof buildAppSessionPayload>
) {
  response.cookies.set({
    name: target.sessionCookieName,
    value: serializeAppSession(serializedSession, target.sessionSecret),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    domain: target.sessionCookieDomain,
    path: "/",
    expires: new Date(serializedSession.refreshExpiresAt)
  });
}
