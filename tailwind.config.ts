import type { Config } from "tailwindcss";

// Design tokens alinhados com a identidade Group Cadeias
// (azul escuro institucional + azul médio + branco)
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Azul escuro institucional — usado em headings, áreas escuras e CTA secundário
          900: "#001E40",
          800: "#002B5C",
          700: "#003366",
          // Azul médio — botões primários e elementos interativos
          600: "#0055A4",
          500: "#175EAD",
          400: "#3A7BC8",
          // Azul claro — accents e backgrounds suaves
          300: "#72AAFE",
          200: "#A7C8FF",
          100: "#D5E3FF",
          50: "#F0F5FF",
        },
        ink: {
          900: "#0B1220",
          800: "#111C2D",
          700: "#1E293B",
          600: "#334155",
          500: "#475569",
          400: "#64748B",
          300: "#94A3B8",
          200: "#CBD5E1",
          100: "#E2E8F0",
          50: "#F1F5F9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "label-caps": [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        precision: "0px 4px 12px rgba(0, 51, 102, 0.08)",
        "precision-lg": "0px 16px 48px rgba(0, 51, 102, 0.12)",
        "precision-xl": "0px 24px 64px rgba(0, 30, 64, 0.18)",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-overlay":
          "linear-gradient(135deg, rgba(0, 30, 64, 0.92) 0%, rgba(0, 51, 102, 0.78) 60%, rgba(0, 85, 164, 0.65) 100%)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "scroll-dot": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        "ken-burns": "ken-burns 14s ease-out forwards",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
