import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { buildAdminAppSession, writeSessionCookie } from "@/lib/server-session";
import { loginAdmin } from "@/services/server/auth-server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const response = await loginAdmin(payload);
    const appResponse = successResponse(response);

    writeSessionCookie(appResponse, buildAdminAppSession(response));

    return appResponse;
  } catch (error) {
    return errorResponse(error);
  }
}
