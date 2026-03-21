import type { RouteDefinition } from "@cumbre/api-runtime";
import type { GoogleOAuthController } from "../controllers/google-oauth-controller.js";

export function registerGoogleOAuthRoutes(
  controller: GoogleOAuthController
): RouteDefinition[] {
  return [
    {
      method: "GET",
      path: "/auth/google",
      handler: controller.redirect
    },
    {
      method: "GET",
      path: "/auth/google/callback",
      handler: controller.callback
    }
  ];
}
