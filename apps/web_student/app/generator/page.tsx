// apps/web_student/app/generator/page.tsx
"use client";
import { useState, useCallback } from "react";
import { AppShell } from "@/components/app-shell";
import { GeneratorForm } from "@/features/generator/generator-form";
import { JobStatusPoller } from "@/features/generator/job-status-poller";
import { ResultsPanel } from "@/features/generator/results-panel";
import {
  startGeneration,
  type GenerateRequest,
  type GenerationJob,
} from "@/services/client/generator-api";

type Phase = "form" | "polling" | "done" | "error";

export default function GeneratorPage() {
  const [phase, setPhase] = useState<Phase>("form");
  const [jobId, setJobId] = useState<string | null>(null);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [doneJob, setDoneJob] = useState<GenerationJob | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(req: GenerateRequest) {
    try {
      setPhase("polling");
      setOutputs(req.outputs);
      const { jobId: newJobId } = await startGeneration(req);
      setJobId(newJobId);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Error al iniciar generación"
      );
      setPhase("error");
    }
  }

  const handleDone = useCallback((job: GenerationJob) => {
    setDoneJob(job);
    setPhase("done");
  }, []);

  const handleError = useCallback((msg: string) => {
    setErrorMsg(msg);
    setPhase("error");
  }, []);

  function reset() {
    setPhase("form");
    setJobId(null);
    setDoneJob(null);
    setErrorMsg(null);
    setOutputs([]);
  }

  return (
    <AppShell
      title="Generador de Contenido"
      description="Genera PDFs académicos, podcasts reales e infografías sobre cualquier tema."
    >
      <div className="generator-page">
        {phase === "form" && (
          <GeneratorForm onSubmit={handleSubmit} isLoading={false} />
        )}
        {phase === "polling" && jobId && (
          <JobStatusPoller
            jobId={jobId}
            outputs={outputs}
            onDone={handleDone}
            onError={handleError}
          />
        )}
        {phase === "done" && doneJob && (
          <ResultsPanel job={doneJob} onReset={reset} />
        )}
        {phase === "error" && (
          <div className="generator-error">
            <p className="generator-error__message">❌ {errorMsg}</p>
            <button onClick={reset} className="button button--ghost">
              ← Intentar de nuevo
            </button>
          </div>
        )}
      </div>
    </AppShell>
  );
}
