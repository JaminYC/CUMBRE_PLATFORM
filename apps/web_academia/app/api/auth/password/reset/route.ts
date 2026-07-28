import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@cumbre/app-runtime";
import { portalAppConfig } from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
    const { token, credential } = (await request.json()) as {
      token?: string;
      credential?: string;
    };

    const upstream = await fetch(
      `${portalAppConfig.authServiceUrl}/auth/password/reset`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, credential })
      }
    );

    const payload = await upstream.json();

    if (!upstream.ok) {
      return errorResponse(
        new Error(payload?.error?.message ?? "No fue posible cambiar la contraseña.")
      );
    }

    return successResponse({ actualizado: true });
  } catch (error) {
    return errorResponse(error);
  }
}
