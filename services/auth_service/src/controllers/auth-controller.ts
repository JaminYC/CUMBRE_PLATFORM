import { UnauthorizedError } from "@cumbre/api-runtime";
import type {
  AuthLoginRequest,
  AuthSignupRequest,
  GetCurrentUserRequest,
  RefreshSessionRequest,
  RevokeSessionRequest,
  ValidateAccessTokenRequest
} from "@cumbre/schemas";
import type { RequestContext } from "@cumbre/api-runtime";
import type { AuthService } from "@cumbre/sdk";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  signup = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.signup(body as AuthSignupRequest);
  };

  login = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.authenticate(body as AuthLoginRequest);
  };

  refresh = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.refreshSession(body as RefreshSessionRequest);
  };

  logout = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.revokeSession(body as RevokeSessionRequest);
  };

  me = async ({ validatedQuery }: RequestContext): Promise<unknown> => {
    return this.authService.getCurrentUser(
      validatedQuery as GetCurrentUserRequest
    );
  };

  session = async ({ req }: RequestContext): Promise<unknown> => {
    const accessToken = extractBearerToken(req.headers.authorization);

    return this.authService.validateAccessToken({
      accessToken
    } satisfies ValidateAccessTokenRequest);
  };

  setRole = async ({ req, body }: RequestContext): Promise<unknown> => {
    const accessToken = extractBearerToken(req.headers.authorization);
    const { role } = body as { role: string };
    await this.authService.setUserRole(accessToken, role);
    return { updated: true };
  };
}

function extractBearerToken(authorizationHeader: string | undefined) {
  if (!authorizationHeader?.startsWith("Bearer ")) {
    throw new UnauthorizedError("A bearer token is required.");
  }

  return authorizationHeader.slice("Bearer ".length).trim();
}
