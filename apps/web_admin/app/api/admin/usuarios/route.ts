import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireAdminSession } from "@/lib/server-session";
import { serverServiceEndpoints } from "@/lib/env";

/**
 * Listado de usuarios de la academia.
 *
 * El navegador nunca habla con auth_service directo: pasa por acá, que es
 * donde se comprueba la sesión de administración.
 */
export async function GET(request: NextRequest) {
  try {
    const session = await requireAdminSession(["content:write"]);

    const { searchParams } = new URL(request.url);
    const parametros = new URLSearchParams();
    const rol = searchParams.get("rol");
    const busqueda = searchParams.get("busqueda");

    if (rol) parametros.set("rol", rol);
    if (busqueda) parametros.set("busqueda", busqueda);

    const consulta = parametros.toString();
    const upstream = await fetch(
      `${serverServiceEndpoints.authServiceUrl}/auth/users${
        consulta ? `?${consulta}` : ""
      }`,
      {
        headers: { Authorization: `Bearer ${session.accessToken}` },
        cache: "no-store"
      }
    );

    const payload = await upstream.json();

    if (!upstream.ok) {
      return errorResponse(
        new Error(payload?.error?.message ?? "No fue posible listar los usuarios.")
      );
    }

    return successResponse(payload.data);
  } catch (error) {
    return errorResponse(error);
  }
}

/** Activa o suspende una cuenta. */
export async function PATCH(request: NextRequest) {
  try {
    const session = await requireAdminSession(["content:write"]);
    const cuerpo = (await request.json()) as {
      id?: string;
      estado?: "active" | "suspended";
    };

    const upstream = await fetch(
      `${serverServiceEndpoints.authServiceUrl}/auth/users/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`
        },
        body: JSON.stringify(cuerpo)
      }
    );

    const payload = await upstream.json();

    if (!upstream.ok) {
      return errorResponse(
        new Error(payload?.error?.message ?? "No fue posible cambiar el estado.")
      );
    }

    return successResponse(payload.data);
  } catch (error) {
    return errorResponse(error);
  }
}
