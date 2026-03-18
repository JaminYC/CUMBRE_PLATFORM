import { defaultServiceEndpoints } from "@cumbre/sdk";

export const studentAppConfig = {
  appName: "Cumbre Student",
  appRole: "student" as const,
  defaultLearningPathId:
    process.env.NEXT_PUBLIC_DEFAULT_LEARNING_PATH_ID ??
    "learning-path-placeholder",
  appSessionCookieName:
    process.env.APP_SESSION_COOKIE_NAME ?? "cumbre_student_session",
  appSessionCookieDomain: process.env.APP_SESSION_COOKIE_DOMAIN,
  appSessionSecret:
    process.env.APP_SESSION_SECRET ?? "cumbre-student-dev-session-secret"
};

export const serverServiceEndpoints = {
  authServiceUrl:
    process.env.AUTH_SERVICE_URL ?? defaultServiceEndpoints.authServiceUrl,
  learningServiceUrl:
    process.env.LEARNING_SERVICE_URL ??
    defaultServiceEndpoints.learningServiceUrl,
  contentServiceUrl:
    process.env.CONTENT_SERVICE_URL ?? defaultServiceEndpoints.contentServiceUrl
};
