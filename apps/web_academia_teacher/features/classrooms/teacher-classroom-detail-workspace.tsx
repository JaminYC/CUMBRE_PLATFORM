"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  ErrorPanel,
  LoadingPanel,
  MetricCard
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import {
  addTeacherStudentToClassroom,
  assignTeacherClassroomModules,
  deleteTeacherClassroom,
  fetchTeacherClassroom,
  fetchTeachingModules,
  scheduleTeacherMeeting,
  searchTeacherUsers
} from "@/services/client/teacher-api";

// ── Local icons ────────────────────────────────────────────────────────────────
function UsersIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="7" cy="6" r="3" fill="currentColor" />
      <path d="M1 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15" cy="6" r="2.3" fill="currentColor" opacity=".45" />
      <path d="M18 17c0-2-1.2-3.4-3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".45" />
    </svg>
  );
}
function CalendarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <line x1="6" y1="1" x2="6" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="1" x2="14" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="2" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="5" y="11" width="3" height="3" rx="0.5" fill="currentColor" opacity=".6" />
      <rect x="10" y="11" width="3" height="3" rx="0.5" fill="currentColor" opacity=".6" />
    </svg>
  );
}
function MeetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1" y="4" width="10" height="10" rx="1.5" fill="#34a853" opacity=".85" />
      <path d="M11 7l5-3v10l-5-3V7z" fill="#4285f4" />
    </svg>
  );
}
function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect width="18" height="18" rx="4" fill="#2D8CFF" />
      <path d="M3 6h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3V6z" fill="white" />
      <path d="M11 8l4-2v6l-4-2V8z" fill="white" />
    </svg>
  );
}
function TeamsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect width="18" height="18" rx="4" fill="#6264A7" />
      <path d="M9 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM5 13c0-2.21 1.79-4 4-4s4 1.79 4 4H5zm8-2c.67 0 1.3.13 1.87.37A3.99 3.99 0 0 1 16 14h-3c0-1.04-.26-2.02-.71-2.87.23-.09.47-.13.71-.13z" fill="white" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M7 9a4 4 0 0 0 6 0l2-2a4 4 0 0 0-5.66-5.66L8.17 2.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 9a4 4 0 0 0-6 0L3 11a4 4 0 0 0 5.66 5.66l1.17-1.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 4h12M6 4V2h4v2M5 4v9a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="7" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="10" width="4" height="8" rx="1" fill="currentColor" opacity=".7" />
      <rect x="8" y="6" width="4" height="12" rx="1" fill="currentColor" opacity=".85" />
      <rect x="14" y="2" width="4" height="16" rx="1" fill="currentColor" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
type Provider = "google_meet" | "zoom" | "microsoft_teams" | "custom";

const PROVIDER_CONFIG: Record<Provider, { label: string; icon: React.ReactElement; launchUrl?: string; placeholder: string }> = {
  google_meet: {
    label: "Google Meet",
    icon: <MeetIcon />,
    launchUrl: "https://meet.google.com/new",
    placeholder: "https://meet.google.com/xxx-xxxx-xxx"
  },
  zoom: {
    label: "Zoom",
    icon: <ZoomIcon />,
    launchUrl: "https://zoom.us/start/videomeeting",
    placeholder: "https://zoom.us/j/..."
  },
  microsoft_teams: {
    label: "Teams",
    icon: <TeamsIcon />,
    placeholder: "https://teams.microsoft.com/l/meetup-join/..."
  },
  custom: {
    label: "Link propio",
    icon: <LinkIcon />,
    placeholder: "https://..."
  }
};

const EMPTY_MEETING = {
  provider: "google_meet" as Provider,
  title: "",
  description: "",
  scheduledAt: "",
  meetingUrl: ""
};

// ── Student search state ───────────────────────────────────────────────────────
type FoundUser = { id: string; displayName: string; email: string; primaryRole: string };

// ── Main workspace ─────────────────────────────────────────────────────────────
export function TeacherClassroomDetailWorkspace({
  classroomId
}: {
  classroomId: string;
}) {
  const router = useRouter();
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

  /* Mínimo visible: sin esto, cuando los datos llegan rápido el
     indicador parpadea y el logo no alcanza a armarse. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  // Module assignment
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([]);
  const [learningPathIds, setLearningPathIds] = useState("");
  const selectedModuleSet = useMemo(() => new Set(selectedModuleIds), [selectedModuleIds]);

  // Meeting form
  const [meetingDraft, setMeetingDraft] = useState(EMPTY_MEETING);

  // Student search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<FoundUser[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Delete confirm
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Action feedback
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        `Se asignaron ${response.classroom.assignedModuleIds?.length ?? 0} módulos al aula.`
      );
    });
  }

  async function handleScheduleMeeting() {
    await runAction(async () => {
      const response = await scheduleTeacherMeeting({ classroomId, ...meetingDraft });
      setActionMessage(`Reunión programada: "${response.meeting.title}".`);
      setMeetingDraft(EMPTY_MEETING);
    });
  }

  async function handleDeleteClassroom() {
    try {
      setIsDeleting(true);
      await deleteTeacherClassroom(classroomId);
      router.push("/classrooms");
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "No fue posible eliminar el aula.");
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  }

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (value.length < 2) {
      setSearchResults([]);
      return;
    }
    searchTimeout.current = setTimeout(async () => {
      try {
        setIsSearching(true);
        const result = await searchTeacherUsers(value);
        setSearchResults(result.users ?? []);
      } catch {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 350);
  }, []);

  async function handleAddStudent(user: FoundUser) {
    await runAction(async () => {
      await addTeacherStudentToClassroom({
        classroomId,
        userId: user.id,
        displayName: user.displayName,
        email: user.email
      });
      setActionMessage(`${user.displayName} fue agregado al aula.`);
      setSearchQuery("");
      setSearchResults([]);
    });
  }

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (mostrandoCarga) {
    return (
      <AppShell
        title="Cargando aula..."
        breadcrumbs={[
          { label: "Panel docente", href: "/dashboard" },
          { label: "Aulas", href: "/classrooms" },
          { label: "Detalle del aula" }
        ]}
      >
        <LoadingPanel
          message="Cargando detalle del aula..."
          detail="Recuperando lista de estudiantes, analítica, módulos y la próxima reunión."
        />
      </AppShell>
    );
  }

  if (resource.error || !resource.data) {
    return (
      <AppShell
        title="Error"
        breadcrumbs={[
          { label: "Panel docente", href: "/dashboard" },
          { label: "Aulas", href: "/classrooms" }
        ]}
      >
        <ErrorPanel message={resource.error ?? "No fue posible cargar esta aula."} onRetry={resource.reload} />
      </AppShell>
    );
  }

  const overview = resource.data.classroom.overview;
  const analytics = resource.data.classroom.analytics;
  const providerCfg = PROVIDER_CONFIG[meetingDraft.provider as Provider];

  return (
    <AppShell
      title={overview.classroom.name}
      description={`${overview.classroom.subject} · ${overview.classroom.gradeLevel}`}
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Aulas", href: "/classrooms" },
        { label: overview.classroom.name }
      ]}
      headerActions={
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <button className="button button--ghost" type="button" onClick={resource.reload}>
            Recargar
          </button>
          {showDeleteConfirm ? (
            <>
              <span style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>¿Eliminar este aula?</span>
              <button
                className="button"
                type="button"
                style={{ background: "var(--color-error, #e53e3e)", borderColor: "transparent" }}
                disabled={isDeleting}
                onClick={handleDeleteClassroom}
              >
                {isDeleting ? "Eliminando..." : "Sí, eliminar"}
              </button>
              <button className="button button--ghost" type="button" onClick={() => setShowDeleteConfirm(false)}>
                Cancelar
              </button>
            </>
          ) : (
            <button
              className="button button--ghost"
              type="button"
              style={{ color: "var(--color-error, #e53e3e)" }}
              onClick={() => setShowDeleteConfirm(true)}
            >
              <TrashIcon /> Eliminar aula
            </button>
          )}
        </div>
      }
    >
      {/* ── Métricas ───────────────────────────────────────────────── */}
      <section className="dashboard-grid">
        <MetricCard label="Código de clase" value={overview.classroom.classCode} helper="El estudiantado se une con este código" />
        <MetricCard label="Estudiantes" value={String(overview.roster.length)} helper={`${analytics.joinedLearnerCount} incorporados`} />
        <MetricCard label="Progreso promedio" value={`${Math.round(analytics.averageProgressPercent)}%`} helper={`${analytics.tutorUsageTotal} interacciones con el tutor`} />
      </section>

      {/* ── Feedback ───────────────────────────────────────────────── */}
      {actionMessage && (
        <div className="state-panel state-panel--success" style={{ marginBottom: "1rem" }}>
          <div className="state-panel__content">
            <p className="state-panel__title">✓ {actionMessage}</p>
          </div>
          <button className="button button--ghost" style={{ marginLeft: "auto" }} onClick={() => setActionMessage(null)} type="button">Cerrar</button>
        </div>
      )}
      {actionError && (
        <div className="state-panel state-panel--error" style={{ marginBottom: "1rem" }}>
          <div className="state-panel__content">
            <p className="state-panel__title">Error</p>
            <p className="state-panel__detail">{actionError}</p>
          </div>
          <button className="button button--ghost" style={{ marginLeft: "auto" }} onClick={() => setActionError(null)} type="button">Cerrar</button>
        </div>
      )}

      {/* ── Herramientas del docente ────────────────────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-muted)", marginBottom: "0.75rem" }}>
          Herramientas del aula
        </p>
        <div className="teacher-tools-row">
          <a className="teacher-tool-card" href="/materials">
            <span className="teacher-tool-card__icon"><BookIcon /></span>
            <span className="teacher-tool-card__label">Materiales</span>
            <span className="teacher-tool-card__hint">Subir y gestionar recursos</span>
          </a>
          <a className="teacher-tool-card" href="/exams">
            <span className="teacher-tool-card__icon"><ChartIcon /></span>
            <span className="teacher-tool-card__label">Exámenes</span>
            <span className="teacher-tool-card__hint">Subir y corregir evaluaciones</span>
          </a>
          <button type="button" className="teacher-tool-card" onClick={() => document.getElementById("meet-section")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="teacher-tool-card__icon"><CalendarIcon /></span>
            <span className="teacher-tool-card__label">Programar reunión</span>
            <span className="teacher-tool-card__hint">Google Meet, Zoom, Teams</span>
          </button>
          <button type="button" className="teacher-tool-card" onClick={() => document.getElementById("students-section")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="teacher-tool-card__icon"><UsersIcon /></span>
            <span className="teacher-tool-card__label">Agregar estudiante</span>
            <span className="teacher-tool-card__hint">Buscar y añadir al aula</span>
          </button>
        </div>
      </section>

      {/* ── Panel principal ─────────────────────────────────────────── */}
      <div className="workspace-grid">
        {/* Lista de estudiantes + agregar */}
        <ContentCard
          title="Estudiantes del aula"
          subtitle="Lista activa y herramienta para agregar nuevos participantes."
          accent="mint"
        >
          {/* Agregar estudiante por búsqueda */}
          <div id="students-section" className="add-student-panel">
            <p className="add-student-panel__title"><PlusIcon /> Agregar estudiante</p>
            <div className="add-student-search">
              <span className="add-student-search__icon"><SearchIcon /></span>
              <input
                className="add-student-search__input"
                placeholder="Buscar por nombre o correo..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                autoComplete="off"
              />
              {isSearching && <span className="add-student-search__spinner" />}
            </div>
            {searchResults.length > 0 && (
              <ul className="search-results-list">
                {searchResults.map((user) => (
                  <li key={user.id} className="search-results-list__item">
                    <span className="search-results-list__avatar">{user.displayName[0]?.toUpperCase()}</span>
                    <span className="search-results-list__info">
                      <strong>{user.displayName}</strong>
                      <small>{user.email}</small>
                    </span>
                    <button
                      type="button"
                      className="button"
                      style={{ marginLeft: "auto", padding: "0.3rem 0.75rem", fontSize: "0.8rem" }}
                      disabled={isSubmitting}
                      onClick={() => handleAddStudent(user)}
                    >
                      Agregar
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery.length >= 2 && !isSearching && searchResults.length === 0 && (
              <p style={{ fontSize: "0.82rem", color: "var(--ink-muted)", padding: "0.5rem 0" }}>
                No se encontraron usuarios con "{searchQuery}".
              </p>
            )}
          </div>

          {/* Roster existente */}
          <div className="tile-grid" style={{ marginTop: "1rem" }}>
            {overview.roster.length === 0 ? (
              <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", gridColumn: "1/-1" }}>
                Esta aula aún no tiene estudiantes. Usa la búsqueda de arriba para agregar.
              </p>
            ) : (
              overview.roster.map((entry) => (
                <article className="tile tile--dense" key={entry.enrollment.id}>
                  <h4>{entry.student.name}</h4>
                  <ul className="detail-list">
                    <li><strong>Correo:</strong> {entry.student.email ?? "No proporcionado"}</li>
                    <li><strong>Estado:</strong> {entry.enrollment.status}</li>
                    <li><strong>Credencial:</strong> {entry.generatedCredential ?? "Cuenta propia"}</li>
                  </ul>
                </article>
              ))
            )}
          </div>
        </ContentCard>

        {/* Programar reunión */}
        <ContentCard
          title="Programar reunión"
          subtitle="Crea una sesión virtual y ponla a disposición de tus estudiantes."
          accent="sun"
        >
          <div id="meet-section">
            {/* Provider tabs */}
            <div className="provider-tabs" style={{ marginBottom: "1rem" }}>
              {(Object.keys(PROVIDER_CONFIG) as Provider[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`provider-btn ${meetingDraft.provider === p ? "provider-btn--active" : ""}`}
                  onClick={() => setMeetingDraft((d) => ({ ...d, provider: p, meetingUrl: "" }))}
                >
                  {PROVIDER_CONFIG[p].icon} {PROVIDER_CONFIG[p].label}
                </button>
              ))}
            </div>

            {/* Quick launch link */}
            {providerCfg.launchUrl && (
              <a
                href={providerCfg.launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="meet-launch-btn"
                style={{ marginBottom: "1rem", display: "flex" }}
              >
                {providerCfg.icon} Abrir {providerCfg.label} para crear reunión ↗
              </a>
            )}

            <div className="form-grid">
              <label className="field field--full">
                <span>Título de la reunión</span>
                <input
                  value={meetingDraft.title}
                  onChange={(e) => setMeetingDraft((d) => ({ ...d, title: e.target.value }))}
                  placeholder={`Clase con ${overview.classroom.name}`}
                />
              </label>
              <label className="field">
                <span>Fecha y hora</span>
                <input
                  type="datetime-local"
                  value={meetingDraft.scheduledAt}
                  onChange={(e) => setMeetingDraft((d) => ({ ...d, scheduledAt: e.target.value }))}
                />
              </label>
              <label className="field">
                <span>URL de la reunión</span>
                <input
                  value={meetingDraft.meetingUrl}
                  onChange={(e) => setMeetingDraft((d) => ({ ...d, meetingUrl: e.target.value }))}
                  placeholder={providerCfg.placeholder}
                />
              </label>
              <label className="field field--full">
                <span>Descripción <small style={{ color: "var(--ink-muted)" }}>(opcional)</small></span>
                <textarea
                  value={meetingDraft.description}
                  onChange={(e) => setMeetingDraft((d) => ({ ...d, description: e.target.value }))}
                  rows={2}
                  placeholder="Tema de la sesión, indicaciones previas..."
                />
              </label>
            </div>

            <button
              className="button"
              type="button"
              disabled={isSubmitting || !meetingDraft.title || !meetingDraft.scheduledAt || !meetingDraft.meetingUrl}
              onClick={handleScheduleMeeting}
              style={{ marginTop: "0.5rem", width: "100%" }}
            >
              {isSubmitting ? "Guardando..." : "Guardar reunión"}
            </button>

            {/* Reunión actual */}
            {overview.nextMeeting && (
              <div className="tile tile--dense" style={{ marginTop: "1rem", background: "var(--surface-raised, #f8f9fa)" }}>
                <p className="auth-card__eyebrow">Próxima reunión programada</p>
                <ul className="detail-list">
                  <li><strong>Plataforma:</strong> {overview.nextMeeting.provider ?? "—"}</li>
                  <li><strong>Título:</strong> {overview.nextMeeting.title}</li>
                  <li><strong>Cuándo:</strong> {new Date(overview.nextMeeting.scheduledAt).toLocaleString("es", { dateStyle: "medium", timeStyle: "short" })}</li>
                  <li>
                    <strong>Enlace:</strong>{" "}
                    <a href={overview.nextMeeting.meetingUrl} target="_blank" rel="noopener noreferrer" style={{ wordBreak: "break-all" }}>
                      {overview.nextMeeting.meetingUrl}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ContentCard>
      </div>

      {/* ── Módulos y analítica ─────────────────────────────────────── */}
      <div className="workspace-grid workspace-grid--secondary" style={{ marginTop: "1.5rem" }}>
        <ContentCard
          title="Asignar módulos"
          subtitle="Elige módulos generados por IA y recorridos de aprendizaje para esta aula."
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
          <label className="field field--full" style={{ marginTop: "0.75rem" }}>
            <span>IDs de recorridos de aprendizaje <small style={{ color: "var(--ink-muted)" }}>(separados por coma)</small></span>
            <input
              value={learningPathIds}
              onChange={(event) => setLearningPathIds(event.target.value)}
              placeholder="uuid-1, uuid-2"
            />
          </label>
          <button className="button" type="button" disabled={isSubmitting} onClick={handleAssignModules} style={{ marginTop: "0.5rem" }}>
            Guardar asignaciones
          </button>
        </ContentCard>

        <ContentCard
          title="Patrones de dificultad"
          subtitle="Señales adaptativas y del grafo donde el aula se está atascando."
          accent="mint"
        >
          <div className="tile-grid">
            {analytics.conceptStruggles.length === 0 ? (
              <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", gridColumn: "1/-1" }}>
                Sin patrones detectados aún. Espera que los estudiantes interactúen con el tutor.
              </p>
            ) : (
              analytics.conceptStruggles.map((entry) => (
                <article className="tile tile--dense" key={entry.concept.id}>
                  <h4>{entry.concept.title}</h4>
                  <ul className="detail-list">
                    <li><strong>Estudiantes:</strong> {entry.learnerCount}</li>
                    <li><strong>Uso del tutor:</strong> {entry.tutorUsageCount}</li>
                    <li><strong>Progreso promedio:</strong> {Math.round(entry.averageProgressPercent)}%</li>
                  </ul>
                </article>
              ))
            )}
          </div>
        </ContentCard>
      </div>
    </AppShell>
  );
}
