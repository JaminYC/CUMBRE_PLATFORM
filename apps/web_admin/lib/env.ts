import { defaultServiceEndpoints } from "@cumbre/sdk";

export const adminAppConfig = {
  appRole: "admin" as const,
  appSessionCookieName:
    process.env.APP_SESSION_COOKIE_NAME ?? "cumbre_admin_session",
  appSessionCookieDomain: process.env.APP_SESSION_COOKIE_DOMAIN,
  appSessionSecret:
    process.env.APP_SESSION_SECRET ?? "cumbre-admin-dev-session-secret"
};

export const serverServiceEndpoints = {
  authServiceUrl:
    process.env.AUTH_SERVICE_URL ?? defaultServiceEndpoints.authServiceUrl,
  contentServiceUrl:
    process.env.CONTENT_SERVICE_URL ?? defaultServiceEndpoints.contentServiceUrl
};
