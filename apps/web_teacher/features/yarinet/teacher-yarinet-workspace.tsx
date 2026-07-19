"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  createTeacherChallenge,
  fetchTeacherChallenges,
  type ChallengeView
} from "@/services/client/yarinet-api";

const CATEGORIES = [
  { value: "medio_ambiente", label: "Medio ambiente" },
  { value: "convivencia", label: "Convivencia escolar" },
  { value: "seguridad", label: "Seguridad" },
  { value: "salud", label: "Salud y bienestar" },
  { value: "cultura", label: "Cultura y ciudadanía" },
  { value: "tecnologia", label: "Tecnología" }
];

const STATUS_COLORS: Record<string, string> = {
  DRAFT: "#6b7280",
  OPEN: "#2563eb",
  DELIBERATING: "#7c3aed",
  SYNTHESIZING: "#d97706",
  CLOSED: "#059669",
  ARCHIVED: "#9ca3af"
};

export function TeacherYariNetWorkspace() {
  const challenges = useAsyncResource<{ items: ChallengeView[] }>(
    () => fetchTeacherChallenges(),
    []
  );

  const [title, setTitle] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [questionsText, setQuestionsText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormError(null);
    setSubmitting(true);
    try {
      const guidingQuestions = questionsText
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      await createTeacherChallenge({
        title: title.trim(),
        problemStatement: problemStatement.trim(),
        category,
        guidingQuestions
      });
      setTitle("");
      setProblemStatement("");
      setQuestionsText("");
      setCategory(CATEGORIES[0].value);
      challenges.reload();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "No se pudo crear el reto.");
    } finally {
      setSubmitting(false);
    }
  }

  const items = challenges.data?.items ?? [];

  return (
    <AppShell
      title="YariNET — Retos Cívicos"
      description="Lanza problemas comunitarios para que tus estudiantes los deliberen."
      breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "YariNET" }]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 360px", gap: 24, alignItems: "start" }}>
        {/* Lista de retos */}
        <section>
          <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 12px" }}>
            Retos publicados {items.length > 0 ? `(${items.length})` : ""}
          </h2>

          {challenges.isLoading && (
            <p style={{ color: "#6b7280" }}>Cargando retos…</p>
          )}

          {challenges.error && (
            <div style={{ padding: 16, borderRadius: 10, background: "#fef2f2", color: "#b91c1c", border: "1px solid #fecaca" }}>
              {challenges.error}
            </div>
          )}

          {!challenges.isLoading && !challenges.error && items.length === 0 && (
            <div style={{ padding: 24, borderRadius: 12, background: "#f9fafb", border: "1px dashed #d1d5db", color: "#6b7280" }}>
              Aún no has creado ningún reto cívico. Usa el formulario para lanzar el primero.
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((challenge) => (
              <article
                key={challenge.id}
                style={{ padding: 16, borderRadius: 12, background: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>{challenge.title}</h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 0.4,
                      padding: "3px 10px",
                      borderRadius: 999,
                      color: "#fff",
                      background: STATUS_COLORS[challenge.status] ?? "#6b7280"
                    }}
                  >
                    {challenge.status}
                  </span>
                </div>
                <p style={{ margin: "8px 0 0", color: "#374151", fontSize: 14, lineHeight: 1.5 }}>
                  {challenge.problemStatement}
                </p>
                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "#6b7280", background: "#f3f4f6", padding: "2px 8px", borderRadius: 6 }}>
                    {CATEGORIES.find((c) => c.value === challenge.category)?.label ?? challenge.category}
                  </span>
                  {challenge.guidingQuestions.length > 0 && (
                    <span style={{ fontSize: 12, color: "#6b7280" }}>
                      {challenge.guidingQuestions.length} pregunta(s) guía
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Formulario de creación */}
        <aside style={{ position: "sticky", top: 16 }}>
          <form
            onSubmit={handleSubmit}
            style={{ padding: 20, borderRadius: 14, background: "#ffffff", border: "1px solid #e5e7eb", display: "flex", flexDirection: "column", gap: 14 }}
          >
            <h2 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Nuevo reto cívico</h2>

            <label style={labelStyle}>
              Título
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                minLength={3}
                placeholder="Basura en el parque del barrio"
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              Problema comunitario
              <textarea
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                required
                minLength={10}
                rows={4}
                placeholder="Describe el problema que los estudiantes deben deliberar…"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </label>

            <label style={labelStyle}>
              Categoría
              <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              Preguntas guía (una por línea)
              <textarea
                value={questionsText}
                onChange={(e) => setQuestionsText(e.target.value)}
                rows={3}
                placeholder={"¿Quién es responsable?\n¿Qué podemos hacer los estudiantes?"}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </label>

            {formError && (
              <p style={{ margin: 0, color: "#b91c1c", fontSize: 13 }}>{formError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: "none",
                background: submitting ? "#93c5fd" : "#2563eb",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                cursor: submitting ? "default" : "pointer"
              }}
            >
              {submitting ? "Creando…" : "Lanzar reto"}
            </button>
          </form>
        </aside>
      </div>
    </AppShell>
  );
}

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontSize: 13,
  fontWeight: 600,
  color: "#374151"
};

const inputStyle: React.CSSProperties = {
  padding: "9px 11px",
  borderRadius: 9,
  border: "1px solid #d1d5db",
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "inherit",
  color: "#111827",
  outline: "none"
};
