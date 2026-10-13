/* Flat illustrations for the homepage category tiles. Drawn on a shared
   200×150 canvas, sitting on the bottom edge, in the brand navy / gold /
   cream so they read as one set on any tile colour. Decorative only. */

const N = '#13203a'; // navy
const N2 = '#2a3a5c'; // navy, lighter
const G = '#e0ad55'; // gold
const C = '#f6efe2'; // cream
const W = '#ffffff';
const SHADOW = 'rgba(0, 0, 0, 0.18)';

const art = {
  tech: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* phone */}
      <rect x="62" y="38" width="56" height="108" rx="10" fill={N} />
      <rect x="67" y="46" width="46" height="88" rx="5" fill="#7cc0de" />
      <rect x="73" y="54" width="14" height="14" rx="3" fill={W} opacity="0.85" />
      <rect x="93" y="54" width="14" height="14" rx="3" fill={G} />
      <rect x="73" y="74" width="14" height="14" rx="3" fill={G} />
      <rect x="93" y="74" width="14" height="14" rx="3" fill={W} opacity="0.85" />
      <rect x="73" y="118" width="34" height="8" rx="4" fill={W} opacity="0.6" />
      {/* watch */}
      <rect x="138" y="70" width="22" height="76" rx="7" fill={C} />
      <rect x="129" y="88" width="40" height="42" rx="11" fill={N} />
      <rect x="134" y="93" width="30" height="32" rx="7" fill={G} />
      <path d="M149 101v8l5 4" stroke={N} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* earbuds case */}
      <rect x="18" y="110" width="38" height="36" rx="13" fill={W} />
      <path d="M18 124h38" stroke={C} strokeWidth="2" />
      <circle cx="37" cy="132" r="2.5" fill={G} />
    </>
  ),
  appliances: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* kettle */}
      <rect x="34" y="136" width="74" height="10" rx="3" fill={N} />
      <path d="M44 136 51 72q20-10 40 0l7 64Z" fill={W} />
      <path d="M53 84 36 76l3-5 16 7Z" fill={W} />
      <path d="M95 82q24 2 20 28-2 16-18 18" stroke={N} strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="71" cy="70" rx="21" ry="5" fill={N} />
      <rect x="67" y="62" width="8" height="6" rx="2" fill={N} />
      <rect x="66" y="92" width="9" height="34" rx="4.5" fill={G} />
      {/* speaker */}
      <rect x="124" y="90" width="58" height="56" rx="15" fill={N} />
      <circle cx="153" cy="118" r="17" fill={N2} />
      <circle cx="153" cy="118" r="7" fill={G} />
      <rect x="139" y="96" width="28" height="3" rx="1.5" fill={N2} />
    </>
  ),
  kitchen: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* lunch box */}
      <rect x="22" y="100" width="100" height="46" rx="10" fill={C} />
      <rect x="18" y="90" width="108" height="16" rx="8" fill={N} />
      <rect x="40" y="98" width="12" height="16" rx="3" fill={G} />
      <rect x="92" y="98" width="12" height="16" rx="3" fill={G} />
      <path d="M36 126h72" stroke="#e6dccb" strokeWidth="3" strokeLinecap="round" />
      {/* bottle */}
      <rect x="138" y="58" width="32" height="88" rx="13" fill={W} />
      <rect x="143" y="42" width="22" height="20" rx="5" fill={N} />
      <rect x="138" y="96" width="32" height="12" fill={G} />
      <path d="M165 46q10 0 10 9" stroke={N} strokeWidth="4" strokeLinecap="round" fill="none" />
    </>
  ),
  travel: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* backpack */}
      <path d="M50 66q0-10 10-10h12q10 0 10 10" stroke={N} strokeWidth="5" fill="none" />
      <rect x="32" y="66" width="68" height="78" rx="20" fill={C} />
      <rect x="42" y="106" width="48" height="30" rx="9" fill={W} />
      <path d="M50 106v-6q0-4 4-4h24q4 0 4 4v6" stroke={G} strokeWidth="3" fill="none" />
      <rect x="62" y="114" width="8" height="10" rx="2" fill={G} />
      {/* suitcase */}
      <path d="M126 62V46h26v16" stroke={N} strokeWidth="6" strokeLinejoin="round" fill="none" />
      <rect x="110" y="60" width="58" height="80" rx="11" fill={N} />
      <path d="M128 68v64M150 68v64" stroke={N2} strokeWidth="4" strokeLinecap="round" />
      <rect x="160" y="74" width="12" height="18" rx="3" fill={G} />
      <circle cx="122" cy="143" r="4" fill="#0a1226" />
      <circle cx="156" cy="143" r="4" fill="#0a1226" />
    </>
  ),
  onboarding: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* box back */}
      <rect x="26" y="86" width="148" height="60" rx="6" fill="#e6dccb" />
      {/* notebook */}
      <rect x="40" y="56" width="48" height="66" rx="4" fill={N2} />
      <rect x="40" y="56" width="10" height="66" rx="3" fill={N} />
      <rect x="58" y="70" width="22" height="4" rx="2" fill={G} />
      {/* bottle */}
      <rect x="98" y="52" width="24" height="72" rx="9" fill={W} />
      <rect x="102" y="42" width="16" height="14" rx="4" fill={N} />
      {/* pen + lanyard card */}
      <rect x="132" y="50" width="8" height="70" rx="4" fill={G} />
      <rect x="146" y="70" width="20" height="28" rx="3" fill={W} />
      <rect x="150" y="76" width="12" height="3" rx="1.5" fill={N} />
      {/* box front */}
      <rect x="26" y="104" width="148" height="42" rx="6" fill={W} />
      <circle cx="100" cy="125" r="10" fill={G} />
      <path d="M95 125h10M100 120v10" stroke={W} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  custom: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* t-shirt */}
      <path d="M50 58 72 48q12 12 24 0l22 10 16 24-18 8v56H52V90l-18-8Z" fill={W} />
      <path d="M72 48q12 12 24 0" stroke={C} strokeWidth="3" fill="none" />
      <circle cx="84" cy="98" r="12" fill={G} />
      <path d="M78 98l4 4 8-8" stroke={W} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* mug */}
      <path d="M170 106q16 2 14 16-2 12-14 12" stroke={N} strokeWidth="7" fill="none" />
      <rect x="128" y="96" width="44" height="50" rx="8" fill={N} />
      <circle cx="150" cy="121" r="9" fill={G} />
      <path d="M140 86q4-6 0-12M152 86q4-6 0-12" stroke={W} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" fill="none" />
    </>
  ),
  trophy: (
    <>
      <ellipse cx="100" cy="146" rx="84" ry="5" fill={SHADOW} />
      {/* cup */}
      <path d="M68 50q-20 0-16 18 3 12 18 14" stroke={G} strokeWidth="6" fill="none" />
      <path d="M132 50q20 0 16 18-3 12-18 14" stroke={G} strokeWidth="6" fill="none" />
      <path d="M66 40h68v18q0 34-34 40-34-6-34-40Z" fill={G} />
      <rect x="76" y="46" width="6" height="30" rx="3" fill={W} opacity="0.4" />
      <path d="m100 54 3.5 7.5 8 1-6 5.5 1.6 8-7.1-4-7.1 4 1.6-8-6-5.5 8-1Z" fill={W} opacity="0.85" />
      <rect x="94" y="96" width="12" height="18" fill="#c68b3c" />
      <rect x="76" y="112" width="48" height="12" rx="3" fill={N} />
      <rect x="68" y="124" width="64" height="22" rx="4" fill={N2} />
      <rect x="88" y="130" width="24" height="10" rx="2" fill={G} />
      {/* medal */}
      <path d="M150 80h12l8 30h-12Z" fill={W} />
      <path d="M178 80h-12l-8 30h12Z" fill={C} />
      <circle cx="164" cy="124" r="18" fill={G} />
      <circle cx="164" cy="124" r="11" fill="#c68b3c" />
      {/* plaque */}
      <rect x="18" y="98" width="36" height="48" rx="4" fill={N} />
      <rect x="24" y="104" width="24" height="24" rx="3" fill={G} />
      <rect x="24" y="134" width="24" height="4" rx="2" fill={C} />
    </>
  ),
};

export default function CategoryArt({ name }) {
  return (
    <svg
      viewBox="0 0 200 150"
      className="sc__art"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMax meet"
    >
      {art[name]}
    </svg>
  );
}
