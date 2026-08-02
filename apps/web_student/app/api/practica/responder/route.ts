import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { enviarRespuesta } from "@/services/server/practica-server";

export async function POST(request: NextRequest) {
  try {
    const cuerpo = await request.json();
    return successResponse(await enviarRespuesta(cuerpo));
  } catch (error) {
    return errorResponse(error);
  }
}
