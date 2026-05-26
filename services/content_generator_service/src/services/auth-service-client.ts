// services/content_generator_service/src/services/auth-service-client.ts
import type { AuthenticatedRequestActor, LoggerLike } from "@cumbre/api-runtime";
import { resolvePermissionScopes } from "@cumbre/types";

interface BackendSuccessEnvelope<T> {
  success: true;
  data: T;
}

interface SessionUser {
  id: string;
  primaryRole: string;
  roles: string[];
  scopes?: string[];
}

interface SessionData {
  id: string;
  scopes?: string[];
}

interface ValidateSessionResponse {
  session: SessionData;
  user: SessionUser;
}

export class AuthServiceClient {
  constructor(
    private readonly authServiceUrl: string,
    private readonly logger: LoggerLike
  ) {}

  async resolveActorFromAuthorizationHeader(
    authorizationHeader: string | undefined,
    requestId: string
  ): Promise<AuthenticatedRequestActor | null> {
    if (!authorizationHeader?.startsWith("Bearer ")) {
      return null;
    }

    const response = await fetch(`${this.authServiceUrl}/auth/session`, {
      headers: {
        authorization: authorizationHeader,
        "x-request-id": requestId,
      },
    });

    if (!response.ok) {
      this.logger.warn("Auth validation failed for protected route.", {
        requestId,
        statusCode: response.status,
      });
      return null;
    }

    const payload = (await response.json()) as BackendSuccessEnvelope<ValidateSessionResponse>;

    if (!payload.success) {
      return null;
    }

    return {
      sessionId: payload.data.session.id,
      userId: payload.data.user.id,
      primaryRole: payload.data.user.primaryRole as any,
      roles: payload.data.user.roles as any,
      scopes:
        payload.data.user.scopes ??
        payload.data.session.scopes ??
        resolvePermissionScopes(payload.data.user.roles as any),
    };
  }
}
