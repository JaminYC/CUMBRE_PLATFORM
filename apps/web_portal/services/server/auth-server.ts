import { createAuthServerClient } from "@cumbre/app-runtime";
import { portalAppConfig } from "@/lib/env";

const authServerClient = createAuthServerClient(portalAppConfig.authServiceUrl);

export const loginFromPortal = authServerClient.login;
