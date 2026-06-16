import type { RouteDefinition } from "@cumbre/api-runtime";
import { yarinetSchemas } from "@cumbre/schemas";
import type { ChallengeController } from "../controllers/challenge-controller.js";

export function registerChallengeRoutes(
  controller: ChallengeController
): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/challenges",
      handler: controller.createChallenge,
      validation: { body: yarinetSchemas.createChallengeRequest },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["challenge:manage"]
      },
      successStatusCode: 201
    },
    {
      method: "GET",
      path: "/challenges",
      handler: controller.listChallenges,
      validation: { query: yarinetSchemas.listChallengesRequest },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["challenge:manage"]
      }
    },
    {
      method: "GET",
      path: "/challenges/:challengeId",
      handler: controller.getChallenge,
      validation: { params: yarinetSchemas.getChallengeRequest },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["deliberation:read"]
      }
    },
    {
      method: "POST",
      path: "/challenges/status",
      handler: controller.updateChallengeStatus,
      validation: { body: yarinetSchemas.updateChallengeStatusRequest },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["challenge:manage"]
      }
    }
  ];
}
