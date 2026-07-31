import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { pedirSiguiente } from "@/services/server/practica-server";

export async function GET(request: NextRequest) {
  try {
    const q = request.nextUrl.searchParams;
    const asignaturaId = q.get("asignaturaId");
    if (!asignaturaId) {
      return errorResponse(new Error("Falta asignaturaId."));
    }
    return successResponse(
      await pedirSiguiente({
        asignaturaId,
        perfil: q.get("perfil") ?? "ingenierias",
        modo: q.get("modo") ?? "secuencial",
        temaId: q.get("temaId") ?? undefined
      })
    );
  } catch (error) {
    return errorResponse(error);
  }
}
