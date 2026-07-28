import { createAuthServerClient } from "@cumbre/app-runtime";
import { serverServiceEndpoints } from "@/lib/env";

const authServerClient = createAuthServerClient(serverServiceEndpoints.authServiceUrl);

export const loginTeacher = authServerClient.login;
export const logoutTeacher = authServerClient.logout;
