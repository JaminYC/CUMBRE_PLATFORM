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
      setErrorMsg(err instanceof Error ? err.message : "Error al iniciar generación");
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
      description="Convierte cualquier tema en PDFs académicos, podcasts con dos voces e infografías."
    >
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "8px 0 48px" }}>
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "36px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)",
          border: "1px solid #e8ecf0",
        }}>
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
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "#fef2f2", border: "2px solid #fecaca",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", margin: "0 auto 16px",
              }}>
                ✕
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#dc2626", marginBottom: "8px" }}>
                Algo salió mal
              </div>
              <p style={{ color: "#64748b", marginBottom: "28px", fontSize: "14px" }}>{errorMsg}</p>
              <button
                onClick={reset}
                style={{
                  padding: "12px 28px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  color: "#fff", border: "none", fontWeight: 600,
                  cursor: "pointer", fontSize: "14px",
                  boxShadow: "0 2px 8px rgba(99,102,241,0.35)",
                }}
              >
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
