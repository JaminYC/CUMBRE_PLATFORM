import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { buildStudentAppSession, writeSessionCookie } from "@/lib/server-session";
import { signupStudent } from "@/services/server/auth-server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const response = await signupStudent(payload);
    const appResponse = successResponse(response, 201);

    writeSessionCookie(appResponse, buildStudentAppSession(response));

    return appResponse;
  } catch (error) {
    return errorResponse(error);
  }
}
