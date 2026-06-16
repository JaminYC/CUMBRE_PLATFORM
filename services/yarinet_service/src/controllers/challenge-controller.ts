import type { RequestContext } from "@cumbre/api-runtime";
import type {
  CreateChallengeRequest,
  GetChallengeRequest,
  ListChallengesRequest,
  UpdateChallengeStatusRequest
} from "@cumbre/schemas";
import type { YariNetApplicationService } from "../services/yarinet-service.js";

export class ChallengeController {
  constructor(private readonly service: YariNetApplicationService) {}

  createChallenge = async ({ body }: RequestContext): Promise<unknown> => {
    return this.service.createChallenge(body as CreateChallengeRequest);
  };

  getChallenge = async ({ validatedParams }: RequestContext): Promise<unknown> => {
    return this.service.getChallenge(validatedParams as GetChallengeRequest);
  };

  listChallenges = async ({ validatedQuery }: RequestContext): Promise<unknown> => {
    return this.service.listChallenges(validatedQuery as ListChallengesRequest);
  };

  updateChallengeStatus = async ({ body }: RequestContext): Promise<unknown> => {
    return this.service.updateChallengeStatus(
      body as UpdateChallengeStatusRequest
    );
  };
}
