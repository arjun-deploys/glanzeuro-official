import type { Illustration } from "@/data/services"

/**
 * Line-art illustrations drawn in the brand rose and gold, matching the line
 * art in the hero artwork. They stand in wherever the brief asks for imagery
 * we do not have licensed photography for yet (German, Spoken English, exams,
 * career, study abroad). Swap for licensed photos at any time.
 */

const R = "var(--rose)"
const G = "var(--gold)"

function Tulip({
  x,
  y,
  c = R,
  s = 1,
}: {
  x: number
  y: number
  c?: string
  s?: number
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="none"
      strokeLinecap="round"
    >
      <path d="M0 0 V-16" stroke={G} strokeWidth="1.4" />
      <path d="M0 -8 Q-6 -12 -7 -18" stroke={G} strokeWidth="1.2" />
      <path
        d="M-5 -16 Q-6 -26 0 -28 Q6 -26 5 -16 Q0 -13 -5 -16 Z"
        fill={c}
        fillOpacity=".18"
        stroke={c}
        strokeWidth="1.4"
      />
    </g>
  )
}

function Blossom({ x, y, r = 5 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="0"
          cy={-r}
          rx={r * 0.55}
          ry={r * 0.9}
          transform={`rotate(${a})`}
          fill="var(--pink)"
          fillOpacity=".55"
        />
      ))}
      <circle r={r * 0.32} fill={G} />
    </g>
  )
}

function Ground() {
  return (
    <>
      <path
        d="M18 184 H222"
        stroke={G}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M44 190 H196"
        stroke={G}
        strokeOpacity=".5"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </>
  )
}

function Eiffel() {
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle
        cx="168"
        cy="54"
        r="26"
        fill={G}
        fillOpacity=".14"
        stroke="none"
      />
      <path d="M120 14 V30" />
      <path d="M115 30 H125" />
      <path d="M116 30 L111 68 Q103 120 70 182" />
      <path d="M124 30 L129 68 Q137 120 170 182" />
      <path d="M104 68 H136 M106 74 H134" />
      <path d="M92 110 H148 M94 117 H146" />
      <path d="M84 182 Q120 136 156 182" />
      <path d="M112 76 L128 108 M128 76 L112 108" strokeWidth="1.2" />
      <path d="M114 40 L126 64 M126 40 L114 64" strokeWidth="1.2" />
      <path d="M97 120 L111 150 M143 120 L129 150" strokeWidth="1.2" />
      <Blossom x={42} y={150} r={6} />
      <Blossom x={56} y={164} r={4.5} />
      <Blossom x={196} y={158} r={5.5} />
      <Ground />
    </g>
  )
}

function Windmill() {
  const sail = (a: number) => (
    <g key={a} transform={`rotate(${a} 120 92)`}>
      <path d="M120 92 V24" />
      <rect x="121" y="26" width="15" height="58" rx="1" strokeWidth="1.4" />
      <path d="M121 40 H136 M121 54 H136 M121 68 H136" strokeWidth="1" />
    </g>
  )
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle cx="62" cy="58" r="22" fill={G} fillOpacity=".14" stroke="none" />
      <path d="M100 182 L109 98 H131 L140 182 Z" fill="var(--blush)" />
      <path d="M104 100 Q120 78 136 100" fill="var(--blush)" />
      <path d="M114 182 V164 Q120 156 126 164 V182" />
      <rect x="116" y="124" width="8" height="10" rx="1" strokeWidth="1.4" />
      {[20, 110, 200, 290].map(sail)}
      <circle cx="120" cy="92" r="4" fill={G} stroke="none" />
      {[40, 54, 68, 172, 186, 200].map((x, i) => (
        <Tulip
          key={x}
          x={x}
          y={184}
          c={i % 2 ? G : R}
          s={i % 3 === 0 ? 1.1 : 0.9}
        />
      ))}
      <Ground />
    </g>
  )
}

function Gate() {
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle
        cx="176"
        cy="52"
        r="24"
        fill={G}
        fillOpacity=".16"
        stroke="none"
      />
      <path d="M58 182 H182 M62 176 H178" />
      <rect x="62" y="94" width="116" height="14" />
      <path d="M62 101 H178" strokeWidth="1" />
      <rect x="92" y="78" width="56" height="16" />
      {[70, 90, 110, 126, 146, 166].map((x) => (
        <path
          key={x}
          d={`M${x} 108 V176 M${x + 6} 108 V176`}
          strokeWidth="1.5"
        />
      ))}
      <path
        d="M104 78 Q106 66 113 68 Q118 64 122 68 Q129 64 136 78"
        fill={G}
        fillOpacity=".2"
      />
      <path d="M120 68 V50" />
      <circle cx="120" cy="47" r="4" stroke={G} />
      <path d="M114 60 Q120 56 126 60" stroke={G} strokeWidth="1.4" />
      <Blossom x={36} y={160} r={5} />
      <Blossom x={206} y={164} r={6} />
      <Ground />
    </g>
  )
}

function Speech() {
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle
        cx="60"
        cy="150"
        r="26"
        fill={G}
        fillOpacity=".14"
        stroke="none"
      />
      <path
        d="M44 40 H150 Q164 40 164 54 V96 Q164 110 150 110 H84 L62 128 L66 110 H58 Q44 110 44 96 V54 Q44 40 58 40 Z"
        fill="var(--white)"
      />
      <path d="M64 62 H140 M64 76 H128 M64 90 H110" strokeWidth="1.6" />
      <path
        d="M96 116 H180 Q194 116 194 130 V160 Q194 172 180 172 H176 L180 188 L160 172 H110 Q96 172 96 160 V130 Q96 116 110 116 Z"
        fill={G}
        fillOpacity=".16"
        stroke={G}
      />
      <path d="M114 136 H176 M114 150 H160" stroke={G} strokeWidth="1.6" />
      <path
        d="M182 46 Q190 56 182 66 M192 38 Q206 56 192 74"
        stroke={G}
        strokeWidth="1.6"
      />
    </g>
  )
}

function Exam() {
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle
        cx="176"
        cy="60"
        r="26"
        fill={G}
        fillOpacity=".14"
        stroke="none"
      />
      <rect x="62" y="34" width="96" height="130" rx="8" fill="var(--white)" />
      <path d="M90 34 V26 H130 V34" />
      {[62, 90, 118].map((y) => (
        <g key={y}>
          <rect x="76" y={y} width="12" height="12" rx="2" strokeWidth="1.5" />
          <path
            d={`M79 ${y + 6} L82 ${y + 9} L87 ${y + 3}`}
            stroke={G}
            strokeWidth="1.8"
          />
          <path d={`M98 ${y + 4} H142 M98 ${y + 10} H128`} strokeWidth="1.3" />
        </g>
      ))}
      <path d="M150 178 Q150 140 178 140 Q206 140 206 178" stroke={G} />
      <rect
        x="142"
        y="170"
        width="14"
        height="20"
        rx="5"
        fill={G}
        fillOpacity=".2"
        stroke={G}
      />
      <rect
        x="200"
        y="170"
        width="14"
        height="20"
        rx="5"
        fill={G}
        fillOpacity=".2"
        stroke={G}
      />
      <path d="M36 170 L60 146 L68 154 L44 178 L34 180 Z" />
    </g>
  )
}

function Career() {
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle cx="64" cy="56" r="24" fill={G} fillOpacity=".14" stroke="none" />
      <rect x="54" y="92" width="112" height="78" rx="10" fill="var(--white)" />
      <path d="M92 92 V80 Q92 74 98 74 H122 Q128 74 128 80 V92" />
      <path d="M54 122 H166" strokeWidth="1.4" />
      <rect
        x="102"
        y="114"
        width="16"
        height="14"
        rx="3"
        fill={G}
        fillOpacity=".3"
        stroke={G}
      />
      <path d="M150 64 L172 46 L186 56 L206 30" stroke={G} />
      <path d="M196 30 H206 V40" stroke={G} />
      <Ground />
    </g>
  )
}

function GlobeArt() {
  return (
    <g
      fill="none"
      stroke={R}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle cx="120" cy="108" r="62" fill="var(--white)" />
      <ellipse cx="120" cy="108" rx="26" ry="62" strokeWidth="1.4" />
      <path d="M58 108 H182 M66 78 H174 M66 138 H174" strokeWidth="1.4" />
      <path
        d="M30 150 Q80 20 210 52"
        stroke={G}
        strokeWidth="1.6"
        strokeDasharray="4 6"
      />
      <path d="M206 44 L222 50 L206 58 L210 51 Z" fill={G} stroke={G} />
      <path
        d="M92 178 L120 166 L148 178 L120 190 Z"
        fill={G}
        fillOpacity=".22"
        stroke={G}
      />
      <path d="M104 184 V196 Q120 204 136 196 V184" stroke={G} />
    </g>
  )
}

const map: Record<Illustration, () => React.ReactElement> = {
  eiffel: Eiffel,
  windmill: Windmill,
  gate: Gate,
  speech: Speech,
  exam: Exam,
  career: Career,
  globe: GlobeArt,
}

export function Art({
  name,
  className = "",
  label,
}: {
  name: Illustration
  className?: string
  label?: string
}) {
  const Drawing = map[name]
  return (
    <svg
      viewBox="0 0 240 204"
      className={`art ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Drawing />
    </svg>
  )
}

/** Gold ribbon sweep used behind section edges, echoing the reference. */
export function Ribbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={`ribbon ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 170 C 320 40, 620 260, 980 120 S 1360 40, 1440 70"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2"
        opacity=".7"
      />
      <path
        d="M0 190 C 340 70, 640 270, 1000 140 S 1380 70, 1440 96"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
        opacity=".45"
      />
    </svg>
  )
}

export function FlagBadge({
  colors,
  direction,
  size = 44,
}: {
  colors: string[]
  direction: "vertical" | "horizontal"
  size?: number
}) {
  if (!colors.length) return null
  const n = colors.length
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      className="flag-badge"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`c-${colors.join("").replace(/#/g, "")}`}>
          <circle cx="15" cy="15" r="14" />
        </clipPath>
      </defs>
      <g clipPath={`url(#c-${colors.join("").replace(/#/g, "")})`}>
        {colors.map((c, i) =>
          direction === "vertical" ? (
            <rect
              key={i}
              x={(30 / n) * i}
              y="0"
              width={30 / n + 0.2}
              height="30"
              fill={c}
            />
          ) : (
            <rect
              key={i}
              x="0"
              y={(30 / n) * i}
              width="30"
              height={30 / n + 0.2}
              fill={c}
            />
          )
        )}
      </g>
      <circle
        cx="15"
        cy="15"
        r="14"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.2"
      />
    </svg>
  )
}
