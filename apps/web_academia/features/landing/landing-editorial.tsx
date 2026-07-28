import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";
import { LogoBryce } from "@/components/logo-bryce";
import { Reveal } from "./reveal";

/*
 * Variante editorial de la landing.
 * Toma de la referencia "Area": titular serif, fondo claro, mucho aire,
 * botones capsula y numeros grandes como estructura de seccion.
 * Conserva la paleta Bryce: el azul y el naranja siguen siendo los de la marca.
 */

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

const pasos = [
  {
    n: "01",
    titulo: "Recibe tu correo",
    texto: "La academia te entrega un correo institucional al matricularte."
  },
  {
    n: "02",
    titulo: "Entra una sola vez",
    texto: "El sistema reconoce tu perfil y te lleva a tu espacio, sin elegir nada."
  },
  {
    n: "03",
    titulo: "Sigue tu ruta",
    texto: "Ves qué tema toca, cómo vas y a quién preguntarle cuando te trabas."
  }
];

export function LandingEditorial({
  activeTarget
}: {
  activeTarget: PortalRoleTarget | null;
}) {
  return (
    <div className="ble">
      {/* ── Navegación ── */}
      <header className="ble-nav">
        <div className="ble-inner ble-nav__inner">
          <Link href="/v2" className="ble-nav__brand" aria-label="Academia Bryce">
            <LogoBryce />
          </Link>

          <nav className="ble-nav__links">
            <a href="#perfiles">Para quién</a>
            <a href="#como">Cómo funciona</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <Link className="ble-btn ble-btn--sm" href="/login">
            {activeTarget ? "Continuar" : "Iniciar sesión"}
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="ble-hero">
        <div className="ble-inner">
          <h1 className="ble-hero__title">La academia, abierta todo el día.</h1>
          <p className="ble-hero__lede">
            El campus virtual de la Academia Preuniversitaria Bryce. Un solo
            acceso para estudiantes, docentes y administración.
          </p>

          <div className="ble-hero__cta">
            {activeTarget ? (
              <a className="ble-btn" href={activeTarget.dashboardUrl}>
                Continuar a {activeTarget.label.toLowerCase()}
              </a>
            ) : (
              <Link className="ble-btn" href="/login">
                Entrar al campus
              </Link>
            )}
            <a className="ble-btn ble-btn--ghost" href="#perfiles">
              Ver qué incluye
            </a>
          </div>
        </div>

        <div className="ble-hero__stage">
          <div className="ble-hero__plate" aria-hidden="true" />
          {/* Vectorial y en línea: escala sin pixelarse, y sus 15 piezas
              entran escalonadas al cargar la página. */}
          <LogoBryce className="ble-hero__shot" animado />
        </div>
      </section>

      {/* ── Perfiles ── */}
      <section className="ble-section" id="perfiles">
        <div className="ble-inner">
          <Reveal>
            <p className="ble-eyebrow">Para quién</p>
            <h2 className="ble-h2">Tres formas de entrar. Una sola puerta.</h2>
            <p className="ble-sub">
              No hay que elegir el perfil al ingresar: el sistema reconoce quién
              eres y te lleva a tu espacio.
            </p>
          </Reveal>

          <div className="ble-perfiles">
            {perfiles.map((p, i) => (
              /* Escalonado corto: 70 ms basta para que se lea en cascada
                 sin que la ultima tarjeta se haga esperar. */
              <Reveal key={p.rol} delay={i * 70}>
                <article className="ble-perfil">
                  <p className="ble-perfil__rol">{p.rol}</p>
                  <h3 className="ble-perfil__titulo">{p.titulo}</h3>
                  <ul>
                    {p.puntos.map((punto) => (
                      <li key={punto}>{punto}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="ble-section ble-section--alt" id="como">
        <div className="ble-inner">
          <Reveal>
            <p className="ble-eyebrow">Cómo funciona</p>
            <h2 className="ble-h2">Empezar toma un minuto.</h2>
          </Reveal>

          <div className="ble-pasos">
            {pasos.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <article className="ble-paso">
                  <p className="ble-paso__n">{p.n}</p>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="ble-cierre">
        <div className="ble-inner">
          <Reveal>
            <h2>¿Listo para entrar?</h2>
            <p>Usa el correo que te dio la academia.</p>
            <Link className="ble-btn ble-btn--light" href="/login">
              Iniciar sesión
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer className="ble-foot" id="contacto">
        <div className="ble-inner">
          <div className="ble-foot__grid">
            <div>
              <LogoBryce className="ble-foot__logo" />
              <p className="ble-foot__tag">Academia Preuniversitaria</p>
            </div>

            <div>
              <p className="ble-foot__hd">Sede</p>
              <p>Santa Marta 209</p>
              <p>Frente a la comisaría</p>
              <p>Cercado — Arequipa</p>
            </div>

            <div>
              <p className="ble-foot__hd">Contacto</p>
              <p>940 161 725</p>
              <p>054 263701</p>
              <p>academia@bryce.edu.pe</p>
            </div>

            <div>
              <p className="ble-foot__hd">Atención</p>
              <p>Lunes a sábado</p>
              <p>7:00 a. m. — 8:00 p. m.</p>
            </div>
          </div>

          <p className="ble-foot__legal">
            Grupo Bryce · Academia Preuniversitaria · Arequipa, Perú
          </p>
        </div>
      </footer>
    </div>
  );
}
