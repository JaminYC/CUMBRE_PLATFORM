// services/content_generator_service/src/routes/generator-routes.ts
import type { RouteDefinition } from "@cumbre/api-runtime";
import type { GeneratorController } from "../controllers/generator-controller.js";

export function registerGeneratorRoutes(ctrl: GeneratorController): RouteDefinition[] {
  return [
    {
      method: "POST", path: "/generate",
      handler: ctrl.generate,
      authorization: { required: true, roles: ["student", "teacher", "administrator"], scopes: ["content:read"] },
    },
    {
      method: "GET", path: "/generate/:jobId",
      handler: ctrl.getJob,
      authorization: { required: true, roles: ["student", "teacher", "administrator"], scopes: ["content:read"] },
    },
    {
      method: "GET", path: "/generate/history",
      handler: ctrl.listJobs,
      authorization: { required: true, roles: ["student", "teacher", "administrator"], scopes: ["content:read"] },
    },
    {
      method: "GET", path: "/generate/admin/limits",
      handler: ctrl.getLimits,
      authorization: { required: true, roles: ["administrator"], scopes: ["analytics:read"] },
    },
    {
      method: "POST", path: "/generate/admin/limits",
      handler: ctrl.updateLimit,
      authorization: { required: true, roles: ["administrator"], scopes: ["content:write"] },
    },
  ];
}
