// services/content_generator_service/test/notebooklm-client.test.ts
import { describe, it, expect, vi } from "vitest";
import { NotebookLMClient } from "../src/clients/notebooklm-client.js";

describe("NotebookLMClient", () => {
  it("calls /generate-podcast and returns a URL", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ url: "https://storage.example.com/podcast.mp3" }),
    }) as any;

    const client = new NotebookLMClient("http://localhost:8881");
    const url = await client.generatePodcast({
      title: "Fotosíntesis",
      content: "Las plantas convierten luz en energía.",
    });

    expect(url).toBe("https://storage.example.com/podcast.mp3");
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8881/generate-podcast",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("calls /generate-infographic and returns a URL", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ url: "https://storage.example.com/infographic.png" }),
    }) as any;

    const client = new NotebookLMClient("http://localhost:8881");
    const url = await client.generateInfographic({
      title: "Fotosíntesis",
      content: "Las plantas convierten luz en energía.",
    });

    expect(url).toBe("https://storage.example.com/infographic.png");
  });

  it("throws when server returns non-ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500, json: async () => ({ detail: "error" }) }) as any;
    const client = new NotebookLMClient("http://localhost:8881");
    await expect(client.generatePodcast({ title: "t", content: "c" }))
      .rejects.toThrow("NotebookLM server error: 500");
  });

  it("isHealthy returns false when server is offline", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("ECONNREFUSED")) as any;
    const client = new NotebookLMClient("http://localhost:8881");
    const healthy = await client.isHealthy();
    expect(healthy).toBe(false);
  });
});
