import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@cumbre/app-runtime";
import { applyPortalRoleSession, bridgePortalLoginToRoleApp } from "@/lib/session-bridge";
import { signupFromPortal } from "@/services/server/auth-server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const authResponse = await signupFromPortal(payload);
    const bridged = bridgePortalLoginToRoleApp(authResponse);
    const appResponse = successResponse({
      redirectTo: bridged.redirectTo,
      role: authResponse.user.primaryRole,
      roleLabel: bridged.target.label
    });

    applyPortalRoleSession(appResponse, bridged);

    return appResponse;
  } catch (error) {
    return errorResponse(error);
  }
}
