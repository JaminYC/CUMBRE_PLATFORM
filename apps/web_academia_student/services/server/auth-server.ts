import type { ValidateAccessTokenResponse } from "@cumbre/schemas";
import { createAuthServerClient } from "@cumbre/app-runtime";
import { fetchBackendData } from "@/lib/backend-http";
import { serverServiceEndpoints } from "@/lib/env";

const authServerClient = createAuthServerClient(serverServiceEndpoints.authServiceUrl);

export const loginStudent = authServerClient.login;
export const signupStudent = authServerClient.signup;

export function getCurrentStudent(userId: string) {
  return authServerClient.getCurrentUser(userId);
}

export function getCurrentStudentSession() {
  return fetchBackendData<ValidateAccessTokenResponse>("auth", "/auth/session");
}

export function logoutStudent(refreshToken: string) {
  return authServerClient.logout(refreshToken);
}
