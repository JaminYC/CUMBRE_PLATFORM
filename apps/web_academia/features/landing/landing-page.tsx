import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";

/* ── Iconos ── */

function IconRuta() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="5" r="3" />
      <path d="M9 19h6a3 3 0 0 0 3-3V8" />
    </svg>
  );
}

function IconProgreso() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </svg>
  );
}

function IconAula() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconReportes() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

const perfiles = [
  {
    rol: "Estudiantes",
    titulo: "Tu ruta, siempre a la mano",
    puntos: [
      "Revisa tu ruta de estudio y qué toca ahora",
      "Consulta tus avances y tu nivel por tema",
      "Entra al aula y resuelve tus dudas"
    ]
  },
  {
    rol: "Docentes",
    titulo: "El aula, sin papeleo",
    puntos: [
      "Gestiona tus cursos y a tus estudiantes",
      "Registra notas y devuelve retroalimentación",
      "Ve quién avanza y quién necesita apoyo"
    ]
  },
  {
    rol: "Administración",
    titulo: "La academia, en una vista",
    puntos: [
      "Administra usuarios, cursos y matrículas",
      "Consulta reportes académicos al día",
      "Revisa la actividad de la plataforma"
    ]
  }
];

const capacidades = [
  {
    Icono: IconRuta,
    titulo: "Ruta de estudio",
    texto:
      "Cada estudiante ve qué tema sigue y por qué, sin perderse entre materiales sueltos."
  },
  {
    Icono: IconProgreso,
    titulo: "Avance visible",
    texto:
      "El progreso por tema deja de ser una intuición y pasa a ser un dato que docente y alumno comparten."
  },
  {
    Icono: IconAula,
    titulo: "Aula conectada",
    texto:
      "Docentes y estudiantes se comunican dentro del curso, no en un chat aparte que nadie revisa."
  },
  {
    Icono: IconReportes,
    titulo: "Reportes para dirección",
    texto:
      "Matrículas, rendimiento y actividad en un solo lugar, sin pedir consolidados a mano."
  }
];

export function LandingPage({
  activeTarget
}: {
  activeTarget: PortalRoleTarget | null;
}) {
  return (
    <div className="bl">
      {/* ── Navegación ── */}
      <header className="bl-nav">
        <div className="bl-inner bl-nav__inner">
          <Link href="/" className="bl-nav__brand" aria-label="Academia Bryce">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-bryce-grupo.png" alt="Academia Bryce" draggable={false} />
          </Link>

          <nav className="bl-nav__links">
            <a href="#perfiles">Para quién</a>
            <a href="#campus">Qué incluye</a>
            <a href="#contacto">Contacto</a>
          </nav>

          {activeTarget ? (
            <a className="bl-btn bl-btn--sm" href={activeTarget.dashboardUrl}>
              Continuar
            </a>
          ) : (
            <Link className="bl-btn bl-btn--sm" href="/login">
              Iniciar sesión
            </Link>
          )}
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bl-hero">
        <div className="bl-inner bl-hero__inner">
        <div className="bl-hero__text">
          <p className="bl-eyebrow">Campus virtual</p>
          <h1 className="bl-hero__title">
            La academia, <em>abierta</em> todo el día.
          </h1>
          <p className="bl-hero__lede">
            El espacio en línea de la Academia Preuniversitaria Bryce. Un solo
            acceso para estudiantes, docentes y administración: cada quien entra
            y encuentra lo suyo.
          </p>

          <div className="bl-hero__cta">
            {activeTarget ? (
              <a className="bl-btn" href={activeTarget.dashboardUrl}>
                Continuar a {activeTarget.label.toLowerCase()}
              </a>
            ) : (
              <Link className="bl-btn" href="/login">
                Entrar al campus
              </Link>
            )}
            <a className="bl-btn bl-btn--ghost" href="#perfiles">
              Ver qué incluye
            </a>
          </div>

          <ul className="bl-chips">
            <li>Estudiantes</li>
            <li>Docentes</li>
            <li>Administración</li>
          </ul>
        </div>

        <div className="bl-hero__mark" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-academia-square.jpg" alt="" draggable={false} />
        </div>
        </div>
      </section>

      {/* ── Perfiles ── */}
      <section className="bl-section" id="perfiles">
        <div className="bl-section__hd">
          <p className="bl-eyebrow bl-eyebrow--ink">Para quién</p>
          <h2>Tres formas de entrar. Una sola puerta.</h2>
          <p className="bl-section__sub">
            No hay que elegir el perfil al ingresar: el sistema reconoce quién
            eres y te lleva a tu espacio.
          </p>
        </div>

        <div className="bl-perfiles">
          {perfiles.map((p) => (
            <article className="bl-perfil" key={p.rol}>
              <p className="bl-perfil__rol">{p.rol}</p>
              <h3 className="bl-perfil__titulo">{p.titulo}</h3>
              <ul className="bl-perfil__lista">
                {p.puntos.map((punto) => (
                  <li key={punto}>{punto}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── Capacidades ── */}
      <section className="bl-section bl-section--alt" id="campus">
        <div className="bl-section__hd">
          <p className="bl-eyebrow bl-eyebrow--ink">Qué incluye</p>
          <h2>Lo que resuelve el campus</h2>
        </div>

        <div className="bl-cards">
          {capacidades.map(({ Icono, titulo, texto }) => (
            <article className="bl-card" key={titulo}>
              <span className="bl-card__icon" aria-hidden="true">
                <Icono />
              </span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="bl-cierre">
        <h2>¿Listo para entrar?</h2>
        <p>Usa el correo que te dio la academia.</p>
        <Link className="bl-btn bl-btn--light" href="/login">
          Iniciar sesión
        </Link>
      </section>

      {/* ── Pie ── */}
      <footer className="bl-foot" id="contacto">
        <div className="bl-foot__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-bryce-grupo.png"
              alt="Academia Bryce"
              className="bl-foot__logo"
              draggable={false}
            />
            <p className="bl-foot__tag">Academia Preuniversitaria</p>
          </div>

          <div>
            <p className="bl-foot__hd">Sede</p>
            <p>Santa Marta 209</p>
            <p>Frente a la comisaría</p>
            <p>Cercado — Arequipa</p>
          </div>

          <div>
            <p className="bl-foot__hd">Contacto</p>
            <p>940 161 725</p>
            <p>054 263701</p>
            <p>academia@bryce.edu.pe</p>
          </div>

          <div>
            <p className="bl-foot__hd">Atención</p>
            <p>Lunes a sábado</p>
            <p>7:00 a. m. — 8:00 p. m.</p>
          </div>
        </div>

        <p className="bl-foot__legal">
          Grupo Bryce · Academia Preuniversitaria · Arequipa, Perú
        </p>
      </footer>
    </div>
  );
}
