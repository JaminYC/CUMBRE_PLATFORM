import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@cumbre/app-runtime";
import { portalAppConfig } from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email?: string };

    const upstream = await fetch(
      `${portalAppConfig.authServiceUrl}/auth/password/forgot`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      }
    );

    const payload = await upstream.json();

    if (!upstream.ok) {
      return errorResponse(
        new Error(payload?.error?.message ?? "No fue posible procesar la solicitud.")
      );
    }

    /* El token nunca cruza al navegador. Mientras no haya servicio de correo
       el enlace queda en el registro del servidor, que es donde el operador
       puede buscarlo. */
    if (payload?.data?.token) {
      console.info(
        `[recuperación] enlace para ${email}: /restablecer?token=${payload.data.token}`
      );
    }

    return successResponse({ enviado: true });
  } catch (error) {
    return errorResponse(error);
  }
}
