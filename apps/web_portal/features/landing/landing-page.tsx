import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import type { PortalRoleTarget } from "@/lib/role-targets";

export function LandingPage({
  activeTarget
}: {
  activeTarget: PortalRoleTarget | null;
}) {
  const primaryHref = activeTarget ? activeTarget.dashboardUrl : "/login";
  const primaryLabel = activeTarget ? "Ir a mi espacio" : "Iniciar sesion";

  return (
    <main className="portal-page">
      <header className="portal-nav">
        <BrandMark />
        <nav className="portal-nav__links">
          <a href="#experiencias">Experiencias</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#instituciones">Instituciones</a>
          <Link className="button button--ghost" href="/login">
            Iniciar sesion
          </Link>
        </nav>
      </header>

      <section className="hero-card">
        <div className="hero-card__content">
          <p className="eyebrow">Plataforma educativa adaptativa</p>
          <h2>Una sola entrada para estudiar, ensenar y operar el ecosistema CUMBRE.</h2>
          <p className="hero-copy">
            CUMBRE conecta rutas de aprendizaje, tutor con IA, trabajo de aula,
            authoring docente y supervision administrativa sin separar la experiencia
            del producto en silos desconectados.
          </p>
          <div className="hero-actions">
            <Link className="button" href={primaryHref}>
              {primaryLabel}
            </Link>
            <a className="button button--ghost" href="#demo">
              Solicitar demo
            </a>
            <Link className="button button--ghost" href="/login">
              Comenzar
            </Link>
          </div>
        </div>

        <div className="hero-card__panel">
          <article className="insight-card insight-card--mint">
            <p className="eyebrow">Para estudiantes</p>
            <h3>Aprenden con una ruta clara, tutor contextual y progreso sin rankings toxicos.</h3>
          </article>
          <article className="insight-card insight-card--sun">
            <p className="eyebrow">Para docentes</p>
            <h3>Gestionan aulas, importan estudiantes, publican modulos y observan dificultades reales.</h3>
          </article>
          <article className="insight-card insight-card--sand">
            <p className="eyebrow">Para instituciones</p>
            <h3>Supervisan contenido, grafo de conocimiento, integridad operativa y adopcion de la plataforma.</h3>
          </article>
        </div>
      </section>

      <section className="section-grid" id="experiencias">
        <article className="feature-card">
          <p className="eyebrow">Estudiantes</p>
          <h3>Ruta adaptativa con continuidad.</h3>
          <p>
            Dashboard, lecciones, tutor con grounding, progreso explicable, clases asignadas y reuniones futuras.
          </p>
        </article>
        <article className="feature-card">
          <p className="eyebrow">Docentes</p>
          <h3>Flujo real de aula.</h3>
          <p>
            Creacion de aulas, importacion CSV, ingestion de materiales, generacion de modulos y seguimiento del grupo.
          </p>
        </article>
        <article className="feature-card">
          <p className="eyebrow">Administracion</p>
          <h3>Visibilidad estructural.</h3>
          <p>
            Gestion de temas, lecciones, conceptos, enlaces del grafo, integridad y cobertura de contenido.
          </p>
        </article>
      </section>

      <section className="story-section" id="como-funciona">
        <div>
          <p className="eyebrow">Como funciona</p>
          <h3>Aprendizaje adaptativo con tutor, aula y contenido estructurado.</h3>
        </div>
        <div className="story-grid">
          <article className="story-step">
            <strong>1. El docente prepara el aula</strong>
            <p>Crea el aula, importa estudiantes y publica modulos desde materiales o authoring directo.</p>
          </article>
          <article className="story-step">
            <strong>2. El estudiante entra con un solo login</strong>
            <p>Recibe acceso a clases, sesiones, tutor y recomendaciones segun avance y mastery.</p>
          </article>
          <article className="story-step">
            <strong>3. La IA mantiene grounding y explicabilidad</strong>
            <p>Retrieval, grafo de conocimiento y senales adaptativas enriquecen respuestas y siguientes pasos.</p>
          </article>
          <article className="story-step">
            <strong>4. La institucion observa y corrige</strong>
            <p>Administra grafo, contenido e integridad operativa sin romper la experiencia del aula.</p>
          </article>
        </div>
      </section>

      <section className="section-grid" id="instituciones">
        <article className="feature-card feature-card--wide">
          <p className="eyebrow">Valor del producto</p>
          <h3>Un producto unico, varias superficies especializadas.</h3>
          <p>
            El portal unifica la entrada y el branding, mientras que `web_student`,
            `web_teacher` y `web_admin` conservan sus flujos especializados y su
            arquitectura independiente.
          </p>
        </article>
        <article className="feature-card" id="demo">
          <p className="eyebrow">Demo</p>
          <h3>Solicita una demostracion guiada.</h3>
          <p>
            Podemos recorrer flujos de estudiante, aula, authoring, analytics y tutor en un mismo setup.
          </p>
          <a className="button" href="mailto:demo@cumbre.local?subject=Solicitud%20de%20demo%20CUMBRE">
            Solicitar demo
          </a>
        </article>
      </section>
    </main>
  );
}
