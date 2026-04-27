import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Tamanho do SVG em px */
  size?: number;
  /** Cor primária (linhas) — passa qualquer cor CSS */
  primary?: string;
  /** Cor secundária (acentos) */
  accent?: string;
};

/**
 * Loader visual com tema construção/engenharia.
 * Anima:
 *  - Linhas do "blueprint" a desenharem-se em loop (stroke-dashoffset)
 *  - Grua/plataforma a subir suavemente
 *  - Pontos de medição a "blink"
 *
 * 100% SVG inline — sem dependências, peso zero, escalável a qualquer tamanho.
 */
export default function ConstructionLoader({
  className,
  size = 96,
  primary = "currentColor",
  accent = "rgba(255,255,255,0.6)",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="A carregar — Group Cadeias"
      className={cn("overflow-visible", className)}
    >
      {/* Base / chão */}
      <line
        x1="10"
        y1="80"
        x2="90"
        y2="80"
        stroke={primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Pilares blueprint que se desenham (stroke dash anim) */}
      <g
        stroke={primary}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      >
        <path
          d="M22 80 L22 30 L78 30 L78 80"
          strokeDasharray="240"
          strokeDashoffset="240"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="240"
            to="0"
            dur="1.6s"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M22 50 L78 50"
          strokeDasharray="60"
          strokeDashoffset="60"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="60"
            to="0"
            dur="1.6s"
            begin="0.45s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M50 30 L50 80"
          strokeDasharray="50"
          strokeDashoffset="50"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="50"
            to="0"
            dur="1.6s"
            begin="0.9s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Pontos de medição */}
      <g fill={accent}>
        <circle cx="22" cy="80" r="2">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="78" cy="80" r="2">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="30" r="2">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0.9s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Grua simplificada — baliza/lança que oscila e gancho a subir/descer */}
      <g stroke={primary} strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.95">
        <line x1="50" y1="30" x2="50" y2="14" />
        <line x1="50" y1="14" x2="68" y2="14" />
        <line x1="50" y1="14" x2="42" y2="22" />
      </g>

      {/* Gancho que sobe e desce */}
      <g>
        <line
          x1="64"
          y1="14"
          x2="64"
          y2="35"
          stroke={accent}
          strokeWidth="1"
          strokeLinecap="round"
        >
          <animate
            attributeName="y2"
            values="22;42;22"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </line>
        <rect
          x="61"
          y="35"
          width="6"
          height="4"
          rx="1"
          fill={primary}
        >
          <animate
            attributeName="y"
            values="22;42;22"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}
