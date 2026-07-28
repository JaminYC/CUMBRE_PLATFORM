"use client";
import type { GenerationJob } from "@/services/client/generator-api";

interface Props {
  job: GenerationJob;
  onReset: () => void;
}

export function ResultsPanel({ job, onReset }: Props) {
  const { results } = job;
  if (!results) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 20px", borderRadius: "12px",
        background: "#f0fdf4", border: "1px solid #bbf7d0",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "#22c55e",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: "16px",
          }}>✓</div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#15803d" }}>Contenido generado</div>
            <div style={{ fontSize: "13px", color: "#16a34a" }}>{job.topic}</div>
          </div>
        </div>
        <button onClick={onReset} style={{
          padding: "9px 18px", borderRadius: "8px",
          border: "1.5px solid #bbf7d0", background: "#fff",
          color: "#15803d", fontWeight: 600, cursor: "pointer", fontSize: "13px",
        }}>
          Generar otro
        </button>
      </div>

      {/* PDF */}
      {results.pdfUrl && (
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <div>
              <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "15px" }}>PDF Académico</div>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>Documento formal generado con LaTeX</div>
            </div>
            <a href={results.pdfUrl} target="_blank" rel="noopener noreferrer" style={btnStyle}>
              Descargar PDF
            </a>
          </div>
          <iframe
            src={results.pdfUrl}
            style={{ width: "100%", height: "460px", borderRadius: "8px", border: "1px solid #e2e8f0", marginTop: "14px" }}
            title="Vista previa del PDF"
          />
        </div>
      )}

      {/* Podcast */}
      {results.podcastUrl && (
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <div>
              <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "15px" }}>Podcast</div>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>Generado con NotebookLM · dos voces reales</div>
            </div>
            <a href={results.podcastUrl} download style={btnStyle}>Descargar MP3</a>
          </div>
          <div style={{ marginTop: "14px", padding: "16px", background: "#f8f4ff", borderRadius: "10px", border: "1px solid #e9d5ff" }}>
            <audio controls style={{ width: "100%" }}>
              <source src={results.podcastUrl} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      )}

      {/* Infografía */}
      {results.infographicUrl && (
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <div>
              <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "15px" }}>Infografía</div>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>Visual resumido del tema</div>
            </div>
            <a href={results.infographicUrl} download style={btnStyle}>Descargar imagen</a>
          </div>
          <img
            src={results.infographicUrl}
            alt="Infografía generada"
            style={{ width: "100%", borderRadius: "8px", marginTop: "14px", border: "1px solid #e2e8f0" }}
          />
        </div>
      )}
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff", borderRadius: "12px", padding: "20px",
  border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
};

const cardHeaderStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "space-between",
};

const btnStyle: React.CSSProperties = {
  padding: "9px 16px", borderRadius: "8px",
  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: 600,
  boxShadow: "0 2px 8px rgba(99,102,241,0.3)",
};
