import { createAuthServerClient } from "@cumbre/app-runtime";
import { portalAppConfig } from "@/lib/env";

const authServerClient = createAuthServerClient(portalAppConfig.authServiceUrl);

export const loginFromPortal = authServerClient.login;
export const signupFromPortal = authServerClient.signup;
export const validateSessionFromPortal = authServerClient.validateSession;
