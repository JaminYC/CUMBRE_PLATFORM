import type {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthSignupRequest,
  AuthSignupResponse,
  GetCurrentUserResponse
} from "@cumbre/schemas";
import { parseBackendEnvelope } from "./backend";

export function createAuthServerClient(authServiceUrl: string) {
  return {
    async login(request: AuthLoginRequest) {
      const response = await fetch(`${authServiceUrl}/auth/login`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(request)
      });

      return parseBackendEnvelope<AuthLoginResponse>(response, "Respuesta de autenticacion inesperada.");
    },
    async signup(request: AuthSignupRequest) {
      const response = await fetch(`${authServiceUrl}/auth/signup`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(request)
      });

      return parseBackendEnvelope<AuthSignupResponse>(response, "Respuesta de autenticacion inesperada.");
    },
    async logout(refreshToken: string) {
      const response = await fetch(`${authServiceUrl}/auth/logout`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ refreshToken })
      });

      return parseBackendEnvelope<{ revoked: boolean }>(response, "Respuesta de autenticacion inesperada.");
    },
    async getCurrentUser(userId: string) {
      const response = await fetch(
        `${authServiceUrl}/auth/me?userId=${encodeURIComponent(userId)}`,
        {
          method: "GET",
          cache: "no-store"
        }
      );

      return parseBackendEnvelope<GetCurrentUserResponse>(response, "Respuesta de autenticacion inesperada.");
    }
  };
}
