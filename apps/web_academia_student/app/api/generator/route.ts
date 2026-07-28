// apps/web_student/app/api/generator/route.ts
import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { getServerSession } from "@/lib/server-session";
import { serverServiceEndpoints } from "@/lib/env";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    const body = await req.json();

    let response: Response;
    try {
      response = await fetch(
        `${serverServiceEndpoints.contentGeneratorServiceUrl}/generate`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "content-type": "application/json",
            "x-request-id": randomUUID(),
            ...(session?.accessToken
              ? { authorization: `Bearer ${session.accessToken}` }
              : {}),
          },
          body: JSON.stringify(body),
        }
      );
    } catch (fetchErr) {
      // content_generator_service no está corriendo o no responde
      const msg = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
      console.error("[api/generator] Cannot reach content_generator_service:", msg);
      return NextResponse.json(
        {
          success: false as const,
          error: {
            code: "SERVICE_UNAVAILABLE",
            message: `El servicio generador no está disponible (${msg}). Verifica que esté corriendo en el puerto 3004.`,
          },
        },
        { status: 503 }
      );
    }

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      const errMsg = (payload as any)?.error?.message ?? (payload as any)?.message ?? `HTTP ${response.status}`;
      console.error("[api/generator] content_generator_service error:", response.status, errMsg);
      return NextResponse.json(
        {
          success: false as const,
          error: { code: "GENERATOR_ERROR", message: errMsg },
        },
        { status: response.status }
      );
    }

    const payload = await response.json();
    return successResponse((payload as any)?.data ?? payload);
  } catch (err: unknown) {
    console.error("[api/generator] Unexpected error:", err);
    return errorResponse(err);
  }
}
