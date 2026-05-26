// services/content_generator_service/src/clients/notebooklm-client.ts
export interface PodcastRequest {
  title: string;
  content: string;
  language?: string;
  length?: "SHORT" | "STANDARD";
  instructions?: string;
}

export interface InfographicRequest {
  title: string;
  content: string;
}

export class NotebookLMClient {
  constructor(private readonly baseUrl: string) {}

  async generatePodcast(req: PodcastRequest): Promise<string> {
    const response = await fetch(`${this.baseUrl}/generate-podcast`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: req.title,
        content: req.content,
        language: req.language ?? "es",
        length: req.length ?? "STANDARD",
        instructions: req.instructions ?? "Genera un podcast educativo en español, estilo conversacional entre dos hosts.",
      }),
      signal: AbortSignal.timeout(600_000), // 10 min timeout — NotebookLM es lento
    });

    if (!response.ok) {
      throw new Error(`NotebookLM server error: ${response.status}`);
    }

    const data = await response.json() as { url: string };
    return data.url;
  }

  async generateInfographic(req: InfographicRequest): Promise<string> {
    const response = await fetch(`${this.baseUrl}/generate-infographic`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: req.title, content: req.content }),
      signal: AbortSignal.timeout(300_000), // 5 min timeout
    });

    if (!response.ok) {
      throw new Error(`NotebookLM server error: ${response.status}`);
    }

    const data = await response.json() as { url: string };
    return data.url;
  }

  async isHealthy(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/health`, {
        signal: AbortSignal.timeout(5000),
      });
      return res.ok;
    } catch {
      return false;
    }
  }
}
