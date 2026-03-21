import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

export function LandingPage({
  activeTarget
}: {
  activeTarget: PortalRoleTarget | null;
}) {
  const primaryHref = activeTarget ? activeTarget.dashboardUrl : "/login";
  const primaryLabel = activeTarget ? "Ir a mi espacio" : "Comenzar ahora";

  return (
    <div className="lp">

      {/* ── NAVBAR ── */}
      <header className="lp-nav">
        <span className="lp-logo">CUMBRE</span>
        <nav className="lp-nav__links">
          <a href="#experiencias">Experiencias</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#instituciones">Instituciones</a>
        </nav>
        <Link className="button lp-nav__cta" href="/login">
          Iniciar sesión
        </Link>
      </header>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero__left">
          <p className="lp-eyebrow">Plataforma educativa adaptativa</p>
          <h1 className="lp-hero__headline">
            Aprende, enseña y gestiona en una sola plataforma.
          </h1>
          <p className="lp-hero__desc">
            CUMBRE conecta rutas de aprendizaje adaptativas, tutor con IA y gestión de aula en un ecosistema unificado para estudiantes, docentes e instituciones.
          </p>
          <div className="lp-hero__actions">
            <Link className="button lp-btn-primary" href={primaryHref}>
              {primaryLabel}
            </Link>
            <a className="button lp-btn-ghost-dark" href="#demo">
              Solicitar demo
            </a>
          </div>
          <ul className="lp-checklist">
            {[
              "Rutas de aprendizaje adaptativas por perfil",
              "Tutor con IA y grounding contextual",
              "Aulas, materiales y seguimiento en tiempo real"
            ].map(item => (
              <li key={item} className="lp-checklist__item">
                <span className="lp-check" aria-hidden="true"><CheckIcon /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lp-hero__right" aria-hidden="true">
          <div className="lp-visual">
            <div className="lp-visual__blob" />
            <div className="lp-visual__blob lp-visual__blob--2" />

            {/* Sesión activa — card grande superior */}
            <article className="lp-card lp-card--session lp-float-1">
              <div className="lp-card__session-header">
                <span className="lp-live-dot" />
                <span className="lp-card__badge">Sesión activa</span>
                <span className="lp-card__time">14:32</span>
              </div>
              <p className="lp-card__topic">Pensamiento en sistemas</p>
              <div className="lp-progress-wrap">
                <div className="lp-progress-bar">
                  <div className="lp-progress-fill" style={{ width: "68%" }} />
                </div>
                <span className="lp-progress-pct">68%</span>
              </div>
              <p className="lp-card__next">
                <span className="lp-card__next-label">Próximo ›</span>
                Loops de retroalimentación
              </p>
            </article>

            {/* Roles badge — izquierda */}
            <article className="lp-card lp-card--roles lp-float-2">
              <span className="lp-card__icon lp-card__icon--mint">
                <GraduationCapIcon />
              </span>
              <div>
                <p className="lp-card__num">3 roles</p>
                <p className="lp-card__label">Estudiante · Docente · Admin</p>
              </div>
            </article>

            {/* Tutor IA — inferior derecha */}
            <article className="lp-card lp-card--tutor lp-float-3">
              <div className="lp-tutor-header">
                <span className="lp-card__icon lp-card__icon--sun" style={{ width: "1.8rem", height: "1.8rem", borderRadius: "0.5rem" }}>
                  <BrainIcon />
                </span>
                <span className="lp-tutor-name">Tutor IA</span>
                <span className="lp-live-dot lp-live-dot--sun" />
              </div>
              <div className="lp-tutor-bubble">
                Tu siguiente tema refuerza dominio en <strong>pensamiento crítico</strong>.
              </div>
              <div className="lp-tutor-typing">
                <span /><span /><span />
              </div>
            </article>

            {/* Social proof — rating — superior derecha */}
            <article className="lp-card lp-card--rating lp-float-4">
              <div className="lp-stars">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#efc88d" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="lp-card__num" style={{ fontSize: "1rem" }}>4.9 <span className="lp-card__label">/ 200 reseñas</span></p>
              <p className="lp-card__label">Confiado por 200+ usuarios</p>
            </article>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="lp-stats">
        <div className="lp-stat">
          <p className="lp-stat__num">100%</p>
          <p className="lp-stat__label">Adaptativo por perfil</p>
        </div>
        <div className="lp-stats__div" />
        <div className="lp-stat">
          <p className="lp-stat__num">3</p>
          <p className="lp-stat__label">Superficies especializadas</p>
        </div>
        <div className="lp-stats__div" />
        <div className="lp-stat">
          <p className="lp-stat__num">1 login</p>
          <p className="lp-stat__label">Portal unificado de acceso</p>
        </div>
        <div className="lp-stats__div" />
        <div className="lp-stat">
          <p className="lp-stat__num">IA nativa</p>
          <p className="lp-stat__label">Tutor, retrieval y grafo</p>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="lp-features" id="experiencias">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--ink">Experiencias</p>
          <h2>Tres roles, una sola plataforma.</h2>
          <p className="lp-section-hd__sub">
            Cada espacio está diseñado para el flujo real de trabajo de quien lo usa.
          </p>
        </div>
        <div className="lp-features-grid">
          <article className="lp-feat">
            <span className="lp-feat__icon lp-feat__icon--mint">
              <GraduationCapIcon />
            </span>
            <h3>Estudiante</h3>
            <p>
              Ruta adaptativa con continuidad, tutor contextual con IA, progreso explicable
              y lecciones asignadas por tu docente.
            </p>
          </article>
          <article className="lp-feat">
            <span className="lp-feat__icon lp-feat__icon--sun">
              <BookOpenIcon />
            </span>
            <h3>Docente</h3>
            <p>
              Creación de aulas, importación de estudiantes, authoring de módulos,
              seguimiento del grupo y publicación de materiales.
            </p>
          </article>
          <article className="lp-feat">
            <span className="lp-feat__icon lp-feat__icon--sand">
              <ShieldIcon />
            </span>
            <h3>Institución</h3>
            <p>
              Gestión del grafo de conocimiento, supervisión de contenido,
              integridad operativa y visibilidad de adopción.
            </p>
          </article>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-how" id="como-funciona">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--ink">Cómo funciona</p>
          <h2>Del aula al aprendizaje adaptativo en 4 pasos.</h2>
        </div>
        <div className="lp-how-grid">
          {[
            {
              n: "01",
              t: "El docente prepara el aula",
              d: "Crea el aula, importa estudiantes y publica módulos desde materiales o authoring directo."
            },
            {
              n: "02",
              t: "El estudiante entra con un solo login",
              d: "Accede a clases, lecciones, tutor y recomendaciones según su avance y nivel de dominio."
            },
            {
              n: "03",
              t: "La IA mantiene contexto y explicabilidad",
              d: "Retrieval, grafo de conocimiento y señales adaptativas enriquecen respuestas y siguientes pasos."
            },
            {
              n: "04",
              t: "La institución observa y corrige",
              d: "Administra grafo, contenido e integridad operativa sin romper la experiencia del aula."
            }
          ].map(step => (
            <div className="lp-step" key={step.n}>
              <p className="lp-step__num">{step.n}</p>
              <h4>{step.t}</h4>
              <p>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / DEMO ── */}
      <section className="lp-cta" id="instituciones">
        <div className="lp-cta__copy">
          <p className="lp-eyebrow lp-eyebrow--light">Para instituciones</p>
          <h2>Un producto único, varias superficies especializadas.</h2>
          <p>
            El portal unifica la entrada y el branding mientras cada sub-app conserva
            su flujo especializado y su arquitectura independiente.
          </p>
        </div>
        <article className="lp-cta__card" id="demo">
          <p className="lp-eyebrow">Demo</p>
          <h3>Solicita una demostración guiada</h3>
          <p>
            Recorremos flujos de estudiante, aula, authoring, analytics y tutor en un mismo setup.
          </p>
          <a
            className="button lp-btn-primary"
            href="mailto:demo@cumbre.teamvastoria.com?subject=Solicitud%20de%20demo%20CUMBRE"
          >
            Solicitar demo
          </a>
        </article>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <span className="lp-logo lp-logo--sm">CUMBRE</span>
        <p>© 2025 CUMBRE · Plataforma educativa adaptativa</p>
        <Link href="/login">Iniciar sesión</Link>
      </footer>

    </div>
  );
}
