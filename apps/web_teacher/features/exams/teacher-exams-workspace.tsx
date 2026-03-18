"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  fetchTeacherClassrooms,
  fetchTeachingQuizzes,
  uploadTeacherExamScan
} from "@/services/client/teacher-api";

export function TeacherExamsWorkspace() {
  const resource = useAsyncResource(
    async () => {
      const [classrooms, quizzes] = await Promise.all([
        fetchTeacherClassrooms(),
        fetchTeachingQuizzes()
      ]);

      return { classrooms, quizzes };
    },
    []
  );
  const [draft, setDraft] = useState({
    classroomId: "",
    studentId: "",
    quizId: "",
    fileName: "exam-scan.txt",
    mimeType: "text/plain",
    ocrTextHint: "",
    answerText: ""
  });
  const [attemptResponse, setAttemptResponse] = useState<Awaited<ReturnType<typeof uploadTeacherExamScan>> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectedClassroom = useMemo(
    () => resource.data?.classrooms.items.find((item) => item.classroom.id === draft.classroomId),
    [draft.classroomId, resource.data?.classrooms.items]
  );

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    let text = "";

    try {
      text = await file.text();
    } catch {
      text = "";
    }

    setDraft((current) => ({
      ...current,
      fileName: file.name,
      mimeType: file.type || "application/octet-stream",
      answerText: text
    }));
  }

  async function handleSubmit() {
    try {
      setError(null);
      const response = await uploadTeacherExamScan({
        ...draft,
        classroomId: draft.classroomId || undefined,
        quizId: draft.quizId || undefined,
        ocrTextHint: draft.ocrTextHint || undefined,
        answerText: draft.answerText || undefined
      });
      setAttemptResponse(response);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "No fue posible procesar el escaneo del examen."
      );
    }
  }

  if (resource.isLoading) {
    return (
      <LoadingPanel
        message="Cargando herramientas de examenes..."
        detail="Recuperando listas de aula y cuestionarios disponibles para verificar escaneos."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar las herramientas de procesamiento de examenes."}
        onRetry={resource.reload}
      />
    );
  }

  return (
    <AppShell
      title="Captura de examenes"
      description="Sube respuestas de examen escaneadas o fotografiadas, ejecuta el analisis tipo OCR y verifica las respuestas extraidas antes de calificar."
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Examenes" }
      ]}
    >
      <div className="workspace-grid">
        <ContentCard
          title="Subir escaneo"
          subtitle="Esta base acepta escaneos con texto extraido o pistas OCR y guarda automaticamente un intento preliminar."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Aula</span>
              <select
                value={draft.classroomId}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, classroomId: event.target.value, studentId: "" }))
                }
              >
                <option value="">Selecciona un aula</option>
                {resource.data.classrooms.items.map((item) => (
                  <option key={item.classroom.id} value={item.classroom.id}>
                    {item.classroom.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Estudiante</span>
              <select
                value={draft.studentId}
                onChange={(event) => setDraft((current) => ({ ...current, studentId: event.target.value }))}
              >
                <option value="">Selecciona un estudiante</option>
                {selectedClassroom?.roster.map((entry) => (
                  <option key={entry.student.id} value={entry.student.id}>
                    {entry.student.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Cuestionario</span>
              <select
                value={draft.quizId}
                onChange={(event) => setDraft((current) => ({ ...current, quizId: event.target.value }))}
              >
                <option value="">Cuestionario opcional</option>
                {resource.data.quizzes.items.map((quiz) => (
                  <option key={quiz.id} value={quiz.id}>
                    {quiz.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Archivo del escaneo</span>
              <input type="file" accept="image/*,.txt,.pdf" onChange={handleFile} />
            </label>
            <label className="field field--full">
              <span>Texto de respuestas</span>
              <textarea
                value={draft.answerText}
                onChange={(event) => setDraft((current) => ({ ...current, answerText: event.target.value }))}
                rows={10}
                placeholder="p1: respuesta A"
              />
            </label>
            <label className="field field--full">
              <span>Pista OCR</span>
              <textarea
                value={draft.ocrTextHint}
                onChange={(event) => setDraft((current) => ({ ...current, ocrTextHint: event.target.value }))}
                rows={5}
              />
            </label>
          </div>
          {error ? <p className="field-error">{error}</p> : null}
          <button className="button" type="button" disabled={!draft.studentId} onClick={handleSubmit}>
            Procesar escaneo
          </button>
        </ContentCard>

        <ContentCard
          title="Intento detectado"
          subtitle="Revisa el intento almacenado producido por el pipeline base de OCR para examenes."
          accent="sun"
        >
          {attemptResponse ? (
            <div className="tile-grid">
              <article className="tile tile--dense">
                <h4>{attemptResponse.attempt.studentId}</h4>
                <ul className="detail-list">
                  <li><strong>Puntaje:</strong> {attemptResponse.attempt.score ?? 0}</li>
                  <li><strong>Origen:</strong> {attemptResponse.attempt.source}</li>
                  <li><strong>Respuestas:</strong> {attemptResponse.attempt.answers.length}</li>
                </ul>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Respuestas analizadas</p>
                <ul className="detail-list">
                  {attemptResponse.attempt.answers.map((answer) => (
                    <li key={answer.questionId}>
                      <strong>{answer.questionId}:</strong> {answer.answerText}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ) : (
            <EmptyState
              title="Todavia no se ha procesado ningun escaneo."
              description="Sube un escaneo o texto de respuestas y el intento detectado aparecera aqui."
            />
          )}
        </ContentCard>
      </div>
    </AppShell>
  );
}
