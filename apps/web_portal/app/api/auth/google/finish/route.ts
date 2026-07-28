import { type NextRequest, NextResponse } from "next/server";
import type { AuthLoginResponse } from "@cumbre/schemas";
import {
  applyPortalRoleSession,
  bridgePortalLoginToRoleApp
} from "@/lib/session-bridge";
import { validateSessionFromPortal } from "@/services/server/auth-server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const expiresAt = searchParams.get("expires_at");
  const refreshExpiresAt = searchParams.get("refresh_expires_at");
  const isNew = searchParams.get("is_new") === "1";

  if (!accessToken || !refreshToken || !expiresAt || !refreshExpiresAt) {
    return NextResponse.redirect(new URL("/login?error=oauth_invalid", request.url));
  }

  try {
    const sessionData = await validateSessionFromPortal(accessToken);

    const authResponse: AuthLoginResponse = {
      user: sessionData.user,
      accessToken,
      refreshToken,
      expiresAt,
      refreshExpiresAt
    };

    const bridged = await bridgePortalLoginToRoleApp(authResponse);

    if (isNew) {
      // New user — set temporary session then redirect to role onboarding
      const response = NextResponse.redirect(new URL("/onboarding", request.url));
      applyPortalRoleSession(response, bridged);
      return response;
    }

    const response = NextResponse.redirect(new URL(bridged.redirectTo, request.url));
    applyPortalRoleSession(response, bridged);

    return response;
  } catch {
    return NextResponse.redirect(new URL("/login?error=oauth_error", request.url));
  }
}
