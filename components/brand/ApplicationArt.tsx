/*
 * Ilustrações das aplicações, no mesmo traço do logo animado do hero:
 * cores chapadas, filme azul da marca e um mínimo de detalhe.
 */

export type ArtKind = "biscoitos" | "doces" | "massas" | "pecas";

const C = {
  wheat: "#d8a15a",
  wheatDark: "#b57a35",
  wheatLight: "#ecc58c",
  pasta: "#efc45c",
  pastaDark: "#d4a43a",
  pastaHole: "#a87a22",
  steel: "#aab3bd",
  steelLight: "#ccd3da",
  steelDark: "#6f7a86",
  film: "var(--color-accent)",
  filmHi: "var(--color-accent-hi)",
  ink: "#0b0f14",
};

function scallop(
  cx: number,
  cy: number,
  r: number,
  lobes: number,
  amp: number,
) {
  const pts: string[] = [];
  for (let a = 0; a < 360; a += 4) {
    const t = (a * Math.PI) / 180;
    const rr = r + amp * Math.cos(lobes * t);
    pts.push(
      `${(cx + rr * Math.cos(t)).toFixed(1)},${(cy + rr * Math.sin(t)).toFixed(1)}`,
    );
  }
  return `M${pts.join("L")}Z`;
}

function Biscuits() {
  const spots = [
    [66, 66],
    [120, 64],
    [174, 67],
    [67, 126],
    [121, 124],
    [175, 127],
  ];
  return (
    <>
      <rect
        x="22"
        y="26"
        width="196"
        height="140"
        rx="14"
        fill="#fff"
        stroke={C.ink}
        strokeOpacity=".12"
      />
      <path d="M22 96h196" stroke={C.ink} strokeOpacity=".06" />
      {spots.map(([x, y], i) => (
        <g key={i} transform={`rotate(${i * 17} ${x} ${y})`}>
          <ellipse
            cx={x}
            cy={y + 4}
            rx="25"
            ry="23"
            fill={C.ink}
            opacity=".07"
          />
          <path d={scallop(x, y, 23, 9, 2.6)} fill={C.wheat} />
          <path
            d={scallop(x, y, 14, 9, 1.5)}
            fill="none"
            stroke={C.wheatDark}
            strokeWidth="2"
          />
          <circle cx={x} cy={y} r="4.5" fill={C.wheatDark} />
          <path
            d={`M${x - 15} ${y - 10}a18 18 0 0 1 10 -7`}
            stroke={C.wheatLight}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}
    </>
  );
}

function Pack({ x, y, r }: { x: number; y: number; r: number }) {
  const nuts = [
    [-34, -6],
    [-18, 6],
    [-2, -4],
    [14, 7],
    [30, -5],
    [-26, 8],
    [22, -9],
  ];
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <ellipse cx="0" cy="26" rx="70" ry="7" fill={C.ink} opacity=".08" />
      <rect
        x="-72"
        y="-16"
        width="18"
        height="32"
        fill={C.filmHi}
        opacity=".85"
      />
      <rect
        x="54"
        y="-16"
        width="18"
        height="32"
        fill={C.filmHi}
        opacity=".85"
      />
      <path
        d="M-67 -13v26M-61 -13v26M61 -13v26M67 -13v26"
        stroke="#fff"
        strokeOpacity=".5"
        strokeWidth="1.5"
      />
      <rect x="-50" y="-15" width="100" height="30" rx="5" fill="#c4874a" />
      {nuts.map(([nx, ny], i) => (
        <ellipse
          key={i}
          cx={nx}
          cy={ny}
          rx="5"
          ry="3.4"
          fill={C.wheatLight}
          transform={`rotate(${i * 40} ${nx} ${ny})`}
        />
      ))}
      <rect
        x="-56"
        y="-22"
        width="112"
        height="44"
        rx="6"
        fill={C.film}
        opacity=".38"
      />
      <path
        d="M-50 -17h100"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="-14"
        y="-8"
        width="28"
        height="14"
        rx="2"
        fill="#fff"
        opacity=".92"
      />
      <path
        d="M-9 -3h18M-9 1.5h11"
        stroke={C.ink}
        strokeOpacity=".45"
        strokeWidth="1.4"
      />
    </g>
  );
}

function Sweets() {
  return (
    <>
      <g transform="translate(120 96) scale(1.12) translate(-120 -96)">
        <Pack x={110} y={126} r={-8} />
        <Pack x={130} y={68} r={-14} />
      </g>
    </>
  );
}

function Penne({ x, y, r }: { x: number; y: number; r: number }) {
  const ridges = [3.5, 6.5, 9.5, 12.5];
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${r}) scale(1.15) translate(-35 -8)`}
    >
      <path
        d="M3 19.5H63"
        stroke={C.ink}
        strokeOpacity=".07"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M10 0H70L60 16H0Z" fill={C.pasta} strokeLinejoin="round" />
      {ridges.map((ry) => {
        const x1 = 10 - (10 * ry) / 16 + 4;
        const x2 = 70 - (10 * ry) / 16 - 6;
        return (
          <path
            key={ry}
            d={`M${x1} ${ry}H${x2}`}
            stroke={C.pastaDark}
            strokeWidth="1.2"
          />
        );
      })}
      <ellipse
        cx="65"
        cy="8"
        rx="3.2"
        ry="8.6"
        transform="rotate(32 65 8)"
        fill={C.pastaHole}
      />
      <path
        d="M12 2.2H62"
        stroke="#fff"
        strokeOpacity=".45"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  );
}

function Pasta() {
  const items: [number, number, number][] = [
    [96, 66, -22],
    [150, 70, -30],
    [82, 104, -18],
    [138, 108, -26],
    [104, 140, -14],
    [160, 140, -24],
  ];
  return (
    <>
      {items.map(([x, y, r], i) => (
        <Penne key={i} x={x} y={y} r={r} />
      ))}
    </>
  );
}

function hexagon(cx: number, cy: number, r: number) {
  return (
    Array.from({ length: 6 }, (_, i) => {
      const t = (Math.PI / 3) * i + Math.PI / 6;
      return `${i ? "L" : "M"}${(cx + r * Math.cos(t)).toFixed(1)} ${(cy + r * Math.sin(t)).toFixed(1)}`;
    }).join("") + "Z"
  );
}

function Bolt({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <ellipse cx="6" cy="22" rx="62" ry="5" fill={C.ink} opacity=".07" />
      <rect x="-62" y="-17" width="26" height="34" rx="3" fill={C.steel} />
      <rect x="-62" y="-17" width="26" height="10" rx="3" fill={C.steelLight} />
      <path d="M-49 -17v34" stroke={C.steelDark} strokeOpacity=".5" />
      <rect x="-36" y="-9" width="92" height="18" fill={C.steel} />
      {Array.from({ length: 13 }, (_, i) => (
        <path
          key={i}
          d={`M${-30 + i * 6.5} -9l4 18`}
          stroke={C.steelDark}
          strokeWidth="1.3"
        />
      ))}
      <path d="M-36 -6h92" stroke="#fff" strokeOpacity=".6" strokeWidth="1.5" />
      <path d="M56 -9l6 4v10l-6 4z" fill={C.steelDark} />
    </g>
  );
}

function Nut({ x, y, r = 24 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <ellipse
        cx={x}
        cy={y + r * 0.55}
        rx={r}
        ry={r * 0.2}
        fill={C.ink}
        opacity=".08"
      />
      <path
        d={hexagon(x, y, r)}
        fill={C.steel}
        stroke={C.steelDark}
        strokeWidth="1.5"
      />
      <path d={hexagon(x, y, r * 0.72)} fill={C.steelLight} />
      <circle
        cx={x}
        cy={y}
        r={r * 0.4}
        fill="#e8e6e0"
        stroke={C.steelDark}
        strokeWidth="2"
      />
      <circle
        cx={x}
        cy={y}
        r={r * 0.27}
        fill="none"
        stroke={C.steelDark}
        strokeOpacity=".45"
        strokeDasharray="2 2"
      />
    </g>
  );
}

function Washer({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 14} rx="18" ry="4" fill={C.ink} opacity=".07" />
      <circle
        cx={x}
        cy={y}
        r="18"
        fill={C.steel}
        stroke={C.steelDark}
        strokeWidth="1.5"
      />
      <circle
        cx={x}
        cy={y}
        r="8"
        fill="#e8e6e0"
        stroke={C.steelDark}
        strokeWidth="1.5"
      />
      <path
        d={`M${x - 13} ${y - 7}a15 15 0 0 1 10 -8`}
        stroke="#fff"
        strokeOpacity=".7"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Parts() {
  return (
    <>
      <Bolt x={118} y={70} r={-12} />
      <Nut x={72} y={138} />
      <Nut x={128} y={140} r={18} />
      <Washer x={180} y={136} />
    </>
  );
}

const arts = {
  biscoitos: Biscuits,
  doces: Sweets,
  massas: Pasta,
  pecas: Parts,
};

export default function ApplicationArt({
  kind,
  className,
}: {
  kind: ArtKind;
  className?: string;
}) {
  const Art = arts[kind];
  return (
    <svg viewBox="0 0 240 192" className={className} aria-hidden="true">
      <Art />
    </svg>
  );
}
