// apps/web_student/services/client/generator-api.ts
"use client";

import { requestAppApi } from "@/lib/app-http";

export interface GenerateRequest {
  topic: string;
  depth: "summary" | "deep";
  sources: { type: "text"; data: string }[];
  outputs: string[];
}

export interface GenerationJob {
  id: string;
  status: "pending" | "processing" | "done" | "error";
  topic: string;
  depth: string;
  outputs: string[];
  results?: { pdfUrl?: string; podcastUrl?: string; infographicUrl?: string };
  errorMsg?: string;
  createdAt: string;
}

export function startGeneration(req: GenerateRequest) {
  return requestAppApi<{ jobId: string }>("/api/generator", {
    method: "POST",
    body: JSON.stringify(req),
  });
}

export function getGenerationJob(jobId: string) {
  return requestAppApi<GenerationJob>(`/api/generator/${jobId}`);
}
