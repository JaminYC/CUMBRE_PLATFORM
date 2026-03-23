"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { EmptyState, ErrorPanel, LoadingPanel } from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { teacherAppConfig } from "@/lib/env";
import { fetchTeacherOverview } from "@/services/client/teacher-api";

// ── Icons ─────────────────────────────────────────────────────────────────────
function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="8" cy="7" r="3.5" fill="currentColor"/>
      <path d="M1 19c0-3.866 3.134-6 7-6s7 2.134 7 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="16.5" cy="7" r="2.8" fill="currentColor" opacity=".45"/>
      <path d="M20 19c0-2.4-1.5-4.2-3.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity=".45"/>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="3" y="13" width="3.5" height="7" rx="1" fill="currentColor" opacity=".4"/>
      <rect x="9.25" y="8" width="3.5" height="12" rx="1" fill="currentColor" opacity=".7"/>
      <rect x="15.5" y="3" width="3.5" height="17" rx="1" fill="currentColor"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 3L2 19h18L11 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <line x1="11" y1="10" x2="11" y2="14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="11" cy="17" r="1" fill="currentColor"/>
    </svg>
  );
}

function ClassroomIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="3" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}

function ModuleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="9" height="9" rx="1.5" fill="currentColor" opacity=".3"/>
      <rect x="13" y="2" width="9" height="9" rx="1.5" fill="currentColor"/>
      <rect x="2" y="13" width="9" height="9" rx="1.5" fill="currentColor" opacity=".6"/>
      <rect x="13" y="13" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function MaterialIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="3" width="11" height="16" rx="1.5" fill="currentColor" opacity=".25"/>
      <rect x="6" y="1" width="13" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
      <line x1="9" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="9" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="9" y1="14" x2="13" y2="14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function ExamIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 17l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AuthoringIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14.5 3.5l6 6L8 22H2v-6L14.5 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M11.5 6.5l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function TutorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3C7 3 3 6.5 3 11c0 2.2.9 4.2 2.4 5.7L4 21l4.5-1.5C9.9 20.1 11 20.3 12 20.3c5 0 9-3.5 9-8s-4-9.3-9-9.3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <line x1="8" y1="11" x2="8" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="12" y1="11" x2="12" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="16" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Feature nav cards ─────────────────────────────────────────────────────────
const FEATURES = [
  {
    href: "/classrooms",
    label: "Aulas",
    desc: "Crear aulas, importar listas de estudiantes y programar sesiones en vivo.",
    Icon: ClassroomIcon,
    color: "mint"
  },
  {
    href: "/materials",
    label: "Materiales",
    desc: "Subir documentos, videos o enlaces para usar como base de módulos y lecciones.",
    Icon: MaterialIcon,
    color: "sun"
  },
  {
    href: "/module-builder",
    label: "Constructor de módulos",
    desc: "Generar módulos y cuestionarios automáticamente desde tus materiales.",
    Icon: ModuleIcon,
    color: "indigo"
  },
  {
    href: "/exams",
    label: "Examenes",
    desc: "Subir escaneos de exámenes físicos y obtener corrección automática con IA.",
    Icon: ExamIcon,
    color: "sand"
  },
  {
    href: "/authoring",
    label: "Estudio de autoría",
    desc: "Crear lecciones, mapear conceptos en el grafo y curar contenido instruccional.",
    Icon: AuthoringIcon,
    color: "accent"
  },
  {
    href: "#learner-summaries",
    label: "Seguimiento IA",
    desc: "Ver qué estudiantes dependen del tutor, qué conceptos cuestan más y el próximo paso adaptativo.",
    Icon: TutorIcon,
    color: "neutral"
  },
] as const;

// ── Status helpers ────────────────────────────────────────────────────────────
function statusPill(pct: number, review: boolean) {
  if (review) return { label: "Necesita atención", cls: "status-pill--alert" };
  if (pct >= 70) return { label: "Activo",           cls: "status-pill--ok"    };
  return          { label: "En seguimiento",          cls: "status-pill--warn"  };
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
export function TeacherDashboard() {
  const resource = useAsyncResource(
    () => fetchTeacherOverview(teacherAppConfig.defaultLearningPathId),
    []
  );

  if (resource.isLoading) {
    return (
      <LoadingPanel
        message="Cargando resumen docente..."
        detail="Recuperando resumenes de estudiantes, guia adaptativa y senales del grafo."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar el resumen docente."}
        onRetry={resource.reload}
      />
    );
  }

  const overview = resource.data.overview;

  return (
    <AppShell
      title="Panel docente"
      description="Visibilidad operativa sobre avance, uso del tutor y señales de dificultad."
      breadcrumbs={[{ label: "Panel docente" }]}
    >

      {/* ── Métricas ──────────────────────────────────────────────────── */}
      <section className="dash-metrics">
        <div className="dash-metric dash-metric--mint">
          <div className="dash-metric__icon"><UsersIcon /></div>
          <div>
            <p className="dash-metric__label">Estudiantes</p>
            <p className="dash-metric__value">{overview.totalLearners}</p>
            <p className="dash-metric__helper">{overview.activeLearners} activos</p>
          </div>
        </div>

        <div className="dash-metric dash-metric--sun">
          <div className="dash-metric__icon"><ChartIcon /></div>
          <div>
            <p className="dash-metric__label">Progreso promedio</p>
            <p className="dash-metric__value">{Math.round(overview.averageProgressPercent)}%</p>
            <p className="dash-metric__helper">Sobre la ruta observada</p>
          </div>
        </div>

        <div className="dash-metric dash-metric--sand">
          <div className="dash-metric__icon"><AlertIcon /></div>
          <div>
            <p className="dash-metric__label">Requieren repaso</p>
            <p className="dash-metric__value">{overview.learnersNeedingReview}</p>
            <p className="dash-metric__helper">{Math.round(overview.averageTutorUsageCount)} turnos tutor promedio</p>
          </div>
        </div>
      </section>

      {/* ── Feature cards ─────────────────────────────────────────────── */}
      <section className="dash-features">
        <h3 className="dash-section-title">¿Qué querés hacer?</h3>
        <div className="feature-grid">
          {FEATURES.map(({ href, label, desc, Icon, color }) => (
            <Link key={href} href={href} className={`feature-card feature-card--${color}`}>
              <div className="feature-card__icon"><Icon /></div>
              <div className="feature-card__body">
                <p className="feature-card__label">{label}</p>
                <p className="feature-card__desc">{desc}</p>
              </div>
              <span className="feature-card__arrow"><ArrowIcon /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Estudiantes ───────────────────────────────────────────────── */}
      <section className="dash-students" id="learner-summaries">
        <div className="dash-section-header">
          <div>
            <h3 className="dash-section-title">Resumenes de estudiantes</h3>
            <p className="dash-section-sub">Progreso, dominio, siguiente paso y uso del tutor por estudiante.</p>
          </div>
        </div>

        {overview.learnerSummaries.length ? (
          <div className="student-grid">
            {overview.learnerSummaries.map((summary) => {
              const pct = Math.round(summary.progressPercent);
              const needsReview = overview.learnersNeedingReview > 0 && summary.tutorUsageCount > overview.averageTutorUsageCount;
              const pill = statusPill(pct, needsReview);
              return (
                <article className="student-card" key={summary.learnerUserId}>
                  <div className="student-card__head">
                    <div className="student-avatar">{summary.learnerUserId.charAt(0).toUpperCase()}</div>
                    <div>
                      <p className="student-card__name">{summary.learnerUserId}</p>
                      <span className={`status-pill ${pill.cls}`}>{pill.label}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="progress-row">
                    <span className="progress-label">Progreso</span>
                    <span className="progress-pct">{pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>

                  {/* Stats */}
                  <dl className="student-stats">
                    <div className="student-stats__item">
                      <dt>Dominio</dt>
                      <dd>{summary.estimatedMastery?.level ?? "—"}</dd>
                    </div>
                    <div className="student-stats__item">
                      <dt>Tutor</dt>
                      <dd>{summary.tutorUsageCount} turnos</dd>
                    </div>
                    <div className="student-stats__item student-stats__item--full">
                      <dt>Siguiente paso</dt>
                      <dd>{summary.nextBestAction?.title ?? "Continuar"}</dd>
                    </div>
                    {summary.strugglingConcept ? (
                      <div className="student-stats__item student-stats__item--full student-stats__item--alert">
                        <dt>Dificultad</dt>
                        <dd>{summary.strugglingConcept.title}</dd>
                      </div>
                    ) : null}
                  </dl>

                  {summary.adaptiveGuidance?.[0] ? (
                    <p className="student-guidance">{summary.adaptiveGuidance[0].summary}</p>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title="Todavia no hay datos de estudiantes."
            description="Cuando existan sesiones de aprendizaje, este panel mostrara resumenes por estudiante."
          />
        )}
      </section>

      {/* ── Conceptos con dificultad ───────────────────────────────────── */}
      {overview.conceptStruggles.length > 0 && (
        <section className="dash-concepts">
          <h3 className="dash-section-title">Conceptos con mayor fricción</h3>
          <p className="dash-section-sub">Detectados por el grafo de conocimiento — los más frecuentes entre tus estudiantes.</p>
          <div className="concept-grid">
            {overview.conceptStruggles.map((entry) => (
              <article className="concept-card" key={entry.concept.id}>
                <div className="concept-card__top">
                  <p className="concept-card__title">{entry.concept.title}</p>
                  <span className="concept-badge">{entry.learnerCount} estudiantes</span>
                </div>
                {entry.concept.summary ? (
                  <p className="concept-card__summary">{entry.concept.summary}</p>
                ) : null}
                <div className="concept-stats">
                  <span>{entry.tutorUsageCount} turnos tutor</span>
                  <span>{entry.recommendationCount} recs. repaso</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

    </AppShell>
  );
}
