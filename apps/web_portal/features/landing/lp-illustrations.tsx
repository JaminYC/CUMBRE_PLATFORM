/* ─────────────────────────────────────────────────────────────
   CUMBRE – Landing illustrations (inline SVG)
   Minimal geometric style · 400 × 340 viewBox each
   ───────────────────────────────────────────────────────────── */

/** ── NIÑO: planet + telescope, discovery ─────────────────── */
export function IllustrationNino() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      {/* Ambient glow */}
      <circle cx="260" cy="130" r="110" fill="rgba(20,122,113,0.08)"/>
      {/* Planet */}
      <circle cx="262" cy="128" r="68" fill="rgba(20,122,113,0.14)" stroke="#147a71" strokeWidth="1.5"/>
      {/* Orbit ring */}
      <ellipse cx="262" cy="128" rx="98" ry="20" fill="none" stroke="#efc88d" strokeWidth="2" opacity="0.55"/>
      {/* Small moon on ring */}
      <circle cx="352" cy="116" r="9" fill="rgba(239,200,141,0.35)" stroke="#efc88d" strokeWidth="1.5"/>
      {/* Telescope body */}
      <g transform="translate(100,230) rotate(-38)">
        <rect x="-5" y="-58" width="10" height="58" rx="5" fill="#147a71"/>
        <rect x="-9" y="-70" width="18" height="16" rx="4" fill="#0d5c56"/>
        <circle cx="0" cy="-70" r="7" fill="rgba(204,236,226,0.25)" stroke="#ccece2" strokeWidth="1.5"/>
      </g>
      {/* Telescope stand */}
      <line x1="100" y1="230" x2="100" y2="284" stroke="#2a3f4a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="78"  y1="284" x2="122" y2="284" stroke="#2a3f4a" strokeWidth="4" strokeLinecap="round"/>
      {/* Star field */}
      <circle cx="46"  cy="44"  r="1.8" fill="rgba(255,255,255,0.45)"/>
      <circle cx="138" cy="24"  r="1.4" fill="rgba(255,255,255,0.35)"/>
      <circle cx="348" cy="44"  r="1.8" fill="rgba(255,255,255,0.45)"/>
      <circle cx="370" cy="198" r="1.4" fill="rgba(255,255,255,0.3)"/>
      <circle cx="36"  cy="168" r="1.4" fill="rgba(255,255,255,0.35)"/>
      <circle cx="182" cy="18"  r="1.8" fill="rgba(255,255,255,0.35)"/>
      {/* Gold sparkle */}
      <line x1="44" y1="86" x2="44" y2="100" stroke="#efc88d" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
      <line x1="37" y1="93" x2="51" y2="93" stroke="#efc88d" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
      {/* Label chip */}
      <rect x="148" y="296" width="104" height="26" rx="13" fill="rgba(20,122,113,0.18)" stroke="rgba(20,122,113,0.4)" strokeWidth="1"/>
      <text x="200" y="313" fontSize="10" fill="rgba(204,236,226,0.65)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="0.8">Explora · Descubre</text>
    </svg>
  );
}

/** ── JOVEN: laptop + headphones, digital learning ─────────── */
export function IllustrationJoven() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      {/* Ambient glow */}
      <circle cx="200" cy="160" r="125" fill="rgba(20,122,113,0.07)"/>
      {/* Laptop base */}
      <rect x="88" y="230" width="224" height="16" rx="8" fill="#2a3f4a"/>
      {/* Laptop screen shell */}
      <rect x="108" y="88" width="184" height="144" rx="12" fill="#1a2f3a" stroke="#2a3f4a" strokeWidth="2"/>
      {/* Screen bezel */}
      <rect x="118" y="98" width="164" height="124" rx="8" fill="#0d1e26"/>
      {/* Code lines on screen */}
      <rect x="132" y="114" width="72"  height="5" rx="2.5" fill="#147a71" opacity="0.9"/>
      <rect x="132" y="126" width="52"  height="5" rx="2.5" fill="rgba(239,200,141,0.7)"/>
      <rect x="144" y="138" width="88"  height="5" rx="2.5" fill="rgba(204,236,226,0.45)"/>
      <rect x="132" y="150" width="62"  height="5" rx="2.5" fill="rgba(239,200,141,0.6)"/>
      <rect x="144" y="162" width="96"  height="5" rx="2.5" fill="rgba(204,236,226,0.4)"/>
      <rect x="132" y="174" width="46"  height="5" rx="2.5" fill="#147a71" opacity="0.7"/>
      {/* Cursor blink */}
      <rect x="182" y="174" width="2" height="10" rx="1" fill="rgba(255,255,255,0.7)"/>
      {/* Headphones arc */}
      <path d="M158 90 Q200 56 242 90" fill="none" stroke="#147a71" strokeWidth="6" strokeLinecap="round"/>
      <rect x="150" y="88" width="14" height="20" rx="7" fill="#0d5c56"/>
      <rect x="236" y="88" width="14" height="20" rx="7" fill="#0d5c56"/>
      {/* Progress badge */}
      <rect x="296" y="118" width="76" height="44" rx="10" fill="rgba(13,92,86,0.35)" stroke="rgba(20,122,113,0.5)" strokeWidth="1"/>
      <text x="334" y="136" fontSize="9"  fill="rgba(204,236,226,0.55)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="0.5">Progreso</text>
      <text x="334" y="153" fontSize="15" fill="#efc88d" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="600">68%</text>
      {/* Star field */}
      <circle cx="48"  cy="68"  r="1.8" fill="rgba(255,255,255,0.4)"/>
      <circle cx="362" cy="52"  r="1.4" fill="rgba(255,255,255,0.35)"/>
      <circle cx="378" cy="200" r="1.8" fill="rgba(255,255,255,0.3)"/>
      <circle cx="28"  cy="202" r="1.4" fill="rgba(255,255,255,0.35)"/>
    </svg>
  );
}

/** ── ADULTO: bar chart + trend line, analytics ───────────── */
export function IllustrationAdulto() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      {/* Ambient glow */}
      <circle cx="200" cy="170" r="120" fill="rgba(239,200,141,0.05)"/>
      {/* Chart card */}
      <rect x="68" y="78" width="264" height="188" rx="16" fill="rgba(26,47,58,0.55)" stroke="rgba(61,85,96,0.5)" strokeWidth="1.5"/>
      {/* Baseline */}
      <line x1="88" y1="228" x2="312" y2="228" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
      {/* Bars */}
      <rect x="100" y="188" width="28" height="40" rx="5" fill="rgba(20,122,113,0.45)"/>
      <rect x="148" y="164" width="28" height="64" rx="5" fill="rgba(20,122,113,0.55)"/>
      <rect x="196" y="140" width="28" height="88" rx="5" fill="#147a71"/>
      <rect x="244" y="154" width="28" height="74" rx="5" fill="rgba(20,122,113,0.6)"/>
      <rect x="292" y="126" width="28" height="102" rx="5" fill="#0d5c56"/>
      {/* Trend line */}
      <polyline points="114,190 162,167 210,146 258,157 306,130" fill="none" stroke="#efc88d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Trend dots */}
      <circle cx="114" cy="190" r="4" fill="#efc88d"/>
      <circle cx="210" cy="146" r="4" fill="#efc88d"/>
      <circle cx="306" cy="130" r="4" fill="#efc88d"/>
      {/* Chart label */}
      <text x="200" y="106" fontSize="10" fill="rgba(204,236,226,0.45)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="1.2">ESTADÍSTICA APLICADA</text>
      {/* KPI chip */}
      <rect x="128" y="280" width="144" height="32" rx="16" fill="rgba(20,122,113,0.18)" stroke="rgba(20,122,113,0.4)" strokeWidth="1"/>
      <text x="200" y="301" fontSize="12" fill="#efc88d" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="600">↑ Dominio 84%</text>
      {/* Star field */}
      <circle cx="48"  cy="98"  r="1.8" fill="rgba(255,255,255,0.35)"/>
      <circle cx="362" cy="78"  r="1.4" fill="rgba(255,255,255,0.3)"/>
      <circle cx="368" cy="252" r="1.8" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

/** ── DOCENTE: knowledge graph nodes ─────────────────────── */
export function IllustrationDocente() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      {/* Ambient glow */}
      <circle cx="200" cy="168" r="118" fill="rgba(20,122,113,0.07)"/>
      {/* Connection lines */}
      <line x1="144" y1="202" x2="200" y2="106" stroke="rgba(204,236,226,0.22)" strokeWidth="2"/>
      <line x1="256" y1="202" x2="200" y2="106" stroke="rgba(204,236,226,0.22)" strokeWidth="2"/>
      <line x1="144" y1="202" x2="256" y2="202" stroke="rgba(239,200,141,0.28)" strokeWidth="2"/>
      <line x1="144" y1="202" x2="200" y2="262" stroke="rgba(204,236,226,0.15)" strokeWidth="1.5" strokeDasharray="5,5"/>
      <line x1="256" y1="202" x2="200" y2="262" stroke="rgba(204,236,226,0.15)" strokeWidth="1.5" strokeDasharray="5,5"/>
      {/* Satellite connectors */}
      <line x1="90"  y1="140" x2="132" y2="164" stroke="rgba(204,236,226,0.18)" strokeWidth="1.5"/>
      <line x1="310" y1="140" x2="268" y2="164" stroke="rgba(204,236,226,0.18)" strokeWidth="1.5"/>
      <line x1="200" y1="276" x2="200" y2="236" stroke="rgba(204,236,226,0.15)" strokeWidth="1.5"/>
      {/* Main nodes */}
      <circle cx="200" cy="106" r="30" fill="rgba(20,122,113,0.18)" stroke="#147a71" strokeWidth="2"/>
      <text x="200" y="112" fontSize="13" fill="#ccece2" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="600">A</text>
      <circle cx="144" cy="202" r="26" fill="rgba(239,200,141,0.12)" stroke="#efc88d" strokeWidth="2"/>
      <text x="144" y="208" fontSize="13" fill="#efc88d" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="600">B</text>
      <circle cx="256" cy="202" r="26" fill="rgba(20,122,113,0.14)" stroke="#147a71" strokeWidth="2"/>
      <text x="256" y="208" fontSize="13" fill="#ccece2" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="600">C</text>
      {/* Satellite nodes */}
      <circle cx="90"  cy="136" r="13" fill="rgba(204,236,226,0.07)" stroke="rgba(204,236,226,0.28)" strokeWidth="1.5"/>
      <circle cx="310" cy="136" r="13" fill="rgba(204,236,226,0.07)" stroke="rgba(204,236,226,0.28)" strokeWidth="1.5"/>
      <circle cx="200" cy="278" r="13" fill="rgba(239,200,141,0.07)" stroke="rgba(239,200,141,0.28)" strokeWidth="1.5"/>
      {/* Label */}
      <text x="200" y="320" fontSize="10" fill="rgba(204,236,226,0.38)" fontFamily="system-ui,sans-serif" textAnchor="middle" letterSpacing="1.2">GRAFO DE CONOCIMIENTO</text>
      {/* Star field */}
      <circle cx="38"  cy="58"  r="1.8" fill="rgba(255,255,255,0.4)"/>
      <circle cx="368" cy="54"  r="1.4" fill="rgba(255,255,255,0.35)"/>
      <circle cx="354" cy="282" r="1.8" fill="rgba(255,255,255,0.3)"/>
      <circle cx="44"  cy="282" r="1.4" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

/** ── INSTITUCIÓN: building + data cards ─────────────────── */
export function IllustrationInstitucion() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      {/* Ambient glow */}
      <circle cx="200" cy="200" r="120" fill="rgba(20,122,113,0.07)"/>
      {/* Building body */}
      <rect x="118" y="142" width="164" height="158" rx="4" fill="#1a2f3a" stroke="rgba(204,236,226,0.13)" strokeWidth="1.5"/>
      {/* Pediment */}
      <polygon points="98,144 200,86 302,144" fill="#152534" stroke="rgba(204,236,226,0.13)" strokeWidth="1.5"/>
      {/* Windows */}
      <rect x="136" y="162" width="28" height="22" rx="4" fill="rgba(239,200,141,0.32)"/>
      <rect x="186" y="162" width="28" height="22" rx="4" fill="rgba(204,236,226,0.18)"/>
      <rect x="236" y="162" width="28" height="22" rx="4" fill="rgba(239,200,141,0.28)"/>
      <rect x="136" y="202" width="28" height="22" rx="4" fill="rgba(204,236,226,0.16)"/>
      <rect x="186" y="202" width="28" height="22" rx="4" fill="rgba(239,200,141,0.22)"/>
      <rect x="236" y="202" width="28" height="22" rx="4" fill="rgba(204,236,226,0.18)"/>
      {/* Door */}
      <rect x="184" y="246" width="32" height="54" rx="4" fill="rgba(20,122,113,0.45)" stroke="rgba(20,122,113,0.65)" strokeWidth="1"/>
      {/* CUMBRE label in pediment */}
      <text x="200" y="122" fontSize="10" fill="rgba(204,236,226,0.4)" fontFamily="Georgia,serif" textAnchor="middle" letterSpacing="3">CUMBRE</text>
      {/* Data card — left */}
      <rect x="18" y="132" width="86" height="54" rx="10" fill="rgba(13,31,46,0.8)" stroke="rgba(20,122,113,0.5)" strokeWidth="1.5"/>
      <text x="61" y="150" fontSize="9"  fill="rgba(204,236,226,0.5)" fontFamily="system-ui,sans-serif" textAnchor="middle">Usuarios</text>
      <text x="61" y="170" fontSize="17" fill="#efc88d" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="700">1,240</text>
      {/* Data card — right */}
      <rect x="296" y="132" width="86" height="54" rx="10" fill="rgba(13,31,46,0.8)" stroke="rgba(20,122,113,0.5)" strokeWidth="1.5"/>
      <text x="339" y="150" fontSize="9"  fill="rgba(204,236,226,0.5)" fontFamily="system-ui,sans-serif" textAnchor="middle">Adopción</text>
      <text x="339" y="170" fontSize="17" fill="#147a71" fontFamily="system-ui,sans-serif" textAnchor="middle" fontWeight="700">91%</text>
      {/* Ground */}
      <line x1="58" y1="300" x2="342" y2="300" stroke="rgba(204,236,226,0.09)" strokeWidth="1.5"/>
      {/* Star field */}
      <circle cx="48"  cy="58"  r="1.8" fill="rgba(255,255,255,0.4)"/>
      <circle cx="358" cy="68"  r="1.4" fill="rgba(255,255,255,0.35)"/>
      <circle cx="378" cy="162" r="1.4" fill="rgba(255,255,255,0.3)"/>
      <circle cx="18"  cy="222" r="1.8" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}
