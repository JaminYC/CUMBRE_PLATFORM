import { createAuthServerClient } from "@cumbre/app-runtime";
import { serverServiceEndpoints } from "@/lib/env";

const authServerClient = createAuthServerClient(serverServiceEndpoints.authServiceUrl);

export const loginAdmin = authServerClient.login;
export const logoutAdmin = authServerClient.logout;
