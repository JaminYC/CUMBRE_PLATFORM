import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { parseAppSession, isRefreshExpired } from "@cumbre/app-auth";
import { portalRoleTargetOrder } from "@/lib/role-targets";
import { applyPortalRoleSession, bridgePortalLoginToRoleApp } from "@/lib/session-bridge";
import { validateSessionFromPortal } from "@/services/server/auth-server";
import { portalAppConfig } from "@/lib/env";
import type { AuthLoginResponse } from "@cumbre/schemas";

export async function POST(request: NextRequest) {
  const { role } = await request.json() as { role: string };

  if (role !== "student" && role !== "teacher") {
    return NextResponse.json({ error: "Rol inválido" }, { status: 400 });
  }

  // Read current session cookie to get the access token
  const cookieStore = await cookies();
  let accessToken: string | null = null;
  let refreshToken: string | null = null;
  let expiresAt: string | null = null;
  let refreshExpiresAt: string | null = null;

  for (const target of portalRoleTargetOrder) {
    const cookieValue = cookieStore.get(target.sessionCookieName)?.value;
    const session = parseAppSession(cookieValue, target.sessionSecret);
    if (session && !isRefreshExpired(session)) {
      accessToken = session.accessToken;
      refreshToken = session.refreshToken;
      expiresAt = session.expiresAt;
      refreshExpiresAt = session.refreshExpiresAt;
      break;
    }
  }

  if (!accessToken || !refreshToken || !expiresAt || !refreshExpiresAt) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  // Update role in auth_service
  const updateRes = await fetch(`${portalAppConfig.authServiceUrl}/auth/me/role`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({ role })
  });

  if (!updateRes.ok) {
    return NextResponse.json({ error: "Error al actualizar rol" }, { status: 500 });
  }

  // Re-validate to get fresh user with new role
  const sessionData = await validateSessionFromPortal(accessToken);

  const authResponse: AuthLoginResponse = {
    user: sessionData.user,
    accessToken,
    refreshToken,
    expiresAt,
    refreshExpiresAt
  };

  const bridged = bridgePortalLoginToRoleApp(authResponse);
  const response = NextResponse.json({ redirectTo: bridged.redirectTo });
  applyPortalRoleSession(response, bridged);

  return response;
}
