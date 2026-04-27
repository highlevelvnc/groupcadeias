/**
 * Ícones SVG inline — leves, sem dependências, traçados consistentes.
 * Stroke 1.6 / linecap round / linejoin round — feel técnico/blueprint.
 */

type IconProps = {
  className?: string;
  size?: number;
};

const baseProps = (size = 24, className = "") => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className,
});

export const IconBuilding = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2" />
  </svg>
);

export const IconPaintRoller = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <rect x="3" y="3" width="18" height="6" rx="1.5" />
    <path d="M19 9v2a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v1" />
    <rect x="9" y="14" width="2" height="7" rx="1" />
  </svg>
);

export const IconBlueprint = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M4 4h12l4 4v12H4z" />
    <path d="M16 4v4h4" />
    <path d="M8 12h8M8 16h5" />
    <circle cx="9" cy="9" r="1.2" />
  </svg>
);

export const IconHardHat = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M3 18h18" />
    <path d="M5 18a7 7 0 0 1 14 0" />
    <path d="M9 11V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
    <path d="M12 11V6" />
  </svg>
);

export const IconClipboard = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4h6v3H9z" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

export const IconBriefcase = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </svg>
);

export const IconShieldCheck = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconTarget = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

export const IconClock = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconSparkles = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
    <path d="M12 8l1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5z" />
  </svg>
);

export const IconHeadset = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M4 13a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-1v-6h4" />
    <path d="M4 13v3a3 3 0 0 0 3 3h1v-6H4" />
  </svg>
);

export const IconUsers = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15 20a5 5 0 0 1 7 0" />
  </svg>
);

export const IconPhone = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconMail = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconMapPin = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const IconWhatsApp = ({ className, size }: IconProps) => (
  <svg
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3z" />
    <path d="M20.5 3.5A11.95 11.95 0 0 0 12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 0 0 12 24a12 12 0 0 0 8.5-20.5zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.6 1 1-3.5-.2-.4A9.8 9.8 0 1 1 12 21.8z" />
  </svg>
);

export const IconArrowRight = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconMenu = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconFacebook = ({ className, size }: IconProps) => (
  <svg
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.7c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z" />
  </svg>
);

export const IconCheck = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const IconSend = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M3 12l18-9-7 18-3-7-8-2z" />
    <path d="M11 13l3-3" />
  </svg>
);

export const IconStar = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.9z" />
  </svg>
);

export const IconExternalLink = ({ className, size }: IconProps) => (
  <svg {...baseProps(size, className)}>
    <path d="M14 4h6v6" />
    <path d="M10 14L20 4" />
    <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
  </svg>
);
