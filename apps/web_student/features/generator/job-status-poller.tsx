"use client";
import { useEffect, useState } from "react";
import { getGenerationJob, type GenerationJob } from "@/services/client/generator-api";

interface Props {
  jobId: string;
  outputs: string[];
  onDone: (job: GenerationJob) => void;
  onError: (msg: string) => void;
}

export function JobStatusPoller({ jobId, outputs, onDone, onError }: Props) {
  const [status, setStatus] = useState<string>("pending");
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsed(s => s + 1), 1000);
    const poller = setInterval(async () => {
      try {
        const job = await getGenerationJob(jobId);
        setStatus(job.status);
        if (job.status === "done") { clearInterval(poller); clearInterval(timer); onDone(job); }
        else if (job.status === "error") { clearInterval(poller); clearInterval(timer); onError(job.errorMsg ?? "Error desconocido"); }
      } catch { /* red temporal */ }
    }, 3000);
    return () => { clearInterval(poller); clearInterval(timer); };
  }, [jobId, onDone, onError]);

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeLabel = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  const hasPodcast = outputs.includes("podcast");

  const outputLabels: Record<string, string> = {
    pdf: "PDF Académico",
    podcast: "Podcast",
    infographic: "Infografía",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", padding: "32px 0" }}>
      <style>{`
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-badge {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Spinner */}
      <div style={{ position: "relative", width: "88px", height: "88px" }}>
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          border: "4px solid #e0e7ff",
          borderTopColor: "#6366f1",
          animation: "spin-ring 1s linear infinite",
        }} />
        <div style={{
          position: "absolute", inset: "12px", borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px",
        }}>
          AI
        </div>
      </div>

      {/* Status text */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "20px", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
          {status === "pending" ? "En cola..." : "Generando tu contenido..."}
        </div>
        <div style={{ fontSize: "14px", color: "#64748b", maxWidth: "360px" }}>
          {hasPodcast
            ? "El podcast puede tardar 3–5 minutos. NotebookLM genera audio real con dos voces."
            : "Esto puede tomar 1–3 minutos según la profundidad elegida."}
        </div>
        <div style={{ marginTop: "10px", fontSize: "13px", color: "#94a3b8", fontVariantNumeric: "tabular-nums" }}>
          {timeLabel} transcurridos
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: "320px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
          {["En cola", "Procesando", "Listo"].map((step, i) => {
            const stepKeys = ["pending", "processing", "done"];
            const stepIdx = stepKeys.indexOf(status);
            const done = i < stepIdx || status === "done";
            const active = stepKeys[i] === status;
            return (
              <span key={step} style={{
                fontSize: "11px", fontWeight: 600,
                color: done || active ? "#6366f1" : "#cbd5e1",
              }}>{step}</span>
            );
          })}
        </div>
        <div style={{ height: "6px", borderRadius: "3px", background: "#e2e8f0", overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: "3px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            width: status === "pending" ? "15%" : status === "processing" ? "60%" : "100%",
            transition: "width 0.8s ease",
          }} />
        </div>
      </div>

      {/* Output badges */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        {outputs.map(o => (
          <div key={o} style={{
            padding: "6px 14px", borderRadius: "20px",
            background: "#f0f4ff", border: "1px solid #c7d2fe",
            fontSize: "12px", color: "#4f46e5", fontWeight: 600,
          }}>
            {outputLabels[o] ?? o}
          </div>
        ))}
      </div>
    </div>
  );
}
