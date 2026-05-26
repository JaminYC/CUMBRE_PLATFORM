// apps/web_student/features/generator/results-panel.tsx
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
    <div className="generator-results">
      <div className="generator-results__header">
        <h3 className="generator-results__title">✅ {job.topic}</h3>
        <button onClick={onReset} className="button button--ghost">
          ← Generar otro
        </button>
      </div>

      {results.pdfUrl && (
        <div className="generator-results__card">
          <div className="generator-results__card-header">
            <span>📄 PDF Académico</span>
            <a
              href={results.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--ghost"
            >
              Descargar
            </a>
          </div>
          <iframe
            src={results.pdfUrl}
            className="generator-results__pdf-preview"
            title="PDF preview"
          />
        </div>
      )}

      {results.podcastUrl && (
        <div className="generator-results__card">
          <p className="generator-results__card-title">
            🎙️ Podcast (generado con NotebookLM)
          </p>
          <audio controls className="generator-results__audio">
            <source src={results.podcastUrl} type="audio/mpeg" />
          </audio>
          <a
            href={results.podcastUrl}
            download
            className="button button--ghost generator-results__download"
          >
            Descargar MP3
          </a>
        </div>
      )}

      {results.infographicUrl && (
        <div className="generator-results__card">
          <div className="generator-results__card-header">
            <span>🖼️ Infografía</span>
            <a
              href={results.infographicUrl}
              download
              className="button button--ghost"
            >
              Descargar PNG
            </a>
          </div>
          <img
            src={results.infographicUrl}
            alt="Infografía generada"
            className="generator-results__image"
          />
        </div>
      )}
    </div>
  );
}
