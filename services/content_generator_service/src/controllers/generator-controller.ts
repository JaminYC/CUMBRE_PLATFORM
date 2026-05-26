// services/content_generator_service/src/controllers/generator-controller.ts
import type { RequestContext } from "@cumbre/api-runtime";
import type { GenerationPipeline } from "../pipeline/generation-pipeline.js";
import type { GenerationJobRepository } from "../repositories/generation-job-repository.js";
import type { GenerationLimitRepository } from "../repositories/generation-limit-repository.js";

export class GeneratorController {
  constructor(
    private readonly pipeline: GenerationPipeline,
    private readonly jobRepo: GenerationJobRepository,
    private readonly limitRepo: GenerationLimitRepository,
  ) {}

  generate = async ({ body, auth }: RequestContext): Promise<unknown> => {
    const { topic, depth, sources, outputs } = body as {
      topic: string;
      depth: "summary" | "deep";
      sources: { type: string; data: string }[];
      outputs: string[];
    };
    return this.pipeline.run({
      userId: auth!.userId,
      role: auth!.primaryRole,
      topic, depth,
      sources: sources as any,
      outputs,
    });
  };

  getJob = async ({ params }: RequestContext): Promise<unknown> => {
    const { jobId } = params as { jobId: string };
    const job = await this.jobRepo.findById(jobId);
    if (!job) throw new Error("Job not found");
    return job;
  };

  listJobs = async ({ auth }: RequestContext): Promise<unknown> => {
    return this.jobRepo.listByUser(auth!.userId);
  };

  getLimits = async (_ctx: RequestContext): Promise<unknown> => {
    return this.limitRepo.listAll();
  };

  updateLimit = async ({ body }: RequestContext): Promise<unknown> => {
    const { role, dailyLimit } = body as { role: string; dailyLimit: number };
    return this.limitRepo.upsertLimit(role, dailyLimit);
  };
}
