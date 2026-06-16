import { NotFoundError } from "@cumbre/api-runtime";
import type {
  CreateChallengeRequest,
  GetChallengeRequest,
  ListChallengesRequest,
  UpdateChallengeStatusRequest
} from "@cumbre/schemas";
import type { ChallengeRepository } from "../repositories/challenge-repository.js";
import type { ChallengeDTO } from "../models/yarinet-mappers.js";
import type { Logger } from "../utils/logger.js";

export class YariNetApplicationService {
  constructor(
    private readonly challengeRepository: ChallengeRepository,
    private readonly logger: Logger
  ) {}

  async createChallenge(input: CreateChallengeRequest): Promise<ChallengeDTO> {
    const challenge = await this.challengeRepository.createChallenge(input);
    this.logger.info("Civic challenge created", { challengeId: challenge.id });
    return challenge;
  }

  async getChallenge(input: GetChallengeRequest): Promise<ChallengeDTO> {
    const challenge = await this.challengeRepository.findChallengeById(
      input.challengeId
    );
    if (!challenge) {
      throw new NotFoundError("Civic challenge was not found.");
    }
    return challenge;
  }

  async listChallenges(
    input: ListChallengesRequest
  ): Promise<{ items: ChallengeDTO[] }> {
    const items = await this.challengeRepository.listChallenges(input);
    return { items };
  }

  async updateChallengeStatus(
    input: UpdateChallengeStatusRequest
  ): Promise<ChallengeDTO> {
    const updated = await this.challengeRepository.updateChallengeStatus(
      input.challengeId,
      input.status
    );
    if (!updated) {
      throw new NotFoundError("Civic challenge was not found.");
    }
    return updated;
  }
}
