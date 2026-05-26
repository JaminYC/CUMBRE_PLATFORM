// apps/web_student/features/generator/job-status-poller.tsx
"use client";
import { useEffect, useState } from "react";
import {
  getGenerationJob,
  type GenerationJob,
} from "@/services/client/generator-api";

interface Props {
  jobId: string;
  outputs: string[];
  onDone: (job: GenerationJob) => void;
  onError: (msg: string) => void;
}

export function JobStatusPoller({ jobId, outputs, onDone, onError }: Props) {
  const [status, setStatus] = useState<string>("pending");
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const dotInterval = setInterval(
      () => setDots(d => (d.length >= 3 ? "." : d + ".")),
      500
    );
    const pollInterval = setInterval(async () => {
      try {
        const job = await getGenerationJob(jobId);
        setStatus(job.status);
        if (job.status === "done") {
          clearInterval(pollInterval);
          clearInterval(dotInterval);
          onDone(job);
        } else if (job.status === "error") {
          clearInterval(pollInterval);
          clearInterval(dotInterval);
          onError(job.errorMsg ?? "Error desconocido");
        }
      } catch {
        // ignorar errores de red temporales
      }
    }, 3000);
    return () => {
      clearInterval(pollInterval);
      clearInterval(dotInterval);
    };
  }, [jobId, onDone, onError]);

  const labels: Record<string, string> = {
    pending: "En cola",
    processing: "Generando",
    done: "Listo",
    error: "Error",
  };

  return (
    <div className="generator-polling">
      <div className="generator-polling__icon">✨</div>
      <p className="generator-polling__status">
        {labels[status] ?? status}
        {dots}
      </p>
      <p className="generator-polling__hint">
        {outputs.includes("podcast")
          ? "El podcast de NotebookLM puede tardar 3-5 minutos. ¡Vale la pena esperar!"
          : "Esto puede tomar 1-3 minutos."}
      </p>
    </div>
  );
}
