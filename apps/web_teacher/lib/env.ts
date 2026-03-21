import { defaultServiceEndpoints } from "@cumbre/sdk";

export const teacherAppConfig = {
  appRole: "teacher" as const,
  defaultLearningPathId:
    process.env.NEXT_PUBLIC_DEFAULT_LEARNING_PATH_ID ?? "20000000-0000-0000-0000-000000000001",
  appSessionCookieName:
    process.env.APP_SESSION_COOKIE_NAME ?? "cumbre_teacher_session",
  appSessionCookieDomain: process.env.APP_SESSION_COOKIE_DOMAIN,
  appSessionSecret:
    process.env.APP_SESSION_SECRET ?? "cumbre-teacher-dev-session-secret"
};

export const serverServiceEndpoints = {
  authServiceUrl:
    process.env.AUTH_SERVICE_URL ?? defaultServiceEndpoints.authServiceUrl,
  contentServiceUrl:
    process.env.CONTENT_SERVICE_URL ?? defaultServiceEndpoints.contentServiceUrl,
  learningServiceUrl:
    process.env.LEARNING_SERVICE_URL ?? defaultServiceEndpoints.learningServiceUrl
};
