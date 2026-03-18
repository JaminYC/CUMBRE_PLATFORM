import { errorResponse, successResponse } from "@/lib/backend-http";
import { clearSessionCookie, getServerSession } from "@/lib/server-session";
import { logoutAdmin } from "@/services/server/auth-server";

export async function POST() {
  try {
    const session = await getServerSession();

    if (session) {
      await logoutAdmin(session.refreshToken);
    }

    const response = successResponse({
      revoked: true
    });
    clearSessionCookie(response);
    return response;
  } catch (error) {
    const response = errorResponse(error);
    clearSessionCookie(response);
    return response;
  }
}
