// services/content_generator_service/src/pipeline/generation-pipeline.ts
import type { ResearchAgent, ResearchOutput } from "../agents/research-agent.js";
import type { NotebookLMClient } from "../clients/notebooklm-client.js";
import type { KokoroClient } from "../clients/kokoro-client.js";
import type { StorageClient } from "../clients/storage-client.js";
import type {
  GenerationJobRepository, CreateJobInput, JobResults
} from "../repositories/generation-job-repository.js";
import type { GenerationLimitRepository } from "../repositories/generation-limit-repository.js";

export interface PipelineDeps {
  researchAgent: ResearchAgent;
  notebookLMClient: NotebookLMClient;
  kokoroClient: KokoroClient;
  jobRepo: GenerationJobRepository;
  limitRepo: GenerationLimitRepository;
  storage: StorageClient;
  generatePdf: (research: ResearchOutput) => Promise<Buffer>;
  generateInfographicFallback: (research: ResearchOutput) => Promise<Buffer>;
}

export class GenerationPipeline {
  constructor(private readonly deps: PipelineDeps) {}

  async run(input: CreateJobInput): Promise<{ jobId: string }> {
    // Verificar límite diario
    const limit = await this.deps.limitRepo.getLimitForRole(input.role);
    if (limit && limit.dailyLimit !== -1) {
      const count = await this.deps.jobRepo.countTodayByUser(input.userId);
      if (count >= limit.dailyLimit) {
        throw new Error("Límite diario alcanzado");
      }
    }

    const job = await this.deps.jobRepo.createJob(input);
    const jobId = job.id;

    // Lanzar en background — el cliente recibe jobId inmediatamente
    // y hace polling con GET /generate/:jobId hasta que status === "done"
    setImmediate(() => {
      this.processJob(jobId, input).catch((err) => {
        console.error("[GenerationPipeline] Unhandled error in background job", jobId, err);
      });
    });

    return { jobId };
  }

  private async processJob(jobId: string, input: CreateJobInput): Promise<void> {
    await this.deps.jobRepo.updateStatus(jobId, "processing");

    try {
      const research = await this.deps.researchAgent.research({
        topic: input.topic,
        depth: input.depth,
        sources: input.sources,
      });

      const results: JobResults = {};
      const tasks: Promise<void>[] = [];

      if (input.outputs.includes("pdf")) {
        tasks.push(
          this.deps.generatePdf(research).then(async (buf) => {
            results.pdfUrl = await this.deps.storage.upload(
              buf, `pdfs/${jobId}.pdf`, "application/pdf"
            );
          })
        );
      }

      if (input.outputs.includes("podcast")) {
        tasks.push(this.generatePodcast(jobId, research, input.depth).then(url => {
          results.podcastUrl = url;
        }));
      }

      if (input.outputs.includes("infographic")) {
        tasks.push(this.generateInfographic(jobId, research).then(url => {
          results.infographicUrl = url;
        }));
      }

      await Promise.all(tasks);
      await this.deps.jobRepo.setDone(jobId, results);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await this.deps.jobRepo.updateStatus(jobId, "error", msg);
    }
  }

  private async generatePodcast(
    jobId: string,
    research: ResearchOutput,
    depth: string
  ): Promise<string> {
    // Intentar NotebookLM primero
    if (await this.deps.notebookLMClient.isHealthy()) {
      try {
        return await this.deps.notebookLMClient.generatePodcast({
          title: research.title,
          content: research.fullText,
          language: "es",
          length: depth === "summary" ? "SHORT" : "STANDARD",
        });
      } catch {
        // fallback a Kokoro
      }
    }

    // Fallback: Kokoro TTS simple con el abstract
    const audio = await this.deps.kokoroClient.synthesize({
      text: `${research.title}. ${research.abstract} ${research.sections.map(s => s.content).join(" ")}`.slice(0, 4000),
      voice: "af_heart",
    });
    return await this.deps.storage.upload(audio, `podcasts/${jobId}.mp3`, "audio/mpeg");
  }

  private async generateInfographic(
    jobId: string,
    research: ResearchOutput
  ): Promise<string> {
    // Intentar NotebookLM primero
    if (await this.deps.notebookLMClient.isHealthy()) {
      try {
        return await this.deps.notebookLMClient.generateInfographic({
          title: research.title,
          content: research.fullText,
        });
      } catch {
        // fallback a Playwright
      }
    }

    // Fallback: Playwright HTML→PNG
    const png = await this.deps.generateInfographicFallback(research);
    return await this.deps.storage.upload(png, `infographics/${jobId}.png`, "image/png");
  }
}
