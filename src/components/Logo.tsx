type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Logo "Group Cadeias" em SVG inline — leve, escalável e perfeito a qualquer DPI.
 * O símbolo é uma reinterpretação do "S" estilizado da identidade visual da empresa.
 * Para usar a logo definitiva fornecida pela empresa, substituir por <Image src="/images/logo.svg" /> futuramente.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const markFill = isLight ? "#FFFFFF" : "#0055A4";
  const markFillSecondary = isLight ? "#A7C8FF" : "#001E40";
  const wordmarkColor = isLight ? "text-white" : "text-brand-900";
  const subColor = isLight ? "text-white/70" : "text-brand-600";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="48" height="48" rx="8" fill={markFill} />
        <path
          d="M34 16H20a4 4 0 0 0 0 8h8a4 4 0 0 1 0 8H14"
          stroke="#FFFFFF"
          strokeWidth="3.6"
          strokeLinecap="square"
          fill="none"
        />
        <rect x="2" y="2" width="44" height="44" rx="6" fill="none" stroke={markFillSecondary} strokeWidth="1.5" opacity="0.18" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[11px] font-medium uppercase tracking-[0.22em] ${subColor}`}>
          Group
        </span>
        <span className={`font-display text-lg font-bold uppercase tracking-tight ${wordmarkColor}`}>
          Cadeias
        </span>
      </span>
    </span>
  );
}
