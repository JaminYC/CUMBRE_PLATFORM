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

/* ── Role data ── */
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
  Illustration: React.ComponentType;
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
    Illustration: IllustrationNino
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
    Illustration: IllustrationJoven
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
    Illustration: IllustrationAdulto
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
    Illustration: IllustrationDocente
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
          <role.Illustration />
        </div>
      </div>
    </section>
  );
}
