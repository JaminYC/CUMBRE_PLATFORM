import { cookies, headers } from "next/headers";
import type { NextResponse } from "next/server";
import type { AuthLoginResponse } from "@cumbre/schemas";
import { marcaPorHost } from "@cumbre/brands";
import { isRefreshExpired, parseAppSession, serializeAppSession } from "@cumbre/app-auth";
import { buildAppSessionPayload } from "@cumbre/app-runtime";
import {
  cookiesDeRol,
  portalRoleTargetOrderPara,
  resolvePortalTargetForRole,
  type PortalRoleTarget
} from "./role-targets";

/**
 * Que institucion entro, segun el dominio de la peticion.
 *
 * Se lee aqui y no se pasa por parametro a proposito: los destinos hacen
 * falta en nueve sitios distintos, y encadenar la marca por todos ellos era
 * mucha superficie para olvidarse de uno. Un solo lugar decide.
 */
async function marcaDeLaPeticion() {
  return marcaPorHost((await headers()).get("host"));
}

export async function getActivePortalSession() {
  const cookieStore = await cookies();
  const marca = await marcaDeLaPeticion();

  for (const target of portalRoleTargetOrderPara(marca.id)) {
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

/**
 * No necesita la marca: los nombres y dominios de cookie son los mismos para
 * todas las instituciones.
 */
export function clearRoleSessionCookies(response: NextResponse) {
  for (const cookie of cookiesDeRol) {
    response.cookies.set({
      name: cookie.sessionCookieName,
      value: "",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      domain: cookie.sessionCookieDomain,
      path: "/",
      expires: new Date(0)
    });
  }
}

export async function bridgePortalLoginToRoleApp(
  authResponse: AuthLoginResponse
) {
  const marca = await marcaDeLaPeticion();
  const target = resolvePortalTargetForRole(
    authResponse.user.primaryRole,
    marca.id
  );
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
  bridgedSession: Awaited<ReturnType<typeof bridgePortalLoginToRoleApp>>
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
