"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { ContentCard } from "@/components/ui";
import { joinStudentClassroom } from "@/services/client/student-api";

export function JoinClassroomView() {
  const router = useRouter();
  const [classCode, setClassCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleJoin() {
    try {
      setIsSubmitting(true);
      setError(null);
      const response = await joinStudentClassroom(classCode);
      setMessage(`Te uniste a ${response.classroom.name}.`);
      router.refresh();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "No fue posible unirse al aula."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AppShell
      title="Unirme a un aula"
      description="Ingresa el codigo que te compartio tu docente para desbloquear modulos, reuniones y trabajo guiado."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Unirme a un aula" }
      ]}
    >
      <ContentCard
        title="Unirme con codigo de clase"
        subtitle="La experiencia del estudiante sigue siendo saludable: sin ranking, solo acceso al aula y trabajo asignado."
        accent="mint"
      >
        <div className="form-grid">
          <label className="field">
            <span>Codigo de clase</span>
            <input
              value={classCode}
              onChange={(event) => setClassCode(event.target.value.toUpperCase())}
              placeholder="SYSTEMS-A1B2"
            />
          </label>
        </div>
        {message ? <p className="muted-copy">{message}</p> : null}
        {error ? <p className="field-error">{error}</p> : null}
        <div className="card-actions">
          <button className="button" type="button" disabled={isSubmitting || !classCode} onClick={handleJoin}>
            Unirme al aula
          </button>
          <button className="button button--ghost" type="button" onClick={() => router.push("/classroom")}>
            Ver aulas
          </button>
        </div>
      </ContentCard>
    </AppShell>
  );
}
