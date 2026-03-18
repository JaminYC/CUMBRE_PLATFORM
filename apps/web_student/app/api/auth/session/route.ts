import { BackendRequestError, errorResponse, successResponse } from "@/lib/backend-http";
import { clearSessionCookie, getServerSession, writeSessionCookie } from "@/lib/server-session";
import { studentAppConfig } from "@/lib/env";
import { getCurrentStudentSession } from "@/services/server/auth-server";

export async function GET() {
  try {
    const existingSession = await getServerSession();

    if (!existingSession) {
      const response = errorResponse(
        new BackendRequestError(
          "No hay una sesion autenticada de estudiante disponible.",
          401,
          "UNAUTHORIZED"
        )
      );
      clearSessionCookie(response);
      return response;
    }

    const validatedSession = await getCurrentStudentSession();
    const response = successResponse({
      user: validatedSession.user,
      profiles: validatedSession.profiles,
      session: {
        appRole: existingSession.appRole,
        userId: validatedSession.user.id,
        displayName: validatedSession.user.displayName,
        email: validatedSession.user.email,
        primaryRole: validatedSession.user.primaryRole,
        roles: validatedSession.user.roles,
        scopes: validatedSession.user.scopes ?? validatedSession.session.scopes ?? existingSession.scopes,
        expiresAt: validatedSession.session.accessTokenExpiresAt,
        refreshExpiresAt: existingSession.refreshExpiresAt,
        lastValidatedAt: new Date().toISOString(),
        defaultLearningPathId: studentAppConfig.defaultLearningPathId
      }
    });

    writeSessionCookie(response, {
      ...existingSession,
      userId: validatedSession.user.id,
      displayName: validatedSession.user.displayName,
      email: validatedSession.user.email,
      primaryRole: validatedSession.user.primaryRole,
      roles: validatedSession.user.roles,
      scopes: validatedSession.user.scopes ?? validatedSession.session.scopes ?? existingSession.scopes,
      expiresAt: validatedSession.session.accessTokenExpiresAt,
      lastValidatedAt: new Date().toISOString()
    });

    return response;
  } catch (error) {
    const response = errorResponse(error);
    clearSessionCookie(response);
    return response;
  }
}
