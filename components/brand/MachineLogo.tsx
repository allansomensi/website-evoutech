"use client";

import { useEffect, useRef } from "react";
import { LOGO_CENTER, LOGO_PATH } from "./paths";

/*
 * O símbolo da Evoutech funcionando como a mordaça rotativa de uma
 * embaladora flow-pack: o produto entra pela esteira, é envolvido pelo
 * filme e, a cada meia volta do símbolo, uma lâmina sela e corta o pacote.
 *
 * Toda a animação é CSS (ver `.ml-*` em globals.css) e segue um único ciclo:
 * a esteira avança um passo (PITCH) enquanto o símbolo gira 180°. Como o
 * símbolo tem simetria de 180°, o ciclo se repete sem emenda.
 */

const PITCH = 96;
const JAW = { x: 360, y: 116, scale: 0.62 };
const BELT_Y = 258;
const FILM_Y = 229;
const TUBE_START = 236;
const ITEMS = Array.from({ length: 9 }, (_, i) => 408 + PITCH * (i - 5));
const TICKS = Array.from({ length: 34 }, (_, i) => -72 + i * 24);

function Product({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect
        x={-29}
        y={236}
        width={58}
        height={22}
        rx={8}
        className="ml-product"
      />
      <circle cx={-14} cy={247} r={1.6} className="ml-product-dot" />
      <circle cx={0} cy={247} r={1.6} className="ml-product-dot" />
      <circle cx={14} cy={247} r={1.6} className="ml-product-dot" />
    </g>
  );
}

function Pack({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x={-46} y={233} width={12} height={21} className="ml-crimp" />
      <rect x={34} y={233} width={12} height={21} className="ml-crimp" />
      <path
        d="M-42 235v17M-38 235v17M38 235v17M42 235v17"
        className="ml-crimp-line"
      />
      <rect
        x={-34}
        y={FILM_Y}
        width={68}
        height={29}
        rx={3}
        className="ml-film"
      />
      <path d={`M-31 ${FILM_Y + 3}h62`} className="ml-film-shine" />
      <rect x={-8} y={239} width={16} height={8} rx={1} className="ml-label" />
    </g>
  );
}

function Callout({
  n,
  label,
  x,
  y,
  d,
}: {
  n: string;
  label: string;
  x: number;
  y: number;
  d: string;
}) {
  return (
    <g className="ml-callout">
      <path d={d} className="ml-leader" />
      <text x={x} y={y}>
        <tspan className="ml-callout-n">{n}</tspan>
        <tspan dx={8}>{label}</tspan>
      </text>
    </g>
  );
}

export default function MachineLogo({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  // Pausa a animação quando ela sai da tela (economiza bateria no celular).
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => {
      el.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 720 340"
      className={`ml ${className}`}
      role="img"
      aria-label="Símbolo da Evoutech animado como a mordaça rotativa de uma embaladora: produtos entram na esteira, recebem o filme e saem selados."
    >
      <defs>
        <linearGradient
          id="ml-fade"
          x1="0"
          x2="720"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.08" stopColor="#fff" />
          <stop offset="0.92" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask
          id="ml-mask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="720"
          height="340"
        >
          <rect width="720" height="340" fill="url(#ml-fade)" />
        </mask>
        <clipPath id="ml-before">
          <rect x="0" y="0" width={JAW.x} height="340" />
        </clipPath>
        <clipPath id="ml-after">
          <rect x={JAW.x} y="0" width={720 - JAW.x} height="340" />
        </clipPath>
        <clipPath id="ml-belt">
          <rect x="28" y={BELT_Y} width="664" height="14" rx="7" />
        </clipPath>
      </defs>

      {/* Estrutura */}
      <g className="ml-frame">
        <path d="M40 318h640" />
        <path d="M96 272v46M624 272v46M84 318h24M612 318h24" />
        <path d={`M${TUBE_START - 4} ${FILM_Y - 6}l8 6v29l-8 6`} />
      </g>

      {/* Esteira */}
      <rect
        x="28"
        y={BELT_Y}
        width="664"
        height="14"
        rx="7"
        className="ml-belt"
      />
      <g clipPath="url(#ml-belt)">
        <g className="ml-move">
          {TICKS.map((x) => (
            <path key={x} d={`M${x} ${BELT_Y + 4}v6`} className="ml-tick" />
          ))}
        </g>
      </g>
      {[35, 685].map((cx) => (
        <g key={cx} className="ml-roller">
          <circle cx={cx} cy={BELT_Y + 7} r="4.5" />
          <path d={`M${cx - 4.5} ${BELT_Y + 7}h9M${cx} ${BELT_Y + 2.5}v9`} />
        </g>
      ))}

      {/* Bobina de filme */}
      <path
        d={`M176 92C190 118 214 196 ${TUBE_START} ${FILM_Y}`}
        className="ml-web"
      />
      <g className="ml-reel">
        <circle cx="176" cy="62" r="30" className="ml-reel-roll" />
        <circle cx="176" cy="62" r="10" className="ml-reel-core" />
        <path
          d="M176 52v-12M184.66 67l10.4 6M167.34 67l-10.4 6"
          className="ml-reel-spoke"
        />
      </g>

      {/* Produtos e pacotes */}
      <g mask="url(#ml-mask)">
        <g clipPath="url(#ml-before)">
          <g className="ml-move">
            {ITEMS.map((x) => (
              <Product key={x} x={x} />
            ))}
          </g>
          <rect
            x={TUBE_START}
            y={FILM_Y}
            width={JAW.x - TUBE_START}
            height={29}
            className="ml-film"
          />
          <path
            d={`M${TUBE_START + 3} ${FILM_Y + 3}H${JAW.x}`}
            className="ml-film-shine"
          />
        </g>
        <g clipPath="url(#ml-after)">
          <g className="ml-move">
            {ITEMS.map((x) => (
              <g key={x}>
                <Product x={x} />
                <Pack x={x} />
              </g>
            ))}
          </g>
        </g>
      </g>

      {/* Selagem */}
      <path d={`M${JAW.x} ${FILM_Y - 2}V${BELT_Y}`} className="ml-seal" />

      {/* Mordaça rotativa = símbolo Evoutech */}
      <g transform={`translate(${JAW.x} ${JAW.y})`}>
        <g className="ml-jaw">
          <path
            d={LOGO_PATH}
            transform={`scale(${JAW.scale}) translate(${-LOGO_CENTER.x} ${-LOGO_CENTER.y})`}
            className="ml-logo"
          />
        </g>
      </g>

      <Callout n="01" label="FILME" x={40} y={66} d="M108 62h30" />
      <Callout n="02" label="ALIMENTAÇÃO" x={40} y={186} d="M112 196v30" />
      <Callout n="03" label="SELAGEM ROTATIVA" x={496} y={84} d="M480 80h8" />
      <Callout n="04" label="SAÍDA" x={572} y={186} d="M600 196v26" />
    </svg>
  );
}
