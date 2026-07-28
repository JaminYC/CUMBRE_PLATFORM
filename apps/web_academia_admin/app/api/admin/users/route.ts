import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireAdminSession } from "@/lib/server-session";
import { serverServiceEndpoints } from "@/lib/env";
import type { AuthSignupRequest } from "@cumbre/schemas";

/**
 * Alta de una persona en la academia.
 *
 * Antes llamaba a `/auth/signup`, que es público: el servicio no sabía
 * quién pedía el alta, así que la cuenta nacía sin institución y aparecía
 * en el listado de todas. Ahora va contra `/auth/users` reenviando la
 * sesión, y el servicio le pone la misma institución que la de quien crea.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await requireAdminSession(["content:write"]);
    const payload = (await request.json()) as AuthSignupRequest;

    const upstream = await fetch(
      `${serverServiceEndpoints.authServiceUrl}/auth/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`
        },
        body: JSON.stringify({
          displayName: payload.displayName,
          email: payload.email,
          credential: payload.credential,
          requestedRole: payload.requestedRole
        })
      }
    );

    const cuerpo = await upstream.json();

    if (!upstream.ok) {
      return errorResponse(
        new Error(cuerpo?.error?.message ?? "No fue posible crear la cuenta.")
      );
    }

    return successResponse({ user: cuerpo.data.user }, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
