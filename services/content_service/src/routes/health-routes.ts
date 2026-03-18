import type { RouteDefinition } from "@cumbre/api-runtime";
import type { HealthController } from "../controllers/health-controller.js";

export function registerHealthRoutes(
  controller: HealthController
): RouteDefinition[] {
  return [
    {
      method: "GET",
      path: "/health",
      handler: controller.getHealth
    },
    {
      method: "GET",
      path: "/ready",
      handler: controller.getReadiness
    }
  ];
}
