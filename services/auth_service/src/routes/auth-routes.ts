import type { RouteDefinition } from "@cumbre/api-runtime";
import { authSchemas } from "@cumbre/schemas";
import type { AuthController } from "../controllers/auth-controller.js";

export function registerAuthRoutes(
  controller: AuthController
): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/auth/signup",
      handler: controller.signup,
      validation: {
        body: authSchemas.signupRequest
      },
      successStatusCode: 201
    },
    {
      method: "POST",
      path: "/auth/login",
      handler: controller.login,
      validation: {
        body: authSchemas.loginRequest
      }
    },
    {
      method: "POST",
      path: "/auth/refresh",
      handler: controller.refresh,
      validation: {
        body: authSchemas.refreshSessionRequest
      }
    },
    {
      method: "POST",
      path: "/auth/logout",
      handler: controller.logout,
      validation: {
        body: authSchemas.revokeSessionRequest
      }
    },
    {
      method: "GET",
      path: "/auth/me",
      handler: controller.me,
      validation: {
        query: authSchemas.getCurrentUserRequest
      },
      authorization: {
        required: true
      }
    },
    {
      method: "GET",
      path: "/auth/session",
      handler: controller.session,
      authorization: {
        required: true
      }
    },
    {
      method: "PATCH",
      path: "/auth/me/role",
      handler: controller.setRole,
      authorization: {
        required: true
      }
    }
  ];
}
