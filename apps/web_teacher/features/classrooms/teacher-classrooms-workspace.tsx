"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { EmptyState, ErrorPanel, LoadingPanel } from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  createTeacherClassroom,
  fetchTeacherClassrooms,
  importTeacherStudents,
  scheduleTeacherMeeting
} from "@/services/client/teacher-api";

// ── Icons ─────────────────────────────────────────────────────────────────────
function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="7" cy="6" r="3" fill="currentColor"/>
      <path d="M1 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="15" cy="6" r="2.3" fill="currentColor" opacity=".45"/>
      <path d="M18 17c0-2-1.2-3.4-3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".45"/>
    </svg>
  );
}
function BoardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="1" y="2" width="18" height="12" rx="1.5" fill="currentColor" opacity=".2"/>
      <rect x="1" y="2" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="7" y1="14" x2="5" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="13" y1="14" x2="15" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="4" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="4" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="6" y1="1" x2="6" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="14" y1="1" x2="14" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="2" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="5" y="11" width="3" height="3" rx="0.5" fill="currentColor" opacity=".6"/>
      <rect x="10" y="11" width="3" height="3" rx="0.5" fill="currentColor" opacity=".6"/>
    </svg>
  );
}
function MeetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1" y="4" width="10" height="10" rx="1.5" fill="#34a853" opacity=".85"/>
      <path d="M11 7l5-3v10l-5-3V7z" fill="#4285f4"/>
    </svg>
  );
}
function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect width="18" height="18" rx="4" fill="#2D8CFF"/>
      <path d="M3 6h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3V6z" fill="white"/>
      <path d="M11 8l4-2v6l-4-2V8z" fill="white"/>
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M7 9a4 4 0 0 0 6 0l2-2a4 4 0 0 0-5.66-5.66L8.17 2.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 9a4 4 0 0 0-6 0L3 11a4 4 0 0 0 5.66 5.66l1.17-1.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── CSV helper ────────────────────────────────────────────────────────────────
function parseCsvPreview(csvContent: string) {
  const lines = csvContent.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const [header, ...rows] = lines;
  return { header, rows: rows.slice(0, 5).map((r) => r.split(",").map((p) => p.trim())) };
}

// ── Meeting draft ─────────────────────────────────────────────────────────────
type Provider = "google_meet" | "zoom" | "custom";
const EMPTY_MEETING = {
  provider: "google_meet" as Provider,
  title: "",
  description: "",
  scheduledAt: "",
  meetingUrl: ""
};

// ── Workspace ─────────────────────────────────────────────────────────────────
export function TeacherClassroomsWorkspace() {
  const resource = useAsyncResource(() => fetchTeacherClassrooms(), []);

  // Create aula
  const [createDraft, setCreateDraft] = useState({ name: "", gradeLevel: "", subject: "" });
  const [isCreating, setIsCreating] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Import CSV
  const [selectedClassroomId, setSelectedClassroomId] = useState("");
  const [csvContent, setCsvContent] = useState("name,email,gradeLevel");
  const csvPreview = useMemo(() => parseCsvPreview(csvContent), [csvContent]);

  // Meeting scheduling
  const [meetingClassroomId, setMeetingClassroomId] = useState<string | null>(null);
  const [meetingDraft, setMeetingDraft] = useState(EMPTY_MEETING);

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
      setActionMessage(`Aula "${response.classroom.name}" creada con código ${response.classroom.classCode}.`);
      setSelectedClassroomId(response.classroom.id);
      setCreateDraft({ name: "", gradeLevel: "", subject: "" });
      setIsCreating(false);
    });
  }

  async function handleCsvImport() {
    if (!selectedClassroomId) {
      setActionError("Selecciona un aula antes de importar estudiantes.");
      return;
    }
    await runAction(async () => {
      const response = await importTeacherStudents({ classroomId: selectedClassroomId, csvContent });
      setActionMessage(`Se importaron ${response.importedStudents.length} estudiantes en "${response.classroom.name}".`);
    });
  }

  async function handleCsvFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setCsvContent(await file.text());
  }

  async function handleScheduleMeeting(classroomId: string) {
    await runAction(async () => {
      await scheduleTeacherMeeting({ classroomId, ...meetingDraft });
      setActionMessage("Reunión programada correctamente.");
      setMeetingClassroomId(null);
      setMeetingDraft(EMPTY_MEETING);
    });
  }

  function openMeetForm(classroomId: string) {
    setMeetingClassroomId(meetingClassroomId === classroomId ? null : classroomId);
    setMeetingDraft(EMPTY_MEETING);
  }

  // ── Loading / Error ──────────────────────────────────────────────────────────
  if (resource.isLoading) {
    return (
      <AppShell title="Aulas" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Aulas" }]}>
        <LoadingPanel message="Cargando aulas..." detail="Recuperando lista de aulas, codigos de clase y proximas reuniones." />
      </AppShell>
    );
  }

  if (resource.error || !resource.data) {
    return (
      <AppShell title="Aulas" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Aulas" }]}>
        <ErrorPanel message={resource.error ?? "No fue posible cargar las aulas."} onRetry={resource.reload} />
      </AppShell>
    );
  }

  const { items, total } = resource.data;
  const totalStudents = items.reduce((s, i) => s + i.roster.length, 0);
  const meetingsCount = items.filter((i) => i.nextMeeting).length;

  return (
    <AppShell
      title="Aulas"
      description="Gestioná tus aulas, importá estudiantes y programá reuniones en Google Meet o Zoom."
      breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Aulas" }]}
      headerActions={
        <button className="button" type="button" onClick={() => { setIsCreating(true); setActionMessage(null); setActionError(null); }}>
          <PlusIcon /> Nueva aula
        </button>
      }
    >
      {/* ── Métricas ──────────────────────────────────────────────── */}
      <section className="dash-metrics">
        <div className="dash-metric dash-metric--mint">
          <div className="dash-metric__icon"><BoardIcon /></div>
          <div>
            <p className="dash-metric__label">Aulas activas</p>
            <p className="dash-metric__value">{total}</p>
            <p className="dash-metric__helper">Grupos docentes creados</p>
          </div>
        </div>
        <div className="dash-metric dash-metric--sun">
          <div className="dash-metric__icon"><UsersIcon /></div>
          <div>
            <p className="dash-metric__label">Estudiantes</p>
            <p className="dash-metric__value">{totalStudents}</p>
            <p className="dash-metric__helper">En todas las aulas</p>
          </div>
        </div>
        <div className="dash-metric dash-metric--sand">
          <div className="dash-metric__icon"><CalendarIcon /></div>
          <div>
            <p className="dash-metric__label">Próximas reuniones</p>
            <p className="dash-metric__value">{meetingsCount}</p>
            <p className="dash-metric__helper">Sesiones programadas</p>
          </div>
        </div>
      </section>

      {/* ── Feedback ──────────────────────────────────────────────── */}
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

      {/* ── Crear aula (panel expandible) ─────────────────────────── */}
      {isCreating && (
        <div className="create-aula-panel">
          <div className="create-aula-panel__header">
            <h3>Nueva aula</h3>
            <button type="button" className="button button--ghost" onClick={() => setIsCreating(false)}>Cancelar</button>
          </div>
          <div className="form-grid">
            <label className="field">
              <span>Nombre del aula</span>
              <input value={createDraft.name} onChange={(e) => setCreateDraft(c => ({ ...c, name: e.target.value }))} placeholder="8A Pensamiento sistémico" />
            </label>
            <label className="field">
              <span>Grado</span>
              <select value={createDraft.gradeLevel} onChange={(e) => setCreateDraft(c => ({ ...c, gradeLevel: e.target.value }))}>
                <option value="">Seleccionar grado</option>
                <optgroup label="Primaria">
                  <option value="1er grado">1er grado</option>
                  <option value="2do grado">2do grado</option>
                  <option value="3er grado">3er grado</option>
                  <option value="4to grado">4to grado</option>
                  <option value="5to grado">5to grado</option>
                  <option value="6to grado">6to grado</option>
                </optgroup>
                <optgroup label="Secundaria">
                  <option value="1° sec">1° sec</option>
                  <option value="2° sec">2° sec</option>
                  <option value="3° sec">3° sec</option>
                  <option value="4° sec">4° sec</option>
                  <option value="5° sec">5° sec</option>
                </optgroup>
              </select>
            </label>
            <label className="field field--full">
              <span>Asignatura</span>
              <select value={createDraft.subject} onChange={(e) => setCreateDraft(c => ({ ...c, subject: e.target.value }))}>
                <option value="">Seleccionar asignatura</option>
                <option value="Matemática">Matemática</option>
                <option value="Comunicación">Comunicación</option>
                <option value="Ciencias">Ciencias</option>
                <option value="Historia">Historia</option>
                <option value="Inglés">Inglés</option>
                <option value="Educación Física">Educación Física</option>
                <option value="Arte">Arte</option>
                <option value="Computación">Computación</option>
              </select>
            </label>
          </div>
          <button className="button" type="button" disabled={isSubmitting || !createDraft.name || !createDraft.gradeLevel || !createDraft.subject} onClick={handleCreateClassroom}>
            {isSubmitting ? "Creando..." : "Crear aula"}
          </button>
        </div>
      )}

      {/* ── Aulas grid ────────────────────────────────────────────── */}
      {items.length ? (
        <div className="aula-grid">
          {items.map((item) => {
            const isMeetOpen = meetingClassroomId === item.classroom.id;
            return (
              <article className="aula-card" key={item.classroom.id}>
                {/* Header tipo pizarra */}
                <div className="aula-card__header">
                  <div>
                    <p className="aula-card__subject">{item.classroom.subject}</p>
                    <h3 className="aula-card__name">{item.classroom.name}</h3>
                    <p className="aula-card__grade">{item.classroom.gradeLevel}</p>
                  </div>
                  <div className="aula-card__code">
                    <span className="aula-code-badge">{item.classroom.classCode}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="aula-card__body">
                  <div className="aula-card__stats">
                    <div className="aula-stat">
                      <span className="aula-stat__icon"><UsersIcon /></span>
                      <span className="aula-stat__value">{item.roster.length}</span>
                      <span className="aula-stat__label">estudiantes</span>
                    </div>
                    <div className="aula-stat">
                      <span className="aula-stat__icon"><CalendarIcon /></span>
                      <span className="aula-stat__value aula-stat__value--meet">
                        {item.nextMeeting ? item.nextMeeting.title : "Sin reunión"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="aula-card__actions">
                    <Link className="button button--ghost aula-card__open" href={`/classrooms/${item.classroom.id}`}>
                      Abrir aula <ArrowIcon />
                    </Link>
                    <button
                      type="button"
                      className={`button ${isMeetOpen ? "" : "button--ghost"} aula-card__meet-btn`}
                      onClick={() => openMeetForm(item.classroom.id)}
                    >
                      <CalendarIcon /> {isMeetOpen ? "Cerrar" : "Programar reunión"}
                    </button>
                  </div>

                  {/* Inline meeting form */}
                  {isMeetOpen && (
                    <div className="meeting-form">
                      <p className="meeting-form__title">Programar reunión</p>

                      {/* Provider selector */}
                      <div className="provider-tabs">
                        {(["google_meet", "zoom", "custom"] as Provider[]).map((p) => (
                          <button
                            key={p}
                            type="button"
                            className={`provider-btn ${meetingDraft.provider === p ? "provider-btn--active" : ""}`}
                            onClick={() => setMeetingDraft(d => ({ ...d, provider: p }))}
                          >
                            {p === "google_meet" && <><MeetIcon /> Google Meet</>}
                            {p === "zoom" && <><ZoomIcon /> Zoom</>}
                            {p === "custom" && <><LinkIcon /> Link propio</>}
                          </button>
                        ))}
                      </div>

                      {/* Quick launch */}
                      {meetingDraft.provider === "google_meet" && (
                        <a
                          href="https://meet.google.com/new"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="meet-launch-btn"
                        >
                          <MeetIcon /> Crear reunión en Google Meet ↗
                        </a>
                      )}
                      {meetingDraft.provider === "zoom" && (
                        <a
                          href="https://zoom.us/start/videomeeting"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="meet-launch-btn meet-launch-btn--zoom"
                        >
                          <ZoomIcon /> Iniciar reunión en Zoom ↗
                        </a>
                      )}

                      {/* Form fields */}
                      <div className="form-grid">
                        <label className="field field--full">
                          <span>Título de la reunión</span>
                          <input
                            value={meetingDraft.title}
                            onChange={(e) => setMeetingDraft(d => ({ ...d, title: e.target.value }))}
                            placeholder="Clase de matemática — jueves"
                          />
                        </label>
                        <label className="field">
                          <span>Fecha y hora</span>
                          <input
                            type="datetime-local"
                            value={meetingDraft.scheduledAt}
                            onChange={(e) => setMeetingDraft(d => ({ ...d, scheduledAt: e.target.value }))}
                          />
                        </label>
                        <label className="field">
                          <span>URL de la reunión</span>
                          <input
                            value={meetingDraft.meetingUrl}
                            onChange={(e) => setMeetingDraft(d => ({ ...d, meetingUrl: e.target.value }))}
                            placeholder={meetingDraft.provider === "google_meet" ? "https://meet.google.com/xxx-xxxx-xxx" : "https://zoom.us/j/..."}
                          />
                        </label>
                      </div>

                      <div className="meeting-form__actions">
                        <button type="button" className="button button--ghost" onClick={() => setMeetingClassroomId(null)}>Cancelar</button>
                        <button
                          type="button"
                          className="button"
                          disabled={isSubmitting || !meetingDraft.title || !meetingDraft.scheduledAt || !meetingDraft.meetingUrl}
                          onClick={() => handleScheduleMeeting(item.classroom.id)}
                        >
                          {isSubmitting ? "Guardando..." : "Guardar reunión"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}

          {/* Card para importar CSV — siempre visible */}
          <article className="aula-card aula-card--import">
            <div className="aula-card__header aula-card__header--import">
              <UsersIcon />
              <h3 className="aula-card__name">Importar estudiantes</h3>
            </div>
            <div className="aula-card__body">
              <div className="form-grid">
                <label className="field field--full">
                  <span>Aula de destino</span>
                  <select value={selectedClassroomId} onChange={(e) => setSelectedClassroomId(e.target.value)}>
                    <option value="">Selecciona un aula</option>
                    {items.map((i) => (
                      <option key={i.classroom.id} value={i.classroom.id}>{i.classroom.name}</option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Archivo CSV</span>
                  <input type="file" accept=".csv,text/csv" onChange={handleCsvFile} />
                </label>
                <label className="field field--full">
                  <span>Contenido CSV <small style={{ color: "var(--ink-muted)" }}>— columnas: name, email, gradeLevel</small></span>
                  <textarea value={csvContent} onChange={(e) => setCsvContent(e.target.value)} rows={6} />
                </label>
              </div>
              {csvPreview.header && (
                <div className="csv-preview">
                  <p className="csv-preview__label">Vista previa — encabezado: <code>{csvPreview.header}</code></p>
                  {csvPreview.rows.map((row, i) => (
                    <p key={i} className="csv-preview__row">{row.join(" · ")}</p>
                  ))}
                </div>
              )}
              <button className="button" type="button" disabled={isSubmitting} onClick={handleCsvImport}>
                Confirmar importación
              </button>
            </div>
          </article>
        </div>
      ) : (
        <EmptyState
          title="Todavía no hay aulas."
          description="Hacé clic en 'Nueva aula' para crear la primera, luego importá estudiantes y programá reuniones."
        />
      )}
    </AppShell>
  );
}
