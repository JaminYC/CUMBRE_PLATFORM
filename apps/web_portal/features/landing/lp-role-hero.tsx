"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";
import {
  IllustrationNino,
  IllustrationJoven,
  IllustrationAdulto,
  IllustrationDocente,
  IllustrationInstitucion
} from "./lp-illustrations";

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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <path d="M2 12h20" />
    </svg>
  );
}

function BookStackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="15" rx="1" />
      <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <path d="M2 7h20" />
      <path d="M6 7v14" />
      <path d="M18 7v14" />
      <path d="M6 12h4" />
      <path d="M14 12h4" />
      <path d="M6 16h4" />
      <path d="M14 16h4" />
    </svg>
  );
}

/* ── Role data ── */
interface RoleConfig {
  id: string;
  tab: string;
  Icon: React.ComponentType;
  eyebrow: string;
  headline: string;
  desc: string;
  checks: string[];
  cta: string;
  accentClass: string;
  Illustration: React.ComponentType;
}

const ROLES: RoleConfig[] = [
  {
    id: "nino",
    tab: "Niño",
    Icon: StarIcon,
    eyebrow: "Para estudiantes pequeños",
    headline: "Aprende jugando, avanza de verdad.",
    desc: "Una ruta de aprendizaje que se adapta a cómo aprendes tú — con logros, rachas y un tutor que nunca te juzga.",
    checks: ["Lecciones cortas y visuales", "Logros y rachas de estudio", "Tutor IA siempre disponible"],
    cta: "Entrar a mi espacio",
    accentClass: "lp-role--nino",
    Illustration: IllustrationNino
  },
  {
    id: "joven",
    tab: "Joven",
    Icon: RocketIcon,
    eyebrow: "Para estudiantes jóvenes",
    headline: "Domina lo que importa. A tu ritmo.",
    desc: "Rutas inteligentes, tutor con IA y progreso visible. Para quien quiere ir más lejos sin esperar al resto de la clase.",
    checks: ["Ruta adaptativa a tu nivel", "Tutor contextual con IA", "Progreso explicable y medible"],
    cta: "Comenzar mi ruta",
    accentClass: "lp-role--joven",
    Illustration: IllustrationJoven
  },
  {
    id: "adulto",
    tab: "Adulto",
    Icon: BriefcaseIcon,
    eyebrow: "Para profesionales en formación",
    headline: "Formación que se adapta a tu vida.",
    desc: "Contenido estructurado, ritmo adaptativo y seguimiento real. Sin perder el tiempo en lo que ya sabes.",
    checks: ["Avanza a tu propio ritmo", "Dominio medido y certificable", "Sesiones desde cualquier dispositivo"],
    cta: "Ver mi progreso",
    accentClass: "lp-role--adulto",
    Illustration: IllustrationAdulto
  },
  {
    id: "docente",
    tab: "Docente",
    Icon: BookStackIcon,
    eyebrow: "Para docentes",
    headline: "Diseñá el camino. La IA lo acompaña.",
    desc: "Creá aulas, publicá módulos propios y asigná lecciones por grupo. Mientras enseñás, CUMBRE mantiene a cada estudiante en su ruta — y te muestra exactamente quién necesita atención.",
    checks: ["Authoring de módulos y lecciones propias", "Seguimiento por estudiante en tiempo real", "La IA tutoriza entre clases — vos enseñás"],
    cta: "Crear mi primera aula",
    accentClass: "lp-role--docente",
    Illustration: IllustrationDocente
  },
  {
    id: "institucion",
    tab: "Institución",
    Icon: BuildingIcon,
    eyebrow: "Para instituciones educativas",
    headline: "Escala tu programa. Observa cada detalle.",
    desc: "Grafo de conocimiento, supervisión de contenido e integridad operativa. Un ecosistema unificado para toda la organización.",
    checks: ["Gestión del grafo de conocimiento", "Supervisión de contenido e integridad", "Visibilidad total de adopción"],
    cta: "Solicitar demo",
    accentClass: "lp-role--institucion",
    Illustration: IllustrationInstitucion
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
            <span className="lp-role-tab__icon" aria-hidden="true"><r.Icon /></span>
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
          <role.Illustration />
        </div>
      </div>
    </section>
  );
}
