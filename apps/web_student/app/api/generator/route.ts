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

    const response = await fetch(
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

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: false as const,
          error: {
            code: "GENERATOR_ERROR",
            message:
              (payload as any)?.error?.message ??
              "El servicio generador devolvio un error.",
          },
        },
        { status: response.status }
      );
    }

    const payload = await response.json();
    return successResponse((payload as any)?.data ?? payload);
  } catch (err: unknown) {
    return errorResponse(err);
  }
}
