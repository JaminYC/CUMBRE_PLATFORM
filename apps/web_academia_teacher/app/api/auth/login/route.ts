import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { buildTeacherAppSession, writeSessionCookie } from "@/lib/server-session";
import { loginTeacher } from "@/services/server/auth-server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const response = await loginTeacher(payload);
    const appResponse = successResponse(response);

    writeSessionCookie(appResponse, buildTeacherAppSession(response));

    return appResponse;
  } catch (error) {
    return errorResponse(error);
  }
}
