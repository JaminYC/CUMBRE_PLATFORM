import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireAdminSession } from "@/lib/server-session";
import { createUser } from "@/services/server/auth-server";
import type { AuthSignupRequest } from "@cumbre/schemas";

export async function POST(request: NextRequest) {
  try {
    await requireAdminSession(["content:write"]);
    const payload = (await request.json()) as AuthSignupRequest;
    const response = await createUser(payload);
    return successResponse({ user: response.user }, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
