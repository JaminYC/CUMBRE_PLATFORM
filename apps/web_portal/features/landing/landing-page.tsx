import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";
import { LpRoleHero } from "./lp-role-hero";

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

export function LandingPage({
  activeTarget
}: {
  activeTarget: PortalRoleTarget | null;
}) {
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

      {/* ── INTERACTIVE HERO with role switcher ── */}
      <LpRoleHero activeTarget={activeTarget} />

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
