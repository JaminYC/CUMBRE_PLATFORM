import { errorResponse, successResponse } from "@/lib/backend-http";
import { listarAsignaturas } from "@/services/server/practica-server";

export async function GET() {
  try {
    return successResponse(await listarAsignaturas());
  } catch (error) {
    return errorResponse(error);
  }
}
