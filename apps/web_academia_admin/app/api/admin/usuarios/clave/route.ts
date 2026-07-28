import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireAdminSession } from "@/lib/server-session";
import { serverServiceEndpoints } from "@/lib/env";

/**
 * Genera una contraseña temporal para una cuenta.
 * Solo Dirección puede pedirla, y se muestra una única vez.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await requireAdminSession(["content:write"]);
    const { id } = (await request.json()) as { id?: string };

    const upstream = await fetch(
      `${serverServiceEndpoints.authServiceUrl}/auth/users/temp-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`
        },
        body: JSON.stringify({ id })
      }
    );

    const payload = await upstream.json();

    if (!upstream.ok) {
      return errorResponse(
        new Error(
          payload?.error?.message ?? "No fue posible generar la contraseña."
        )
      );
    }

    return successResponse(payload.data);
  } catch (error) {
    return errorResponse(error);
  }
}
