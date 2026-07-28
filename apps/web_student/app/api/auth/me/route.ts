import { NextRequest } from "next/server";
import { BackendRequestError, errorResponse, successResponse } from "@/lib/backend-http";
import { getCurrentStudentSession } from "@/services/server/auth-server";

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");

    if (!userId) {
      throw new BackendRequestError("Se requiere userId.", 400, "VALIDATION_ERROR");
    }

    const response = await getCurrentStudentSession();

    if (response.user.id !== userId) {
      throw new BackendRequestError(
        "El usuario solicitado no coincide con la sesión activa del estudiante.",
        403,
        "FORBIDDEN"
      );
    }

    return successResponse({
      user: response.user,
      profiles: response.profiles
    });
  } catch (error) {
    return errorResponse(error);
  }
}
