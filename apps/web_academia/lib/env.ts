import { defaultServiceEndpoints } from "@cumbre/sdk";

export const portalAppConfig = {
  appName: "Campus Academia Bryce",
  authServiceUrl:
    process.env.AUTH_SERVICE_URL ?? defaultServiceEndpoints.authServiceUrl,
  /* Puertos de Bryce, no los de CUMBRE (3100/3110/3111): sin esto, si
     falta el .env.local el portal manda a la gente al otro campus. */
  studentAppUrl: process.env.STUDENT_APP_URL ?? "http://localhost:3120",
  teacherAppUrl: process.env.TEACHER_APP_URL ?? "http://localhost:3130",
  adminAppUrl: process.env.ADMIN_APP_URL ?? "http://localhost:3140",
  studentSessionCookieName:
    process.env.STUDENT_APP_SESSION_COOKIE_NAME ?? "cumbre_student_session",
  studentSessionCookieDomain: process.env.STUDENT_APP_SESSION_COOKIE_DOMAIN,
  teacherSessionCookieName:
    process.env.TEACHER_APP_SESSION_COOKIE_NAME ?? "cumbre_teacher_session",
  teacherSessionCookieDomain: process.env.TEACHER_APP_SESSION_COOKIE_DOMAIN,
  adminSessionCookieName:
    process.env.ADMIN_APP_SESSION_COOKIE_NAME ?? "cumbre_admin_session",
  adminSessionCookieDomain: process.env.ADMIN_APP_SESSION_COOKIE_DOMAIN,
  studentSessionSecret:
    process.env.STUDENT_APP_SESSION_SECRET ??
    "cumbre-student-dev-session-secret",
  teacherSessionSecret:
    process.env.TEACHER_APP_SESSION_SECRET ??
    "cumbre-teacher-dev-session-secret",
  adminSessionSecret:
    process.env.ADMIN_APP_SESSION_SECRET ?? "cumbre-admin-dev-session-secret"
};
