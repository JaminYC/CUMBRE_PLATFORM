// apps/web_student/features/generator/generator-form.tsx
"use client";
import { useState } from "react";
import type { GenerateRequest } from "@/services/client/generator-api";

interface Props {
  onSubmit: (req: GenerateRequest) => void;
  isLoading: boolean;
}

export function GeneratorForm({ onSubmit, isLoading }: Props) {
  const [topic, setTopic] = useState("");
  const [depth, setDepth] = useState<"summary" | "deep">("summary");
  const [outputs, setOutputs] = useState<string[]>(["pdf"]);
  const [extraText, setExtraText] = useState("");

  function toggleOutput(o: string) {
    setOutputs(prev =>
      prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim() || outputs.length === 0) return;
    const sources = extraText.trim()
      ? [{ type: "text" as const, data: extraText.trim() }]
      : [];
    onSubmit({ topic: topic.trim(), depth, sources, outputs });
  }

  return (
    <form onSubmit={handleSubmit} className="generator-form">
      <div className="generator-form__field">
        <label className="generator-form__label">Tema *</label>
        <input
          type="text"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          placeholder="Ej: La fotosíntesis en plantas tropicales"
          className="generator-form__input"
          required
        />
      </div>

      <div className="generator-form__field">
        <label className="generator-form__label">
          Texto adicional (opcional)
        </label>
        <textarea
          value={extraText}
          onChange={e => setExtraText(e.target.value)}
          placeholder="Pega aquí notas o extractos de texto de referencia..."
          rows={4}
          className="generator-form__textarea"
        />
      </div>

      <div className="generator-form__field">
        <label className="generator-form__label">Profundidad</label>
        <div className="generator-form__depth-options">
          {(["summary", "deep"] as const).map(d => (
            <button
              key={d}
              type="button"
              onClick={() => setDepth(d)}
              className={`generator-form__depth-btn ${depth === d ? "generator-form__depth-btn--active" : ""}`}
            >
              {d === "summary" ? "📝 Resumen" : "🔬 Investigación profunda"}
            </button>
          ))}
        </div>
      </div>

      <div className="generator-form__field">
        <label className="generator-form__label">
          ¿Qué quieres generar? *
        </label>
        <div className="generator-form__output-options">
          {[
            { key: "pdf", label: "📄 PDF Académico" },
            { key: "podcast", label: "🎙️ Podcast (NotebookLM)" },
            { key: "infographic", label: "🖼️ Infografía" },
          ].map(o => (
            <button
              key={o.key}
              type="button"
              onClick={() => toggleOutput(o.key)}
              className={`generator-form__output-btn ${outputs.includes(o.key) ? "generator-form__output-btn--active" : ""}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !topic.trim() || outputs.length === 0}
        className="button button--primary generator-form__submit"
      >
        {isLoading ? "Iniciando..." : "✨ Generar contenido"}
      </button>
    </form>
  );
}
