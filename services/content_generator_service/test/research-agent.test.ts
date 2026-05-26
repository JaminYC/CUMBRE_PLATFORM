// services/content_generator_service/test/research-agent.test.ts
import { describe, it, expect, vi } from "vitest";
import { ResearchAgent } from "../src/agents/research-agent.js";

const mockAnthropic = { messages: { create: vi.fn() } };

describe("ResearchAgent", () => {
  const agent = new ResearchAgent(mockAnthropic as any);

  it("returns structured research with fullText", async () => {
    const fakeResearch = {
      title: "Fotosíntesis",
      abstract: "Proceso por el cual las plantas convierten luz en energía.",
      sections: [{ heading: "Introducción", content: "Las plantas usan clorofila.", keyPoints: ["clorofila"] }],
      bibliography: [],
      fullText: "Fotosíntesis: Las plantas convierten luz en energía usando clorofila.",
    };
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: JSON.stringify(fakeResearch) }],
    });

    const result = await agent.research({ topic: "fotosíntesis", depth: "summary", sources: [] });

    expect(result.title).toBe("Fotosíntesis");
    expect(result.sections).toHaveLength(1);
    expect(result.fullText).toContain("clorofila");
  });

  it("throws on invalid JSON from Claude", async () => {
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: "esto no es json" }],
    });
    await expect(
      agent.research({ topic: "test", depth: "summary", sources: [] })
    ).rejects.toThrow("ResearchAgent: invalid JSON from Claude");
  });

  it("throws when required fields missing", async () => {
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: '{"title": "solo titulo"}' }],
    });
    await expect(
      agent.research({ topic: "test", depth: "summary", sources: [] })
    ).rejects.toThrow("ResearchAgent: invalid JSON from Claude");
  });
});
