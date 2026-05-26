// services/content_generator_service/test/pipeline.test.ts
import { describe, it, expect, vi } from "vitest";
import { GenerationPipeline } from "../src/pipeline/generation-pipeline.js";

const mockResearchAgent = { research: vi.fn() };
const mockNotebookLM = { isHealthy: vi.fn(), generatePodcast: vi.fn(), generateInfographic: vi.fn() };
const mockKokoro = { isHealthy: vi.fn(), synthesize: vi.fn() };
const mockJobRepo = {
  createJob: vi.fn(), updateStatus: vi.fn(), setDone: vi.fn(),
  findById: vi.fn(), countTodayByUser: vi.fn(),
};
const mockLimitRepo = { getLimitForRole: vi.fn() };
const mockStorage = { upload: vi.fn() };
const mockGeneratePdf = vi.fn();
const mockInfographicFallback = vi.fn();

const makeResearch = () => ({
  title: "T", abstract: "", sections: [], bibliography: [], fullText: "texto completo",
});

describe("GenerationPipeline", () => {
  const pipeline = new GenerationPipeline({
    researchAgent: mockResearchAgent as any,
    notebookLMClient: mockNotebookLM as any,
    kokoroClient: mockKokoro as any,
    jobRepo: mockJobRepo as any,
    limitRepo: mockLimitRepo as any,
    storage: mockStorage as any,
    generatePdf: mockGeneratePdf,
    generateInfographicFallback: mockInfographicFallback,
  });

  it("throws when daily limit is reached", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: 5 });
    mockJobRepo.countTodayByUser.mockResolvedValue(5);

    await expect(pipeline.run({
      userId: "u1", role: "student", topic: "test",
      depth: "summary", sources: [], outputs: ["pdf"],
    })).rejects.toThrow("Límite diario alcanzado");
  });

  it("creates job and returns jobId immediately", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: 20 });
    mockJobRepo.countTodayByUser.mockResolvedValue(0);
    mockJobRepo.createJob.mockResolvedValue({ id: "job-123", status: "pending" });
    mockResearchAgent.research.mockResolvedValue(makeResearch());
    mockGeneratePdf.mockResolvedValue(Buffer.from("pdf"));
    mockStorage.upload.mockResolvedValue("https://url.com/file.pdf");
    mockJobRepo.updateStatus.mockResolvedValue({});
    mockJobRepo.setDone.mockResolvedValue({});

    const { jobId } = await pipeline.run({
      userId: "u1", role: "teacher", topic: "test",
      depth: "summary", sources: [], outputs: ["pdf"],
    });

    expect(jobId).toBe("job-123");
  });

  it("uses NotebookLM when healthy for podcast", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: -1 });
    mockJobRepo.countTodayByUser.mockResolvedValue(0);
    mockJobRepo.createJob.mockResolvedValue({ id: "job-456", status: "pending" });
    mockResearchAgent.research.mockResolvedValue(makeResearch());
    mockNotebookLM.isHealthy.mockResolvedValue(true);
    mockNotebookLM.generatePodcast.mockResolvedValue("https://storage.example.com/podcast.mp3");
    mockJobRepo.updateStatus.mockResolvedValue({});
    mockJobRepo.setDone.mockResolvedValue({});

    const { jobId } = await pipeline.run({
      userId: "u1", role: "administrator", topic: "test",
      depth: "summary", sources: [], outputs: ["podcast"],
    });

    expect(jobId).toBe("job-456");
    expect(mockNotebookLM.generatePodcast).toHaveBeenCalled();
  });
});
