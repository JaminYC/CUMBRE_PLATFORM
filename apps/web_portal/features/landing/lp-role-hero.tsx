"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";

/* ── Icons ── */
function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function GraduationCapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
function BookOpenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function TrendingUpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

/* ── Role data ── */
interface RoleVisual {
  card1: { type: string; content: React.ReactNode };
  card2: { type: string; content: React.ReactNode };
  card3: { type: string; content: React.ReactNode };
  card4?: { type: string; content: React.ReactNode };
}

interface RoleConfig {
  id: string;
  tab: string;
  emoji: string;
  eyebrow: string;
  headline: string;
  desc: string;
  checks: string[];
  cta: string;
  accentClass: string;
  visual: RoleVisual;
}

const ROLES: RoleConfig[] = [
  {
    id: "nino",
    tab: "Niño",
    emoji: "🌟",
    eyebrow: "Para estudiantes pequeños",
    headline: "Aprende jugando, avanza de verdad.",
    desc: "Una ruta de aprendizaje que se adapta a cómo aprendes tú — con logros, rachas y un tutor que nunca te juzga.",
    checks: ["Lecciones cortas y visuales", "Logros y rachas de estudio", "Tutor IA siempre disponible"],
    cta: "Entrar a mi espacio",
    accentClass: "lp-role--nino",
    visual: {
      card1: {
        type: "streak",
        content: (
          <article className="lp-card lp-card--session lp-float-1">
            <div className="lp-card__session-header">
              <span className="lp-live-dot lp-live-dot--sun" />
              <span className="lp-card__badge">¡Racha activa!</span>
              <span className="lp-card__time">🔥 5 días</span>
            </div>
            <p className="lp-card__topic">Matemáticas · Fracciones</p>
            <div className="lp-progress-wrap">
              <div className="lp-progress-bar">
                <div className="lp-progress-fill lp-progress-fill--sun" style={{ width: "72%" }} />
              </div>
              <span className="lp-progress-pct">72%</span>
            </div>
            <p className="lp-card__next">
              <span className="lp-card__next-label">Siguiente ›</span>
              División con residuo
            </p>
          </article>
        )
      },
      card2: {
        type: "xp",
        content: (
          <article className="lp-card lp-card--roles lp-float-2">
            <span className="lp-card__icon lp-card__icon--sun"><BoltIcon /></span>
            <div>
              <p className="lp-card__num">+120 XP</p>
              <p className="lp-card__label">Ganados hoy · Nivel 7</p>
            </div>
          </article>
        )
      },
      card3: {
        type: "achievement",
        content: (
          <article className="lp-card lp-card--rating lp-float-4">
            <div className="lp-stars">
              {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
            </div>
            <p className="lp-card__num" style={{ fontSize: "0.9rem" }}>¡Nuevo logro!</p>
            <p className="lp-card__label">Completaste 10 lecciones 🏆</p>
          </article>
        )
      },
      card4: {
        type: "mission",
        content: (
          <article className="lp-card lp-card--tutor lp-float-3">
            <div className="lp-tutor-header">
              <span className="lp-card__icon lp-card__icon--mint" style={{ width: "1.8rem", height: "1.8rem", borderRadius: "0.5rem" }}>
                <BrainIcon />
              </span>
              <span className="lp-tutor-name">Tutor IA</span>
              <span className="lp-live-dot" />
            </div>
            <div className="lp-tutor-bubble">
              ¡Muy bien! Ahora practica <strong>división con residuo</strong>. ¿Listo?
            </div>
            <div className="lp-tutor-typing"><span /><span /><span /></div>
          </article>
        )
      }
    }
  },
  {
    id: "joven",
    tab: "Joven",
    emoji: "🚀",
    eyebrow: "Para estudiantes jóvenes",
    headline: "Domina lo que importa. A tu ritmo.",
    desc: "Rutas inteligentes, tutor con IA y progreso visible. Para quien quiere ir más lejos sin esperar al resto de la clase.",
    checks: ["Ruta adaptativa a tu nivel", "Tutor contextual con IA", "Progreso explicable y medible"],
    cta: "Comenzar mi ruta",
    accentClass: "lp-role--joven",
    visual: {
      card1: {
        type: "session",
        content: (
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
        )
      },
      card2: {
        type: "roles",
        content: (
          <article className="lp-card lp-card--roles lp-float-2">
            <span className="lp-card__icon lp-card__icon--mint"><GraduationCapIcon /></span>
            <div>
              <p className="lp-card__num">3 roles</p>
              <p className="lp-card__label">Estudiante · Docente · Admin</p>
            </div>
          </article>
        )
      },
      card3: {
        type: "tutor",
        content: (
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
            <div className="lp-tutor-typing"><span /><span /><span /></div>
          </article>
        )
      },
      card4: {
        type: "rating",
        content: (
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
        )
      }
    }
  },
  {
    id: "adulto",
    tab: "Adulto",
    emoji: "💼",
    eyebrow: "Para profesionales en formación",
    headline: "Formación que se adapta a tu vida.",
    desc: "Contenido estructurado, ritmo adaptativo y seguimiento real. Sin perder el tiempo en lo que ya sabes.",
    checks: ["Avanza a tu propio ritmo", "Dominio medido y certificable", "Sesiones desde cualquier dispositivo"],
    cta: "Ver mi progreso",
    accentClass: "lp-role--adulto",
    visual: {
      card1: {
        type: "mastery",
        content: (
          <article className="lp-card lp-card--session lp-float-1">
            <div className="lp-card__session-header">
              <span className="lp-live-dot lp-live-dot--sun" />
              <span className="lp-card__badge">Dominio estimado</span>
              <span className="lp-card__time">↑ +4%</span>
            </div>
            <p className="lp-card__topic">Estadística aplicada</p>
            <div className="lp-progress-wrap">
              <div className="lp-progress-bar">
                <div className="lp-progress-fill lp-progress-fill--sun" style={{ width: "84%" }} />
              </div>
              <span className="lp-progress-pct">84%</span>
            </div>
            <p className="lp-card__next">
              <span className="lp-card__next-label">Siguiente ›</span>
              Regresión logística
            </p>
          </article>
        )
      },
      card2: {
        type: "cert",
        content: (
          <article className="lp-card lp-card--roles lp-float-2">
            <span className="lp-card__icon lp-card__icon--sand"><StarIcon /></span>
            <div>
              <p className="lp-card__num">Certificado</p>
              <p className="lp-card__label">En progreso · 2 módulos más</p>
            </div>
          </article>
        )
      },
      card3: {
        type: "schedule",
        content: (
          <article className="lp-card lp-card--tutor lp-float-3">
            <div className="lp-tutor-header">
              <span className="lp-card__icon lp-card__icon--sun" style={{ width: "1.8rem", height: "1.8rem", borderRadius: "0.5rem" }}>
                <BrainIcon />
              </span>
              <span className="lp-tutor-name">Tutor IA</span>
              <span className="lp-live-dot" />
            </div>
            <div className="lp-tutor-bubble">
              Basado en tu ritmo, te recomiendo <strong>30 min diarios</strong> para certificarte en 3 semanas.
            </div>
            <div className="lp-tutor-typing"><span /><span /><span /></div>
          </article>
        )
      },
      card4: {
        type: "streak-adult",
        content: (
          <article className="lp-card lp-card--rating lp-float-4">
            <div className="lp-stars">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#efc88d" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="lp-card__num" style={{ fontSize: "1rem" }}>21 días</p>
            <p className="lp-card__label">Racha activa · 40 h cursadas</p>
          </article>
        )
      }
    }
  },
  {
    id: "docente",
    tab: "Docente",
    emoji: "📚",
    eyebrow: "Para docentes",
    headline: "El aula que siempre quisiste gestionar.",
    desc: "Crea aulas, importa estudiantes, publica materiales y sigue el avance de cada uno desde un solo espacio.",
    checks: ["Authoring de módulos y materiales", "Seguimiento individual y grupal", "Asignación de lecciones por aula"],
    cta: "Gestionar mi aula",
    accentClass: "lp-role--docente",
    visual: {
      card1: {
        type: "classroom",
        content: (
          <article className="lp-card lp-card--session lp-float-1">
            <div className="lp-card__session-header">
              <span className="lp-live-dot" />
              <span className="lp-card__badge">Aula activa</span>
              <span className="lp-card__time">En vivo</span>
            </div>
            <p className="lp-card__topic">Pensamiento crítico · Sección B</p>
            <div className="lp-progress-wrap">
              <div className="lp-progress-bar">
                <div className="lp-progress-fill" style={{ width: "78%" }} />
              </div>
              <span className="lp-progress-pct">78%</span>
            </div>
            <p className="lp-card__next">
              <span className="lp-card__next-label">Grupo ›</span>
              24 estudiantes conectados
            </p>
          </article>
        )
      },
      card2: {
        type: "students",
        content: (
          <article className="lp-card lp-card--roles lp-float-2">
            <span className="lp-card__icon lp-card__icon--mint"><UsersIcon /></span>
            <div>
              <p className="lp-card__num">24 alumnos</p>
              <p className="lp-card__label">3 necesitan atención hoy</p>
            </div>
          </article>
        )
      },
      card3: {
        type: "authoring",
        content: (
          <article className="lp-card lp-card--tutor lp-float-3">
            <div className="lp-tutor-header">
              <span className="lp-card__icon lp-card__icon--mint" style={{ width: "1.8rem", height: "1.8rem", borderRadius: "0.5rem" }}>
                <BookOpenIcon />
              </span>
              <span className="lp-tutor-name">Módulos</span>
              <span className="lp-live-dot" />
            </div>
            <div className="lp-tutor-bubble">
              Tienes <strong>2 módulos en borrador</strong>. Publica para que tus alumnos puedan acceder.
            </div>
            <div className="lp-tutor-typing"><span /><span /><span /></div>
          </article>
        )
      },
      card4: {
        type: "engagement",
        content: (
          <article className="lp-card lp-card--rating lp-float-4">
            <div className="lp-stars">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#ccece2" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="lp-card__num" style={{ fontSize: "1rem" }}>78% promedio</p>
            <p className="lp-card__label">Progreso grupal esta semana</p>
          </article>
        )
      }
    }
  },
  {
    id: "institucion",
    tab: "Institución",
    emoji: "🏛️",
    eyebrow: "Para instituciones educativas",
    headline: "Escala tu programa. Observa cada detalle.",
    desc: "Grafo de conocimiento, supervisión de contenido e integridad operativa. Un ecosistema unificado para toda la organización.",
    checks: ["Gestión del grafo de conocimiento", "Supervisión de contenido e integridad", "Visibilidad total de adopción"],
    cta: "Solicitar demo",
    accentClass: "lp-role--institucion",
    visual: {
      card1: {
        type: "overview",
        content: (
          <article className="lp-card lp-card--session lp-float-1">
            <div className="lp-card__session-header">
              <span className="lp-live-dot" />
              <span className="lp-card__badge">Plataforma activa</span>
              <span className="lp-card__time">↑ +18%</span>
            </div>
            <p className="lp-card__topic">Adopción este mes</p>
            <div className="lp-progress-wrap">
              <div className="lp-progress-bar">
                <div className="lp-progress-fill" style={{ width: "91%" }} />
              </div>
              <span className="lp-progress-pct">91%</span>
            </div>
            <p className="lp-card__next">
              <span className="lp-card__next-label">Total ›</span>
              1,240 usuarios activos
            </p>
          </article>
        )
      },
      card2: {
        type: "graph",
        content: (
          <article className="lp-card lp-card--roles lp-float-2">
            <span className="lp-card__icon lp-card__icon--mint"><ShieldIcon /></span>
            <div>
              <p className="lp-card__num">183 nodos</p>
              <p className="lp-card__label">Grafo de conocimiento activo</p>
            </div>
          </article>
        )
      },
      card3: {
        type: "analytics",
        content: (
          <article className="lp-card lp-card--tutor lp-float-3">
            <div className="lp-tutor-header">
              <span className="lp-card__icon lp-card__icon--sun" style={{ width: "1.8rem", height: "1.8rem", borderRadius: "0.5rem" }}>
                <TrendingUpIcon />
              </span>
              <span className="lp-tutor-name">Analytics</span>
              <span className="lp-live-dot lp-live-dot--sun" />
            </div>
            <div className="lp-tutor-bubble">
              <strong>3 aulas</strong> superaron el 80% de avance grupal. Integridad: óptima.
            </div>
            <div className="lp-tutor-typing"><span /><span /><span /></div>
          </article>
        )
      },
      card4: {
        type: "users",
        content: (
          <article className="lp-card lp-card--rating lp-float-4">
            <div className="lp-stars">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#efc88d" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="lp-card__num" style={{ fontSize: "1rem" }}>4.9 <span className="lp-card__label">/ 312 reseñas</span></p>
            <p className="lp-card__label">Instituciones confían en CUMBRE</p>
          </article>
        )
      }
    }
  }
];

/* ── Mouse parallax hook ── */
function useMouseParallax(ref: React.RefObject<HTMLElement | null>) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [ref]);

  return offset;
}

/* ── Main component ── */
export function LpRoleHero({ activeTarget }: { activeTarget: PortalRoleTarget | null }) {
  const [activeIndex, setActiveIndex] = useState(1); // default: Joven
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(1);
  const visualRef = useRef<HTMLDivElement>(null);
  const parallax = useMouseParallax(visualRef);

  const role = ROLES[displayIndex];

  function switchRole(index: number) {
    if (index === activeIndex || isTransitioning) return;
    setActiveIndex(index);
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayIndex(index);
      setIsTransitioning(false);
    }, 260);
  }

  const primaryHref = activeTarget ? activeTarget.dashboardUrl : "/login";
  const ctaLabel = activeTarget ? "Ir a mi espacio" : role.cta;

  return (
    <section className={`lp-hero ${role.accentClass}`}>
      {/* Role switcher tabs */}
      <div className="lp-role-tabs" role="tablist" aria-label="Selecciona tu perfil">
        {ROLES.map((r, i) => (
          <button
            key={r.id}
            role="tab"
            aria-selected={activeIndex === i}
            className={`lp-role-tab ${activeIndex === i ? "lp-role-tab--active" : ""}`}
            onClick={() => switchRole(i)}
            type="button"
          >
            <span className="lp-role-tab__emoji" aria-hidden="true">{r.emoji}</span>
            {r.tab}
          </button>
        ))}
      </div>

      <div className={`lp-hero__left ${isTransitioning ? "lp-hero__left--out" : ""}`}>
        <p className="lp-eyebrow">{role.eyebrow}</p>
        <h1 className="lp-hero__headline">{role.headline}</h1>
        <p className="lp-hero__desc">{role.desc}</p>
        <div className="lp-hero__actions">
          <Link className="button lp-btn-primary" href={primaryHref}>
            {ctaLabel}
          </Link>
          <a className="button lp-btn-ghost-dark" href="#demo">
            Solicitar demo
          </a>
        </div>
        <ul className="lp-checklist">
          {role.checks.map(item => (
            <li key={item} className="lp-checklist__item">
              <span className="lp-check" aria-hidden="true"><CheckIcon /></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={visualRef}
        className={`lp-hero__right ${isTransitioning ? "lp-hero__right--out" : ""}`}
        aria-hidden="true"
      >
        <div
          className="lp-visual"
          style={{
            transform: `translate(${parallax.x * -14}px, ${parallax.y * -10}px)`
          }}
        >
          <div className="lp-visual__blob" />
          <div className="lp-visual__blob lp-visual__blob--2" />
          {role.visual.card1.content}
          {role.visual.card2.content}
          {role.visual.card3.content}
          {role.visual.card4?.content}
        </div>
      </div>
    </section>
  );
}
