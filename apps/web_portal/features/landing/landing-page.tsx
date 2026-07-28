import Link from "next/link";
import type { Marca } from "@cumbre/brands";
import type { PortalRoleTarget } from "@/lib/role-targets";
import { LpRoleHero } from "./lp-role-hero";

/* ── Feature section icons ── */
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

/* ── Pillar icons ── */
function SlidersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ── Learning model icons ── */
function CompassIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

/* ── Flow step icons ── */
function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="14" y2="15" />
    </svg>
  );
}

function LogInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function EyeSmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ── AI section icon ── */
function CpuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

export function LandingPage({
  activeTarget,
  marca
}: {
  activeTarget: PortalRoleTarget | null;
  marca: Marca;
}) {
  return (
    <div className="lp">

      {/* ── NAVBAR ── */}
      <header className="lp-nav">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={marca.logo.principal} alt={marca.nombre} className="lp-logo" draggable={false} />
        <nav className="lp-nav__links">
          <a href="#que-es">Qué es</a>
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
          <p className="lp-stat__num">5</p>
          <p className="lp-stat__label">Etapas de aprendizaje</p>
        </div>
        <div className="lp-stats__div" />
        <div className="lp-stat">
          <p className="lp-stat__num">3</p>
          <p className="lp-stat__label">Perfiles especializados</p>
        </div>
        <div className="lp-stats__div" />
        <div className="lp-stat">
          <p className="lp-stat__num">1 acceso</p>
          <p className="lp-stat__label">Portal unificado de entrada</p>
        </div>
        <div className="lp-stats__div" />
        <div className="lp-stat">
          <p className="lp-stat__num">IA tutor</p>
          <p className="lp-stat__label">Contextual y adaptativa</p>
        </div>
      </div>

      {/* ── QUÉ ES CUMBRE ── */}
      <section className="lp-what" id="que-es">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--ink">Qué es CUMBRE</p>
          <h2>No es una academia tradicional.</h2>
          <p className="lp-section-hd__sub">
            CUMBRE es un ecosistema de aprendizaje adaptativo diseñado para construir
            comprensión real, no memorización mecánica.
          </p>
        </div>

        <div className="lp-what-acronym">
          <p className="lp-what-acronym__label">El nombre lo dice todo</p>
          <p className="lp-what-acronym__text">
            <strong>C</strong>entro&nbsp;
            <strong>U</strong>niversal de&nbsp;
            <strong>M</strong>entes&nbsp;
            <strong>B</strong>rillantes para el&nbsp;
            <strong>R</strong>azonamiento y la&nbsp;
            <strong>E</strong>ducación
          </p>
        </div>

        <div className="lp-pillars">
          {[
            {
              Icon: SlidersIcon,
              label: "Adaptativo",
              desc: "Se ajusta a tu nivel, tu ritmo y tu estilo de aprendizaje en tiempo real."
            },
            {
              Icon: LinkIcon,
              label: "Contextual",
              desc: "Todo está conectado: conceptos, lecciones, docentes y tu progreso personal."
            },
            {
              Icon: EyeIcon,
              label: "Explicable",
              desc: "Sabés exactamente qué aprendiste, qué te falta y por qué el sistema toma cada decisión."
            },
            {
              Icon: UsersIcon,
              label: "Humano + IA",
              desc: "El docente guía el camino. La inteligencia artificial lo amplifica."
            }
          ].map(({ Icon, label, desc }) => (
            <div className="lp-pillar" key={label}>
              <span className="lp-pillar__icon" aria-hidden="true"><Icon /></span>
              <strong className="lp-pillar__label">{label}</strong>
              <p className="lp-pillar__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="lp-features" id="experiencias">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--ink">Experiencias</p>
          <h2>Tres roles, una sola plataforma.</h2>
          <p className="lp-section-hd__sub">
            Cada espacio está diseñado para el flujo real de quien lo usa.
            Sin atajos, sin compromiso.
          </p>
        </div>
        <div className="lp-features-grid">
          <article className="lp-feat">
            <span className="lp-feat__icon lp-feat__icon--mint">
              <GraduationCapIcon />
            </span>
            <h3>Estudiante</h3>
            <p>
              Ruta adaptativa con continuidad entre sesiones, tutor IA contextual,
              progreso explicable y lecciones asignadas por tu docente.
              Aprendés a tu ritmo — sin dejar de avanzar.
            </p>
          </article>
          <article className="lp-feat">
            <span className="lp-feat__icon lp-feat__icon--sun">
              <BookOpenIcon />
            </span>
            <h3>Docente</h3>
            <p>
              Publicá módulos con contenido propio, asigná lecciones por aula y
              seguí el avance de cada estudiante en tiempo real. La IA tutoriza
              entre clases — vos te enfocás en enseñar.
            </p>
          </article>
          <article className="lp-feat">
            <span className="lp-feat__icon lp-feat__icon--sand">
              <ShieldIcon />
            </span>
            <h3>Institución</h3>
            <p>
              Gestioná el grafo de conocimiento, supervisá el contenido e
              integridad operativa. Visibilidad total de la adopción en toda
              la organización.
            </p>
          </article>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-how" id="como-funciona">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--ink">Cómo funciona</p>
          <h2>Del aula al aprendizaje adaptativo en 5 pasos.</h2>
          <p className="lp-section-hd__sub">
            Cada paso tiene un actor claro, una acción concreta y un resultado medible.
          </p>
        </div>
        <div className="lp-flow">
          {([
            {
              n: "01",
              actor: "Docente",
              actorKey: "docente",
              Icon: ClipboardIcon,
              t: "Prepara el aula",
              d: "Crea el aula, importa estudiantes, sube materiales y asigna lecciones desde un panel simple.",
              result: "Aula lista con contenido estructurado y estudiantes vinculados"
            },
            {
              n: "02",
              actor: "Estudiante",
              actorKey: "estudiante",
              Icon: LogInIcon,
              t: "Accede con un solo login",
              d: "Entra a sus rutas, tutor y progreso desde el portal unificado, desde cualquier dispositivo.",
              result: "Ruta personalizada activa desde el primer acceso"
            },
            {
              n: "03",
              actor: "IA",
              actorKey: "ia",
              Icon: BrainIcon,
              t: "Activa el contexto",
              d: "Retrieval semántico, grafo de conocimiento y señales adaptativas se activan en cada interacción.",
              result: "Respuestas contextuales y recomendaciones basadas en historial real"
            },
            {
              n: "04",
              actor: "Sistema",
              actorKey: "sistema",
              Icon: ZapIcon,
              t: "Adapta en tiempo real",
              d: "El sistema ajusta el siguiente paso según el dominio alcanzado, sin esperar al fin del módulo.",
              result: "Próxima lección calibrada al nivel real de cada estudiante"
            },
            {
              n: "05",
              actor: "Institución",
              actorKey: "institucion",
              Icon: EyeSmIcon,
              t: "Observa y mejora",
              d: "Visibilidad total de adopción, integridad de contenido y operación desde un panel unificado.",
              result: "Decisiones informadas con datos de todo el ecosistema"
            }
          ] as const).map((step, i, arr) => (
            <div className="lp-flow__item" key={step.n}>
              <div className="lp-flow-step">
                <div className="lp-flow-step__top">
                  <span className={`lp-flow-step__actor lp-flow-step__actor--${step.actorKey}`}>
                    {step.actor}
                  </span>
                  <span className="lp-flow-step__num">{step.n}</span>
                </div>
                <span className="lp-flow-step__icon" aria-hidden="true">
                  <step.Icon />
                </span>
                <h4 className="lp-flow-step__title">{step.t}</h4>
                <p className="lp-flow-step__desc">{step.d}</p>
                <div className="lp-flow-step__result">
                  <span className="lp-flow-step__result-dot" aria-hidden="true" />
                  <span>{step.result}</span>
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="lp-flow-arrow" aria-hidden="true">
                  <ArrowRightIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── LEARNING MODEL ── */}
      <section className="lp-model">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--ink">Modelo de aprendizaje</p>
          <h2>Cinco etapas, un ciclo continuo.</h2>
          <p className="lp-section-hd__sub">
            CUMBRE no elige una sola forma de enseñar. Combina las cinco en cada ruta
            y las repite — cada vuelta construye sobre la anterior.
          </p>
        </div>
        <div className="lp-cycle">
          {([
            {
              n: "01",
              Icon: CompassIcon,
              label: "Exploración",
              purpose: "Activar curiosidad",
              desc: "El estudiante navega conceptos libremente, sin un objetivo fijo. La IA observa qué le interesa y qué le cuesta.",
              colorKey: "explore"
            },
            {
              n: "02",
              Icon: BarChartIcon,
              label: "Progresión",
              purpose: "Construir dominio",
              desc: "Módulos organizados en secuencia creciente de complejidad. Cada paso valida el anterior antes de avanzar.",
              colorKey: "progress"
            },
            {
              n: "03",
              Icon: TargetIcon,
              label: "Práctica",
              purpose: "Fijar comprensión",
              desc: "Ejercicios calibrados exactamente al nivel actual del estudiante. Ni muy fácil, ni frustrante.",
              colorKey: "practice"
            },
            {
              n: "04",
              Icon: PuzzleIcon,
              label: "Resolución",
              purpose: "Aplicar conocimiento",
              desc: "Problemas que combinan conceptos de distintos módulos. Aquí el aprendizaje se vuelve real y transferible.",
              colorKey: "solve"
            },
            {
              n: "05",
              Icon: RefreshIcon,
              label: "Reflexión",
              purpose: "Consolidar y reiniciar",
              desc: "El estudiante entiende qué aprendió, cómo lo aprendió y qué viene después. La IA registra el cierre y prepara el próximo ciclo.",
              colorKey: "reflect"
            }
          ] as const).map((stage, i, arr) => (
            <div className="lp-cycle__item" key={stage.n}>
              <div className={`lp-cycle-card lp-cycle-card--${stage.colorKey}`}>
                <div className="lp-cycle-card__top">
                  <span className="lp-cycle-card__num">{stage.n}</span>
                  <span className="lp-cycle-card__icon" aria-hidden="true"><stage.Icon /></span>
                </div>
                <strong className="lp-cycle-card__label">{stage.label}</strong>
                <span className="lp-cycle-card__purpose">{stage.purpose}</span>
                <p className="lp-cycle-card__desc">{stage.desc}</p>
              </div>
              {i < arr.length - 1 ? (
                <div className="lp-cycle-arrow" aria-hidden="true">
                  <ArrowRightIcon />
                </div>
              ) : (
                <div className="lp-cycle-loop" aria-label="El ciclo se repite y profundiza">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 .49-3.1" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="lp-cycle__note">
          El ciclo no termina — cada repetición profundiza el dominio y amplía las conexiones.
        </p>
      </section>

      {/* ── LA DIFERENCIA ── */}
      <section className="lp-diff">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--light">La diferencia</p>
          <h2>No más aprender para olvidar.</h2>
        </div>
        <div className="lp-diff-grid">
          <div className="lp-diff-col lp-diff-col--no">
            <p className="lp-diff-col__heading">Lo que dejamos atrás</p>
            {[
              "Memorización mecánica sin comprensión",
              "Contenido uniforme para todos",
              "Progreso medido solo por notas",
              "Aprendizaje desconectado del contexto"
            ].map(item => (
              <div className="lp-diff-item" key={item}>
                <span className="lp-diff-x" aria-hidden="true">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="lp-diff-col lp-diff-col--yes">
            <p className="lp-diff-col__heading">Lo que construimos</p>
            {[
              "Comprensión profunda y duradera",
              "Ruta adaptada a cada persona",
              "Dominio medido y explicable",
              "Conocimiento conectado y aplicable"
            ].map(item => (
              <div className="lp-diff-item" key={item}>
                <span className="lp-diff-check" aria-hidden="true">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IA EN CUMBRE ── */}
      <section className="lp-ai">
        <div className="lp-ai__inner">
          <span className="lp-ai__icon" aria-hidden="true"><CpuIcon /></span>
          <p className="lp-eyebrow lp-eyebrow--light">Inteligencia Artificial</p>
          <h2>La IA que trabaja para vos, no en lugar tuyo.</h2>
          <p className="lp-ai__desc">
            CUMBRE integra IA en cada capa del aprendizaje: un tutor contextual que
            recuerda tu historial, retrieval semántico sobre el grafo de conocimiento,
            señales adaptativas que ajustan tu próxima lección y respuestas que
            siempre pueden explicar su razonamiento.
          </p>
          <p className="lp-ai__desc">
            No reemplaza al docente. Amplifica lo que el docente diseñó.
          </p>
        </div>
      </section>

      {/* ── VISIÓN ── */}
      <section className="lp-vision">
        <p className="lp-vision__mantra">
          "El conocimiento no es una etapa.<br />Es un proceso que dura toda la vida."
        </p>
        <p className="lp-vision__sub">
          CUMBRE existe para que ese proceso sea más justo, más claro y más humano
          — para cada estudiante, cada docente y cada institución que lo elige.
        </p>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="lp-cta lp-cta--final" id="instituciones">
        <div className="lp-section-hd">
          <p className="lp-eyebrow lp-eyebrow--light">Empezá hoy</p>
          <h2>Elegí tu lugar en CUMBRE.</h2>
        </div>
        <div className="lp-cta-cards">
          <article className="lp-cta-card">
            <span className="lp-cta-card__icon" aria-hidden="true"><GraduationCapIcon /></span>
            <h3>Soy estudiante</h3>
            <p>Accedé a rutas adaptativas, tutor IA y seguimiento de tu progreso real.</p>
            <Link className="button lp-btn-primary" href="/signup">
              Empieza a aprender
            </Link>
          </article>
          <article className="lp-cta-card lp-cta-card--featured">
            <span className="lp-cta-card__icon" aria-hidden="true"><BookOpenIcon /></span>
            <h3>Soy docente</h3>
            <p>Publicá módulos propios, asigná lecciones y seguí a cada estudiante. CUMBRE se encarga del acompañamiento continuo.</p>
            <Link className="button lp-btn-primary" href="/signup">
              Crear mi primera aula
            </Link>
          </article>
          <article className="lp-cta-card">
            <span className="lp-cta-card__icon" aria-hidden="true"><ShieldIcon /></span>
            <h3>Soy institución</h3>
            <p>Implementá CUMBRE en tu organización con visibilidad total y soporte dedicado.</p>
            <a
              className="button lp-btn-primary"
              href="mailto:demo@cumbre.teamvastoria.com?subject=Solicitud%20de%20demo%20CUMBRE"
            >
              Implementar en mi institución
            </a>
          </article>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={marca.logo.principal} alt={marca.nombre} className="lp-logo lp-logo--sm" draggable={false} />
        <p>© 2025 CUMBRE · Plataforma educativa adaptativa</p>
        <Link href="/login">Iniciar sesión</Link>
      </footer>

    </div>
  );
}
