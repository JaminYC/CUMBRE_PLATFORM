/* ─────────────────────────────────────────────────────────────
   CUMBRE – Landing illustrations (inline SVG, no external deps)
   Flat-cartoon style · 400 × 340 viewBox each
   ───────────────────────────────────────────────────────────── */

/** Shared helpers */
function Stars() {
  const pts = [
    [30,28,2],[95,14,1.5],[180,22,2.5],[280,10,1.5],[360,32,2],
    [22,95,1.2],[130,55,1.8],[310,68,1.4],[385,18,1.6],[55,170,1]
  ];
  return (
    <>
      {pts.map(([x,y,r],i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.65)" />
      ))}
    </>
  );
}

function Sparkle({ x,y,s=1,color="#efc88d" }: { x:number; y:number; s?:number; color?:string }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <line x1="0" y1="-9" x2="0" y2="9" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="-9" y1="0" x2="9" y2="0" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="-6" y1="-6" x2="6" y2="6" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      <line x1="6" y1="-6" x2="-6" y2="6" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
    </g>
  );
}

/** ── NIÑO: kids in space/science lab ─────────────────────── */
export function IllustrationNino() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      <Stars/>
      {/* Planet */}
      <circle cx="340" cy="80" r="56" fill="rgba(13,122,113,0.25)"/>
      <circle cx="340" cy="80" r="42" fill="rgba(13,122,113,0.4)"/>
      <circle cx="325" cy="62" r="13" fill="rgba(255,255,255,0.08)"/>
      <ellipse cx="340" cy="80" rx="72" ry="13" fill="none" stroke="#efc88d" strokeWidth="3.5" opacity="0.75"/>
      {/* Ground */}
      <ellipse cx="200" cy="332" rx="230" ry="52" fill="rgba(204,236,226,0.12)"/>
      {/* Telescope stand */}
      <rect x="220" y="218" width="10" height="88" rx="5" fill="#3d5560"/>
      <rect x="200" y="298" width="50" height="10" rx="5" fill="#3d5560"/>
      {/* Telescope tube (angled) */}
      <g transform="rotate(-28 220 200)">
        <rect x="170" y="185" width="105" height="28" rx="14" fill="#147a71"/>
        <circle cx="180" cy="199" r="18" fill="#0d5c56"/>
        <circle cx="180" cy="199" r="11" fill="rgba(204,236,226,0.35)"/>
        <rect x="268" y="191" width="18" height="16" rx="5" fill="#0a4a45"/>
      </g>
      {/* Child – legs */}
      <rect x="112" y="265" width="24" height="58" rx="12" fill="#f2c88c"/>
      <rect x="142" y="265" width="24" height="58" rx="12" fill="#f2c88c"/>
      <ellipse cx="124" cy="323" rx="16" ry="9" fill="#1f3138"/>
      <ellipse cx="154" cy="323" rx="16" ry="9" fill="#1f3138"/>
      {/* Body – little lab coat */}
      <rect x="96" y="185" width="86" height="92" rx="22" fill="#f0f4f8"/>
      <rect x="96" y="185" width="44" height="92" rx="22" fill="rgba(204,236,226,0.5)"/>
      {/* Collar detail */}
      <path d="M139 185 L130 205 L148 205 Z" fill="rgba(13,122,113,0.2)"/>
      {/* Arms */}
      <rect x="60" y="196" width="44" height="20" rx="10" fill="#f0f4f8" transform="rotate(22 80 206)"/>
      <rect x="174" y="196" width="44" height="20" rx="10" fill="#f0f4f8" transform="rotate(-26 196 206)"/>
      <circle cx="63" cy="222" r="11" fill="#f2c88c"/>
      <circle cx="213" cy="198" r="11" fill="#f2c88c"/>
      {/* Neck */}
      <rect x="127" y="162" width="24" height="28" rx="8" fill="#f2c88c"/>
      {/* Head */}
      <circle cx="139" cy="138" r="40" fill="#f2c88c"/>
      {/* Hair – dark curly */}
      <ellipse cx="139" cy="103" rx="34" ry="16" fill="#3d2410"/>
      <circle cx="108" cy="115" r="12" fill="#3d2410"/>
      <circle cx="170" cy="115" r="12" fill="#3d2410"/>
      <circle cx="139" cy="102" r="10" fill="#3d2410"/>
      {/* Ears */}
      <ellipse cx="100" cy="140" rx="8" ry="10" fill="#f2c88c"/>
      <ellipse cx="178" cy="140" rx="8" ry="10" fill="#f2c88c"/>
      {/* Glasses */}
      <circle cx="127" cy="136" r="13" fill="rgba(255,255,255,0.15)" stroke="#1f3138" strokeWidth="2.5" opacity="0.65"/>
      <circle cx="151" cy="136" r="13" fill="rgba(255,255,255,0.15)" stroke="#1f3138" strokeWidth="2.5" opacity="0.65"/>
      <line x1="140" y1="136" x2="138" y2="136" stroke="#1f3138" strokeWidth="2" opacity="0.65"/>
      <line x1="114" y1="128" x2="105" y2="122" stroke="#1f3138" strokeWidth="2" opacity="0.65"/>
      <line x1="164" y1="128" x2="173" y2="122" stroke="#1f3138" strokeWidth="2" opacity="0.65"/>
      {/* Eyes */}
      <circle cx="127" cy="136" r="7" fill="#1f3138"/>
      <circle cx="151" cy="136" r="7" fill="#1f3138"/>
      <circle cx="129" cy="134" r="2.5" fill="white"/>
      <circle cx="153" cy="134" r="2.5" fill="white"/>
      {/* Smile */}
      <path d="M126 155 Q139 166 152 155" stroke="#b8714a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Atom (left float) */}
      <g transform="translate(46 168)">
        <circle cx="0" cy="0" r="7" fill="#efc88d" opacity="0.9"/>
        <ellipse cx="0" cy="0" rx="22" ry="7" fill="none" stroke="#efc88d" strokeWidth="2" opacity="0.7"/>
        <ellipse cx="0" cy="0" rx="22" ry="7" fill="none" stroke="#efc88d" strokeWidth="2" opacity="0.7" transform="rotate(60)"/>
        <ellipse cx="0" cy="0" rx="22" ry="7" fill="none" stroke="#efc88d" strokeWidth="2" opacity="0.7" transform="rotate(-60)"/>
      </g>
      {/* Beaker (right float) */}
      <g transform="translate(342 220)">
        <path d="M-16 -22 L-22 22 Q-24 34 -10 36 L22 36 Q36 34 34 22 L28 -22 Z" fill="rgba(204,236,226,0.45)" stroke="#147a71" strokeWidth="2.2"/>
        <line x1="-20" y1="-5" x2="26" y2="-5" stroke="#147a71" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="6" cy="16" r="5" fill="#efc88d" opacity="0.7"/>
        <circle cx="-4" cy="24" r="3" fill="#efc88d" opacity="0.5"/>
      </g>
      <Sparkle x={60} y={52} color="#efc88d"/>
      <Sparkle x={355} y={155} s={0.7} color="rgba(204,236,226,0.8)"/>
      <Sparkle x={22} y={230} s={0.5} color="#efc88d"/>
    </svg>
  );
}

/** ── JOVEN: teen at laptop, digital learning ─────────────── */
export function IllustrationJoven() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      {/* Soft background glow */}
      <ellipse cx="200" cy="180" rx="200" ry="160" fill="rgba(13,122,113,0.06)"/>
      {/* Desk */}
      <rect x="40" y="252" width="320" height="18" rx="9" fill="#3d5560"/>
      <rect x="80" y="265" width="14" height="55" rx="7" fill="#3d5560"/>
      <rect x="306" y="265" width="14" height="55" rx="7" fill="#3d5560"/>
      {/* Laptop base */}
      <rect x="100" y="220" width="200" height="36" rx="8" fill="#2a3f4a"/>
      <rect x="108" y="225" width="184" height="24" rx="5" fill="#1f3138"/>
      {/* Trackpad */}
      <rect x="180" y="232" width="40" height="12" rx="4" fill="#3d5560"/>
      {/* Laptop screen */}
      <rect x="110" y="90" width="180" height="132" rx="10" fill="#1a2f3a"/>
      <rect x="118" y="98" width="164" height="116" rx="6" fill="#0d1e26"/>
      {/* Screen content – code lines */}
      <rect x="126" y="108" width="80" height="5" rx="2.5" fill="#147a71" opacity="0.8"/>
      <rect x="126" y="118" width="60" height="5" rx="2.5" fill="#efc88d" opacity="0.7"/>
      <rect x="136" y="128" width="90" height="5" rx="2.5" fill="rgba(204,236,226,0.5)"/>
      <rect x="126" y="138" width="70" height="5" rx="2.5" fill="#efc88d" opacity="0.6"/>
      <rect x="136" y="148" width="100" height="5" rx="2.5" fill="rgba(204,236,226,0.4)"/>
      <rect x="126" y="158" width="55" height="5" rx="2.5" fill="#147a71" opacity="0.7"/>
      <rect x="126" y="168" width="78" height="5" rx="2.5" fill="rgba(204,236,226,0.5)"/>
      {/* Cursor blink */}
      <rect x="208" y="168" width="2" height="10" rx="1" fill="rgba(255,255,255,0.8)"/>
      {/* Teen character – taller, slimmer than child */}
      {/* Legs */}
      <rect x="172" y="270" width="20" height="52" rx="10" fill="#2a5c8a"/>
      <rect x="208" y="270" width="20" height="52" rx="10" fill="#2a5c8a"/>
      <ellipse cx="182" cy="322" rx="18" ry="10" fill="#1f3138"/>
      <ellipse cx="218" cy="322" rx="18" ry="10" fill="#1f3138"/>
      {/* Body – hoodie */}
      <rect x="158" y="192" width="84" height="88" rx="20" fill="#147a71"/>
      {/* Hoodie pocket */}
      <path d="M178 250 Q200 244 222 250 L222 270 Q200 274 178 270 Z" fill="rgba(0,0,0,0.15)"/>
      {/* Arms – one on desk */}
      <rect x="118" y="220" width="50" height="18" rx="9" fill="#147a71" transform="rotate(8 143 229)"/>
      <circle cx="115" cy="232" r="12" fill="#f2c88c"/>
      <rect x="234" y="218" width="50" height="18" rx="9" fill="#147a71" transform="rotate(-10 259 227)"/>
      <circle cx="288" cy="225" r="12" fill="#f2c88c"/>
      {/* Neck */}
      <rect x="190" y="174" width="20" height="24" rx="8" fill="#f2c88c"/>
      {/* Head */}
      <circle cx="200" cy="152" r="36" fill="#f2c88c"/>
      {/* Hair – slightly messy teen */}
      <ellipse cx="200" cy="120" rx="32" ry="14" fill="#2c1a0e"/>
      <path d="M168 128 Q172 108 200 104 Q228 108 232 128 Q218 118 200 116 Q182 118 168 128 Z" fill="#2c1a0e"/>
      <path d="M232 130 Q238 120 236 132" fill="#2c1a0e"/>
      {/* Ears */}
      <ellipse cx="165" cy="154" rx="8" ry="10" fill="#f2c88c"/>
      <ellipse cx="235" cy="154" rx="8" ry="10" fill="#f2c88c"/>
      {/* Headphones */}
      <path d="M165 140 Q200 108 235 140" fill="none" stroke="#1f3138" strokeWidth="8" strokeLinecap="round"/>
      <rect x="157" y="140" width="16" height="22" rx="8" fill="#147a71"/>
      <rect x="227" y="140" width="16" height="22" rx="8" fill="#147a71"/>
      {/* Eyes */}
      <ellipse cx="190" cy="152" rx="8" ry="7" fill="#1f3138"/>
      <ellipse cx="210" cy="152" rx="8" ry="7" fill="#1f3138"/>
      <circle cx="192" cy="150" r="3" fill="white"/>
      <circle cx="212" cy="150" r="3" fill="white"/>
      {/* Eyebrows – slightly angled for teen cool */}
      <path d="M182 140 Q190 136 198 140" stroke="#2c1a0e" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M202 140 Q210 136 218 140" stroke="#2c1a0e" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Slight smirk */}
      <path d="M191 165 Q202 172 210 165" stroke="#b8714a" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      {/* Floating lightbulb */}
      <g transform="translate(52 130)">
        <circle cx="0" cy="-8" r="20" fill="rgba(239,200,141,0.25)" stroke="#efc88d" strokeWidth="2.2"/>
        <rect x="-7" y="10" width="14" height="6" rx="2" fill="#efc88d" opacity="0.7"/>
        <rect x="-5" y="15" width="10" height="5" rx="2" fill="#efc88d" opacity="0.6"/>
        <line x1="0" y1="-18" x2="0" y2="-14" stroke="#efc88d" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-5" y1="-4" x2="-2" y2="-1" stroke="#efc88d" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="5" y1="-4" x2="2" y2="-1" stroke="#efc88d" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
      {/* Floating { } code symbol */}
      <text x="325" y="135" fontSize="40" fill="rgba(204,236,226,0.35)" fontFamily="monospace" fontWeight="bold">{"{ }"}</text>
      <Sparkle x={340} y={80} s={0.8} color="#efc88d"/>
      <Sparkle x={30} y={240} s={0.6} color="rgba(204,236,226,0.7)"/>
    </svg>
  );
}

/** ── ADULTO: professional in office/lab setting ──────────── */
export function IllustrationAdulto() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      <ellipse cx="200" cy="180" rx="200" ry="160" fill="rgba(239,200,141,0.05)"/>
      {/* Window blind */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="300" y={40 + i*22} width="85" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
      ))}
      {/* Desk */}
      <rect x="30" y="248" width="340" height="20" rx="10" fill="#4a5f6a"/>
      <rect x="60" y="264" width="14" height="60" rx="7" fill="#3d5560"/>
      <rect x="326" y="264" width="14" height="60" rx="7" fill="#3d5560"/>
      {/* Monitor */}
      <rect x="130" y="100" width="180" height="130" rx="10" fill="#1a2f3a"/>
      <rect x="138" y="108" width="164" height="112" rx="6" fill="#0d1e26"/>
      {/* Chart on screen */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={148 + i*28} y={188 - [60,40,80,55,70][i]} width="18" height={[60,40,80,55,70][i]} rx="4" fill={i===2?"#147a71":"rgba(13,122,113,0.45)"}/>
      ))}
      <line x1="142" y1="188" x2="298" y2="188" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      {/* Trend line */}
      <polyline points="148,175 176,165 204,145 232,158 260,132 288,118" fill="none" stroke="#efc88d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Monitor stand */}
      <rect x="208" y="228" width="24" height="22" rx="6" fill="#3d5560"/>
      <rect x="190" y="246" width="60" height="8" rx="4" fill="#3d5560"/>
      {/* Coffee cup */}
      <g transform="translate(66 210)">
        <rect x="-18" y="-22" width="36" height="36" rx="8" fill="#c47c5a"/>
        <rect x="-16" y="-20" width="32" height="16" rx="4" fill="rgba(255,255,255,0.15)"/>
        <path d="M18 -10 Q28 -10 28 -2 Q28 6 18 6" fill="none" stroke="#c47c5a" strokeWidth="4" strokeLinecap="round"/>
        <ellipse cx="0" cy="-24" rx="16" ry="6" fill="#7a4a2e"/>
        {/* Steam */}
        <path d="M-6 -30 Q-8 -38 -6 -44" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 -30 Q8 -38 6 -44" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* Notebook */}
      <rect x="340" y="215" width="32" height="38" rx="4" fill="#f5f0e8"/>
      <rect x="340" y="215" width="6" height="38" rx="3" fill="#efc88d" opacity="0.8"/>
      {[0,1,2,3].map(i=>(
        <line key={i} x1="350" y1={224+i*8} x2="368" y2={224+i*8} stroke="#ccc" strokeWidth="1.5"/>
      ))}
      {/* Professional – taller, sharper */}
      {/* Legs – trousers */}
      <rect x="174" y="265" width="22" height="55" rx="11" fill="#2a3f4a"/>
      <rect x="204" y="265" width="22" height="55" rx="11" fill="#2a3f4a"/>
      <ellipse cx="185" cy="320" rx="18" ry="9" fill="#1a2a34"/>
      <ellipse cx="215" cy="320" rx="18" ry="9" fill="#1a2a34"/>
      {/* Body – blazer */}
      <rect x="156" y="185" width="88" height="90" rx="18" fill="#1f3138"/>
      {/* Shirt/collar */}
      <path d="M196 185 L188 205 L200 198 L212 205 L204 185 Z" fill="#f0f4f8"/>
      {/* Lapels */}
      <path d="M156 190 L188 205 L180 220 L156 215 Z" fill="#172830"/>
      <path d="M244 190 L212 205 L220 220 L244 215 Z" fill="#172830"/>
      {/* Arms */}
      <rect x="118" y="196" width="50" height="20" rx="10" fill="#1f3138" transform="rotate(12 143 206)"/>
      <circle cx="112" cy="216" r="12" fill="#e8c490"/>
      <rect x="232" y="196" width="50" height="20" rx="10" fill="#1f3138" transform="rotate(-8 257 206)"/>
      <circle cx="288" cy="205" r="12" fill="#e8c490"/>
      {/* Neck */}
      <rect x="190" y="168" width="20" height="24" rx="8" fill="#e8c490"/>
      {/* Head */}
      <circle cx="200" cy="146" r="36" fill="#e8c490"/>
      {/* Hair – professional, neat */}
      <ellipse cx="200" cy="115" rx="30" ry="11" fill="#1a0f06"/>
      <path d="M170 122 Q174 106 200 102 Q226 106 230 122 Q220 114 200 112 Q180 114 170 122 Z" fill="#1a0f06"/>
      {/* Ears */}
      <ellipse cx="165" cy="148" rx="8" ry="10" fill="#e8c490"/>
      <ellipse cx="235" cy="148" rx="8" ry="10" fill="#e8c490"/>
      {/* Eyes – confident, focused */}
      <ellipse cx="190" cy="148" rx="7" ry="6.5" fill="#1f3138"/>
      <ellipse cx="210" cy="148" rx="7" ry="6.5" fill="#1f3138"/>
      <circle cx="192" cy="146" r="2.5" fill="white"/>
      <circle cx="212" cy="146" r="2.5" fill="white"/>
      {/* Calm smile */}
      <path d="M190 162 Q200 169 210 162" stroke="#b8714a" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      {/* Floating chart icon */}
      <g transform="translate(345 100)">
        <rect x="-22" y="-22" width="44" height="44" rx="10" fill="rgba(13,122,113,0.25)" stroke="rgba(13,122,113,0.5)" strokeWidth="1.5"/>
        {[0,1,2].map(i=>(
          <rect key={i} x={-14+i*14} y={10-[20,10,16][i]} width="10" height={[20,10,16][i]} rx="3" fill={["#147a71","rgba(13,122,113,0.5)","rgba(13,122,113,0.7)"][i]}/>
        ))}
      </g>
      <Sparkle x={38} y={110} color="#efc88d" s={0.8}/>
      <Sparkle x={370} y={200} color="rgba(204,236,226,0.7)" s={0.6}/>
    </svg>
  );
}

/** ── DOCENTE: teacher at whiteboard ──────────────────────── */
export function IllustrationDocente() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      <ellipse cx="200" cy="180" rx="200" ry="160" fill="rgba(42,122,140,0.06)"/>
      {/* Whiteboard */}
      <rect x="30" y="60" width="250" height="165" rx="10" fill="#f0f4f8"/>
      <rect x="30" y="60" width="250" height="165" rx="10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
      {/* Board tray */}
      <rect x="30" y="218" width="250" height="10" rx="4" fill="#3d5560"/>
      <rect x="50" y="219" width="22" height="8" rx="2" fill="#efc88d" opacity="0.8"/>
      <rect x="80" y="220" width="14" height="6" rx="2" fill="rgba(255,255,255,0.5)"/>
      {/* Board content */}
      <text x="50" y="100" fontSize="13" fill="rgba(13,122,113,0.9)" fontFamily="Georgia, serif" fontWeight="bold">Pensamiento crítico</text>
      <line x1="45" y1="108" x2="265" y2="108" stroke="rgba(13,122,113,0.3)" strokeWidth="1.5"/>
      {/* Diagram – 3 connected nodes */}
      <circle cx="90" cy="150" r="20" fill="rgba(13,122,113,0.2)" stroke="#147a71" strokeWidth="2"/>
      <text x="83" y="155" fontSize="10" fill="#147a71" fontWeight="bold">A</text>
      <circle cx="160" cy="135" r="20" fill="rgba(239,200,141,0.25)" stroke="#efc88d" strokeWidth="2"/>
      <text x="153" y="140" fontSize="10" fill="#c47c2a" fontWeight="bold">B</text>
      <circle cx="230" cy="158" r="20" fill="rgba(13,122,113,0.15)" stroke="#147a71" strokeWidth="2"/>
      <text x="223" y="163" fontSize="10" fill="#147a71" fontWeight="bold">C</text>
      <line x1="108" y1="143" x2="142" y2="138" stroke="#3d5560" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="178" y1="142" x2="212" y2="152" stroke="#3d5560" strokeWidth="2"/>
      <line x1="110" y1="155" x2="212" y2="162" stroke="#3d5560" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.6"/>
      {/* Pointer stick */}
      <rect x="272" y="62" width="6" height="140" rx="3" fill="#5b6a72" transform="rotate(5 275 132)"/>
      <circle cx="285" cy="72" r="5" fill="#efc88d"/>
      {/* Teacher – adult female figure */}
      {/* Legs */}
      <rect x="312" y="265" width="22" height="55" rx="11" fill="#147a71"/>
      <rect x="342" y="265" width="22" height="55" rx="11" fill="#147a71"/>
      <ellipse cx="323" cy="320" rx="18" ry="9" fill="#0d5c56"/>
      <ellipse cx="353" cy="320" rx="18" ry="9" fill="#0d5c56"/>
      {/* Skirt/dress section */}
      <path d="M300 240 Q327 260 354 240 L360 290 L300 290 Z" fill="#0d5c56" opacity="0.8"/>
      {/* Body – blouse */}
      <rect x="296" y="186" width="86" height="72" rx="18" fill="#ccece2"/>
      {/* Blazer overlay */}
      <path d="M296 192 L318 210 L327 240 L296 245 Z" fill="rgba(13,92,86,0.6)"/>
      <path d="M382 192 L360 210 L351 240 L382 245 Z" fill="rgba(13,92,86,0.6)"/>
      {/* Pointer arm – extended */}
      <rect x="250" y="185" width="64" height="18" rx="9" fill="#ccece2" transform="rotate(-30 280 194)"/>
      <circle cx="244" cy="202" r="12" fill="#d4a470"/>
      {/* Other arm */}
      <rect x="362" y="196" width="44" height="18" rx="9" fill="#ccece2" transform="rotate(15 384 205)"/>
      <circle cx="410" cy="210" r="12" fill="#d4a470"/>
      {/* Neck */}
      <rect x="321" y="168" width="20" height="24" rx="8" fill="#d4a470"/>
      {/* Head */}
      <circle cx="331" cy="146" r="36" fill="#d4a470"/>
      {/* Hair – bun style */}
      <ellipse cx="331" cy="116" rx="28" ry="12" fill="#1a0f06"/>
      <circle cx="331" cy="107" rx="18" ry="18" fill="#1a0f06" cy="104"/>
      <circle cx="348" cy="108" r="10" fill="#1a0f06"/>
      <circle cx="314" cy="108" r="10" fill="#1a0f06"/>
      {/* Bun */}
      <circle cx="344" cy="100" r="13" fill="#2c1a0e"/>
      <circle cx="344" cy="100" r="7" fill="#3d2410"/>
      {/* Ears with earrings */}
      <ellipse cx="296" cy="148" rx="8" ry="10" fill="#d4a470"/>
      <circle cx="296" cy="160" r="4" fill="#efc88d"/>
      <ellipse cx="366" cy="148" rx="8" ry="10" fill="#d4a470"/>
      <circle cx="366" cy="160" r="4" fill="#efc88d"/>
      {/* Eyes – kind and attentive */}
      <ellipse cx="321" cy="148" rx="7.5" ry="7" fill="#1f3138"/>
      <ellipse cx="341" cy="148" rx="7.5" ry="7" fill="#1f3138"/>
      <circle cx="323" cy="146" r="2.5" fill="white"/>
      <circle cx="343" cy="146" r="2.5" fill="white"/>
      {/* Warm smile */}
      <path d="M318 164 Q331 174 344 164" stroke="#a0614a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Students (small silhouettes at bottom) */}
      {[60,110,160].map((x,i)=>(
        <g key={i} transform={`translate(${x} 295)`}>
          <circle cx="0" cy="-22" r="12" fill="rgba(255,255,255,0.15)"/>
          <rect x="-10" y="-12" width="20" height="28" rx="8" fill="rgba(255,255,255,0.1)"/>
        </g>
      ))}
      <Sparkle x={28} y={45} color="#efc88d" s={0.8}/>
      <Sparkle x={280} y={240} color="rgba(204,236,226,0.6)" s={0.6}/>
    </svg>
  );
}

/** ── INSTITUCIÓN: school campus with graduates ───────────── */
export function IllustrationInstitucion() {
  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="lp-illo">
      <Stars/>
      {/* Sky gradient suggestion */}
      <rect x="0" y="0" width="400" height="200" fill="rgba(13,92,86,0.08)" rx="0"/>
      {/* Sun / glow */}
      <circle cx="340" cy="60" r="35" fill="rgba(239,200,141,0.2)"/>
      <circle cx="340" cy="60" r="22" fill="rgba(239,200,141,0.3)"/>
      {/* Building – main */}
      <rect x="80" y="110" width="240" height="180" rx="6" fill="#2a3f4a"/>
      {/* Building columns */}
      {[100,140,180,220,260,280].map((x,i)=>(
        <rect key={i} x={x} y="110" width="12" height="180" rx="4" fill="rgba(255,255,255,0.05)"/>
      ))}
      {/* Roof pediment */}
      <polygon points="60,112 200,54 340,112" fill="#1f3138"/>
      <line x1="60" y1="112" x2="340" y2="112" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
      {/* Rooftop text */}
      <text x="148" y="95" fontSize="12" fill="rgba(204,236,226,0.6)" fontFamily="Georgia,serif" fontWeight="bold" letterSpacing="2">CUMBRE</text>
      {/* Windows – lit */}
      {[[100,140],[148,140],[196,140],[244,140],[292,140],
        [100,185],[148,185],[196,185],[244,185],[292,185]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="32" height="28" rx="4"
          fill={i%3===0?"rgba(239,200,141,0.4)":"rgba(204,236,226,0.2)"}
          stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      ))}
      {/* Front door */}
      <rect x="176" y="234" width="48" height="56" rx="6" fill="rgba(13,122,113,0.6)"/>
      <circle cx="218" cy="262" r="3" fill="#efc88d"/>
      {/* Path */}
      <rect x="180" y="288" width="40" height="52" fill="rgba(204,236,226,0.1)"/>
      {/* Ground */}
      <rect x="0" y="300" width="400" height="40" rx="0" fill="rgba(13,92,86,0.15)"/>
      {/* Trees */}
      <g transform="translate(50 180)">
        <rect x="-6" y="0" width="12" height="50" rx="4" fill="#3d5560"/>
        <ellipse cx="0" cy="-15" rx="25" ry="30" fill="rgba(13,122,113,0.6)"/>
        <ellipse cx="0" cy="-25" rx="18" ry="22" fill="rgba(13,122,113,0.8)"/>
      </g>
      <g transform="translate(350 190)">
        <rect x="-6" y="0" width="12" height="42" rx="4" fill="#3d5560"/>
        <ellipse cx="0" cy="-12" rx="22" ry="26" fill="rgba(13,122,113,0.6)"/>
        <ellipse cx="0" cy="-20" rx="16" ry="20" fill="rgba(13,122,113,0.8)"/>
      </g>
      {/* Graduate figures */}
      {[
        { x:110, color:"#ccece2", gownColor:"#0d5c56" },
        { x:200, color:"#f2c88c", gownColor:"#147a71" },
        { x:290, color:"#d4a470", gownColor:"#0d5c56" }
      ].map(({x,color,gownColor},i)=>(
        <g key={i} transform={`translate(${x} 248)`}>
          {/* Gown */}
          <path d={`M-16 0 Q-20 50 -14 70 L14 70 Q20 50 16 0 Z`} fill={gownColor} opacity="0.9"/>
          {/* Arms */}
          <rect x="-28" y="8" width="18" height="12" rx="6" fill={gownColor} transform="rotate(15 -19 14)"/>
          <rect x="10" y="8" width="18" height="12" rx="6" fill={gownColor} transform="rotate(-15 19 14)"/>
          {/* Head */}
          <circle cx="0" cy="-18" r="16" fill={color}/>
          {/* Cap */}
          <ellipse cx="0" cy="-33" rx="18" ry="5" fill="#1f3138"/>
          <rect x="-3" y="-38" width="6" height="10" rx="2" fill="#1f3138"/>
          {/* Tassel */}
          <line x1="16" y1="-33" x2="20" y2="-20" stroke="#efc88d" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="-18" r="3" fill="#efc88d"/>
          {/* Eyes tiny */}
          <circle cx="-5" cy="-17" r="2.5" fill="#1f3138"/>
          <circle cx="5" cy="-17" r="2.5" fill="#1f3138"/>
          <path d="M-5 -9 Q0 -5 5 -9" stroke="#a05a3a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </g>
      ))}
      {/* Floating cap */}
      <g transform="translate(340 160)">
        <ellipse cx="0" cy="0" rx="20" ry="6" fill="#1f3138" opacity="0.9"/>
        <rect x="-4" y="-10" width="8" height="12" rx="2" fill="#1f3138" opacity="0.9"/>
        <line x1="18" y1="0" x2="24" y2="14" stroke="#efc88d" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="16" r="3.5" fill="#efc88d"/>
      </g>
      {/* Data float */}
      <g transform="translate(44 140)">
        <rect x="-24" y="-24" width="48" height="48" rx="10" fill="rgba(13,122,113,0.25)" stroke="rgba(13,122,113,0.5)" strokeWidth="1.5"/>
        <text x="-14" y="-5" fontSize="11" fill="rgba(204,236,226,0.8)" fontFamily="monospace" fontWeight="bold">1,240</text>
        <text x="-18" y="10" fontSize="8" fill="rgba(204,236,226,0.5)" fontFamily="sans-serif">usuarios</text>
        <polyline points="-18,18 -8,10 2,14 12,4 20,6" fill="none" stroke="#efc88d" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <Sparkle x={56} y={68} color="#efc88d" s={0.9}/>
      <Sparkle x={375} y={110} color="rgba(204,236,226,0.7)" s={0.7}/>
    </svg>
  );
}
