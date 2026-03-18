"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  ErrorPanel,
  LoadingPanel,
  MetricCard
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  assignTeacherClassroomModules,
  fetchTeacherClassroom,
  fetchTeachingModules,
  scheduleTeacherMeeting
} from "@/services/client/teacher-api";

export function TeacherClassroomDetailWorkspace({
  classroomId
}: {
  classroomId: string;
}) {
  const resource = useAsyncResource(
    async () => {
      const [classroom, modules] = await Promise.all([
        fetchTeacherClassroom(classroomId),
        fetchTeachingModules()
      ]);

      return { classroom, modules };
    },
    [classroomId]
  );
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([]);
  const [meetingDraft, setMeetingDraft] = useState({
    provider: "google_meet",
    title: "Weekly classroom session",
    description: "",
    scheduledAt: ""
  });
  const [learningPathIds, setLearningPathIds] = useState("");
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedModuleSet = useMemo(() => new Set(selectedModuleIds), [selectedModuleIds]);

  async function runAction(work: () => Promise<void>) {
    try {
      setActionError(null);
      setActionMessage(null);
      setIsSubmitting(true);
      await work();
      await resource.reload();
    } catch (error) {
      setActionError(
        error instanceof Error ? error.message : "No fue posible aplicar el cambio en el aula."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleModule(moduleId: string) {
    setSelectedModuleIds((current) =>
      current.includes(moduleId)
        ? current.filter((entry) => entry !== moduleId)
        : [...current, moduleId]
    );
  }

  async function handleAssignModules() {
    await runAction(async () => {
      const response = await assignTeacherClassroomModules({
        classroomId,
        moduleIds: selectedModuleIds,
        learningPathIds: learningPathIds
          .split(",")
          .map((entry) => entry.trim())
          .filter(Boolean)
      });
      setActionMessage(
        `Se asignaron ${response.classroom.assignedModuleIds?.length ?? 0} modulos a ${response.classroom.name}.`
      );
    });
  }

  async function handleScheduleMeeting() {
    await runAction(async () => {
      const response = await scheduleTeacherMeeting({
        classroomId,
        ...meetingDraft
      });
      setActionMessage(`Reunion programada: ${response.meeting.title}`);
    });
  }

  if (resource.isLoading) {
    return (
      <LoadingPanel
        message="Cargando detalle del aula..."
        detail="Recuperando lista de estudiantes, analitica, modulos y la proxima reunion."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar esta aula."}
        onRetry={resource.reload}
      />
    );
  }

  const overview = resource.data.classroom.overview;
  const analytics = resource.data.classroom.analytics;

  return (
    <AppShell
      title={overview.classroom.name}
      description="Detalle operativo del aula: lista de estudiantes, codigo de clase, patrones de dificultad, reuniones y modulos asignados."
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Aulas", href: "/classrooms" },
        { label: overview.classroom.name }
      ]}
      headerActions={
        <button className="button button--ghost" type="button" onClick={resource.reload}>
          Recargar aula
        </button>
      }
    >
      <section className="dashboard-grid">
        <MetricCard label="Codigo de clase" value={overview.classroom.classCode} helper="El estudiantado se une con este codigo" />
        <MetricCard label="Lista" value={String(overview.roster.length)} helper={`${analytics.joinedLearnerCount} incorporados`} />
        <MetricCard label="Progreso promedio" value={`${Math.round(analytics.averageProgressPercent)}%`} helper={`${analytics.tutorUsageTotal} interacciones con el tutor`} />
      </section>

      {actionMessage ? (
        <div className="state-panel state-panel--success">
          <div className="state-panel__content">
            <p className="state-panel__title">Actualizacion aplicada</p>
            <p className="state-panel__detail">{actionMessage}</p>
          </div>
        </div>
      ) : null}

      {actionError ? (
        <div className="state-panel state-panel--error">
          <div className="state-panel__content">
            <p className="state-panel__title">La accion fallo</p>
            <p className="state-panel__detail">{actionError}</p>
          </div>
        </div>
      ) : null}

      <div className="workspace-grid">
        <ContentCard
          title="Lista de estudiantes"
          subtitle="Estudiantes importados, credenciales generadas y estado de incorporacion."
          accent="mint"
        >
          <div className="tile-grid">
            {overview.roster.map((entry) => (
              <article className="tile tile--dense" key={entry.enrollment.id}>
                <h4>{entry.student.name}</h4>
                <ul className="detail-list">
                  <li><strong>Correo:</strong> {entry.student.email ?? "No proporcionado"}</li>
                  <li><strong>Estado:</strong> {entry.enrollment.status}</li>
                  <li><strong>Credencial:</strong> {entry.generatedCredential ?? "Cuenta creada por el docente"}</li>
                </ul>
              </article>
            ))}
          </div>
        </ContentCard>

        <ContentCard
          title="Programar reunion"
          subtitle="Genera un enlace de sesion para el aula y ponlo a disposicion del estudiantado."
          accent="sun"
        >
          <div className="form-grid">
            <label className="field">
              <span>Proveedor</span>
              <select
                value={meetingDraft.provider}
                onChange={(event) =>
                  setMeetingDraft((current) => ({ ...current, provider: event.target.value }))
                }
              >
                <option value="google_meet">Google Meet</option>
                <option value="zoom">Zoom</option>
                <option value="microsoft_teams">Microsoft Teams</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            <label className="field">
              <span>Titulo</span>
              <input
                value={meetingDraft.title}
                onChange={(event) =>
                  setMeetingDraft((current) => ({ ...current, title: event.target.value }))
                }
              />
            </label>
            <label className="field field--full">
              <span>Descripcion</span>
              <textarea
                value={meetingDraft.description}
                onChange={(event) =>
                  setMeetingDraft((current) => ({
                    ...current,
                    description: event.target.value
                  }))
                }
              />
            </label>
            <label className="field">
              <span>Programada para</span>
              <input
                type="datetime-local"
                value={meetingDraft.scheduledAt}
                onChange={(event) =>
                  setMeetingDraft((current) => ({
                    ...current,
                    scheduledAt: event.target.value
                  }))
                }
              />
            </label>
          </div>
          <button className="button" type="button" disabled={isSubmitting} onClick={handleScheduleMeeting}>
            Programar reunion
          </button>
          {overview.nextMeeting ? (
            <div className="tile tile--dense">
              <p className="auth-card__eyebrow">Reunion actual</p>
              <ul className="detail-list">
                <li><strong>Titulo:</strong> {overview.nextMeeting.title}</li>
                <li><strong>Cuando:</strong> {new Date(overview.nextMeeting.scheduledAt).toLocaleString()}</li>
                <li><strong>Enlace:</strong> {overview.nextMeeting.meetingUrl}</li>
              </ul>
            </div>
          ) : null}
        </ContentCard>
      </div>

      <div className="workspace-grid workspace-grid--secondary">
        <ContentCard
          title="Asignar modulos"
          subtitle="Elige modulos generados por IA y recorridos de aprendizaje opcionales para esta aula."
          accent="sand"
        >
          <div className="chip-grid">
            {resource.data.modules.items.map((module) => (
              <label className="toggle-chip" key={module.id}>
                <input
                  type="checkbox"
                  checked={selectedModuleSet.has(module.id)}
                  onChange={() => toggleModule(module.id)}
                />
                <span>{module.title}</span>
              </label>
            ))}
          </div>
          <label className="field field--full">
            <span>Ids de recorridos de aprendizaje</span>
            <input
              value={learningPathIds}
              onChange={(event) => setLearningPathIds(event.target.value)}
              placeholder="learning-path-placeholder"
            />
          </label>
          <button className="button" type="button" disabled={isSubmitting} onClick={handleAssignModules}>
            Guardar asignaciones del aula
          </button>
        </ContentCard>

        <ContentCard
          title="Patrones de dificultad del aula"
          subtitle="Usa senales adaptativas y del grafo para ver donde el aula se esta atascando."
          accent="mint"
        >
          <div className="tile-grid">
            {analytics.conceptStruggles.map((entry) => (
              <article className="tile tile--dense" key={entry.concept.id}>
                <h4>{entry.concept.title}</h4>
                <ul className="detail-list">
                  <li><strong>Estudiantes:</strong> {entry.learnerCount}</li>
                  <li><strong>Uso del tutor:</strong> {entry.tutorUsageCount}</li>
                  <li><strong>Progreso promedio:</strong> {Math.round(entry.averageProgressPercent)}%</li>
                </ul>
              </article>
            ))}
          </div>
        </ContentCard>
      </div>
    </AppShell>
  );
}
