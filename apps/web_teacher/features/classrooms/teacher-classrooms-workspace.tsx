"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel,
  MetricCard
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  createTeacherClassroom,
  fetchTeacherClassrooms,
  importTeacherStudents
} from "@/services/client/teacher-api";

function parseCsvPreview(csvContent: string) {
  const lines = csvContent
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const [header, ...rows] = lines;

  return {
    header,
    rows: rows.slice(0, 6).map((row) => row.split(",").map((part) => part.trim()))
  };
}

export function TeacherClassroomsWorkspace() {
  const resource = useAsyncResource(() => fetchTeacherClassrooms(), []);
  const [createDraft, setCreateDraft] = useState({
    name: "",
    gradeLevel: "",
    subject: ""
  });
  const [selectedClassroomId, setSelectedClassroomId] = useState("");
  const [csvContent, setCsvContent] = useState("name,email,gradeLevel");
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const csvPreview = useMemo(() => parseCsvPreview(csvContent), [csvContent]);

  async function runAction(work: () => Promise<void>) {
    try {
      setActionError(null);
      setActionMessage(null);
      setIsSubmitting(true);
      await work();
      await resource.reload();
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "No fue posible completar la accion.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreateClassroom() {
    await runAction(async () => {
      const response = await createTeacherClassroom(createDraft);
      setActionMessage(`Aula creada: ${response.classroom.name}`);
      setSelectedClassroomId(response.classroom.id);
      setCreateDraft({ name: "", gradeLevel: "", subject: "" });
    });
  }

  async function handleCsvImport() {
    if (!selectedClassroomId) {
      setActionError("Selecciona un aula antes de importar estudiantes.");
      return;
    }

    await runAction(async () => {
      const response = await importTeacherStudents({
        classroomId: selectedClassroomId,
        csvContent
      });
      setActionMessage(
        `Se importaron ${response.importedStudents.length} estudiantes en ${response.classroom.name}.`
      );
    });
  }

  async function handleCsvFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const content = await file.text();
    setCsvContent(content);
  }

  if (resource.isLoading) {
    return (
      <LoadingPanel
        message="Cargando aulas..."
        detail="Recuperando lista de aulas, codigos de clase, cantidad de estudiantes y proximas reuniones."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar las aulas."}
        onRetry={resource.reload}
      />
    );
  }

  return (
    <AppShell
      title="Aulas"
      description="Crear aulas, generar codigos, importar listas desde CSV y pasar a operaciones especificas por aula."
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Aulas" }
      ]}
      headerActions={
        <button className="button button--ghost" type="button" onClick={resource.reload}>
          Recargar aulas
        </button>
      }
    >
      <section className="dashboard-grid">
        <MetricCard
          label="Aulas"
          value={String(resource.data.total)}
          helper="Grupos docentes operativos ya creados"
        />
        <MetricCard
          label="Estudiantes importados"
          value={String(resource.data.items.reduce((sum, item) => sum + item.roster.length, 0))}
          helper="Cantidad total de estudiantes en las aulas actuales"
        />
        <MetricCard
          label="Proximas reuniones"
          value={String(resource.data.items.filter((item) => item.nextMeeting).length)}
          helper="Aulas con una sesion programada"
        />
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
          title="Crear aula"
          subtitle="Crear el aula con docente responsable y codigo de clase generado."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Nombre</span>
              <input
                value={createDraft.name}
                onChange={(event) =>
                  setCreateDraft((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="8A Pensamiento sistemico"
              />
            </label>
            <label className="field">
              <span>Grado</span>
              <input
                value={createDraft.gradeLevel}
                onChange={(event) =>
                  setCreateDraft((current) => ({
                    ...current,
                    gradeLevel: event.target.value
                  }))
                }
                placeholder="8vo grado"
              />
            </label>
            <label className="field">
              <span>Asignatura</span>
              <input
                value={createDraft.subject}
                onChange={(event) =>
                  setCreateDraft((current) => ({ ...current, subject: event.target.value }))
                }
                placeholder="Ciencias"
              />
            </label>
          </div>
          <button
            className="button"
            type="button"
            disabled={isSubmitting || !createDraft.name || !createDraft.gradeLevel || !createDraft.subject}
            onClick={handleCreateClassroom}
          >
            Crear aula
          </button>
        </ContentCard>

        <ContentCard
          title="Importacion masiva de estudiantes"
          subtitle="Sube o pega un CSV con `name,email,gradeLevel` para crear la lista automaticamente."
          accent="sun"
        >
          <div className="form-grid">
            <label className="field">
              <span>Aula de destino</span>
              <select
                value={selectedClassroomId}
                onChange={(event) => setSelectedClassroomId(event.target.value)}
              >
                <option value="">Selecciona un aula</option>
                {resource.data.items.map((item) => (
                  <option key={item.classroom.id} value={item.classroom.id}>
                    {item.classroom.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Archivo CSV</span>
              <input type="file" accept=".csv,text/csv" onChange={handleCsvFile} />
            </label>
            <label className="field field--full">
              <span>Contenido CSV</span>
              <textarea
                value={csvContent}
                onChange={(event) => setCsvContent(event.target.value)}
                rows={10}
              />
            </label>
          </div>
          <div className="tile tile--dense">
            <p className="auth-card__eyebrow">Vista previa</p>
            <ul className="detail-list">
              <li>
                <strong>Encabezado:</strong> {csvPreview.header ?? "No se detecto encabezado"}
              </li>
              {csvPreview.rows.map((row, index) => (
                <li key={`${row.join("-")}-${index}`}>{row.join(" | ")}</li>
              ))}
            </ul>
          </div>
          <button className="button" type="button" disabled={isSubmitting} onClick={handleCsvImport}>
            Confirmar importacion
          </button>
        </ContentCard>
      </div>

      <ContentCard
        title="Aulas actuales"
        subtitle="Entra al listado, la analitica, la programacion de reuniones y la asignacion de modulos por aula."
        accent="sand"
      >
        {resource.data.items.length ? (
          <div className="tile-grid">
            {resource.data.items.map((item) => (
              <article className="tile" key={item.classroom.id}>
                <h4>{item.classroom.name}</h4>
                <p>
                  {item.classroom.subject} - {item.classroom.gradeLevel}
                </p>
                <ul className="detail-list">
                  <li>
                    <strong>Codigo de clase:</strong> {item.classroom.classCode}
                  </li>
                  <li>
                    <strong>Lista:</strong> {item.roster.length} estudiantes
                  </li>
                  <li>
                    <strong>Reunion:</strong> {item.nextMeeting?.title ?? "No programada"}
                  </li>
                </ul>
                <Link className="button button--ghost" href={`/classrooms/${item.classroom.id}`}>
                  Abrir aula
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavia no hay aulas."
            description="Crea la primera aula, luego importa estudiantes y asigna modulos desde aqui."
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
