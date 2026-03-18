import type {
  AuthenticatedRequestActor,
  LoggerLike
} from "@cumbre/api-runtime";
import type { ValidateAccessTokenResponse } from "@cumbre/schemas";
import { resolvePermissionScopes } from "@cumbre/types";

interface BackendSuccessEnvelope<T> {
  success: true;
  data: T;
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
        "x-request-id": requestId
      }
    });

    if (!response.ok) {
      this.logger.warn("Auth validation failed for protected route.", {
        requestId,
        statusCode: response.status
      });
      return null;
    }

    const payload = (await response.json()) as BackendSuccessEnvelope<ValidateAccessTokenResponse>;

    if (!payload.success) {
      return null;
    }

    return {
      sessionId: payload.data.session.id,
      userId: payload.data.user.id,
      primaryRole: payload.data.user.primaryRole,
      roles: payload.data.user.roles,
      scopes:
        payload.data.user.scopes ??
        payload.data.session.scopes ??
        resolvePermissionScopes(payload.data.user.roles)
    };
  }
}
