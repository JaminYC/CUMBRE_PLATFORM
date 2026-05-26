// services/content_generator_service/test/repositories.test.ts
import { describe, it, expect, vi } from "vitest";
import { GenerationJobRepository } from "../src/repositories/generation-job-repository.js";
import { GenerationLimitRepository } from "../src/repositories/generation-limit-repository.js";

const mockPrisma = {
  generationJobRecord: {
    create: vi.fn(),
    findUnique: vi.fn(),
    findMany: vi.fn(),
    update: vi.fn(),
    count: vi.fn(),
  },
  generationLimitRecord: {
    findUnique: vi.fn(),
    upsert: vi.fn(),
    findMany: vi.fn(),
  },
};

describe("GenerationJobRepository", () => {
  const repo = new GenerationJobRepository(mockPrisma as any);

  it("creates a job with status pending", async () => {
    const input = {
      userId: "user-1", role: "student", topic: "fotosíntesis",
      depth: "summary" as const, sources: [], outputs: ["pdf"] as string[],
    };
    mockPrisma.generationJobRecord.create.mockResolvedValue({ id: "job-1", status: "pending", ...input });
    const result = await repo.createJob(input);
    expect(result.id).toBe("job-1");
    expect(result.status).toBe("pending");
  });

  it("finds a job by id", async () => {
    mockPrisma.generationJobRecord.findUnique.mockResolvedValue({ id: "job-1", status: "done" });
    const result = await repo.findById("job-1");
    expect(result?.status).toBe("done");
  });

  it("updates job status", async () => {
    mockPrisma.generationJobRecord.update.mockResolvedValue({ id: "job-1", status: "processing" });
    const result = await repo.updateStatus("job-1", "processing");
    expect(result.status).toBe("processing");
  });

  it("sets job as done with results", async () => {
    const results = { pdfUrl: "https://storage.example.com/test.pdf" };
    mockPrisma.generationJobRecord.update.mockResolvedValue({ id: "job-1", status: "done", results });
    const result = await repo.setDone("job-1", results);
    expect(result.status).toBe("done");
    expect((result.results as any).pdfUrl).toBeDefined();
  });

  it("counts jobs today for a user", async () => {
    mockPrisma.generationJobRecord.count.mockResolvedValue(3);
    const count = await repo.countTodayByUser("user-1");
    expect(count).toBe(3);
  });
});

describe("GenerationLimitRepository", () => {
  const repo = new GenerationLimitRepository(mockPrisma as any);

  it("returns limit for a role", async () => {
    mockPrisma.generationLimitRecord.findUnique.mockResolvedValue({ role: "student", dailyLimit: 5 });
    const result = await repo.getLimitForRole("student");
    expect(result?.dailyLimit).toBe(5);
  });

  it("returns null when no limit configured", async () => {
    mockPrisma.generationLimitRecord.findUnique.mockResolvedValue(null);
    const result = await repo.getLimitForRole("student");
    expect(result).toBeNull();
  });
});
