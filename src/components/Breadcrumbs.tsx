import Link from "next/link";
import Script from "next/script";

import { siteConfig } from "@/lib/site-config";

export type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  /** Se true, fica claro/transparente (sobre hero escuro) */
  variant?: "light" | "dark";
};

/**
 * Breadcrumbs com fallback de hierarquia + JSON-LD `BreadcrumbList` para SEO.
 * Suporta variant "light" para usar sobre fundos escuros (Page Heros).
 */
export default function Breadcrumbs({ items, variant = "dark" }: Props) {
  const isLight = variant === "light";
  const baseColor = isLight ? "text-white/70" : "text-ink-500";
  const hoverColor = isLight ? "hover:text-white" : "hover:text-brand-600";
  const sepColor = isLight ? "text-white/30" : "text-ink-300";
  const activeColor = isLight ? "text-white" : "text-brand-900";

  // JSON-LD para Google entender hierarquia
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <nav aria-label="Caminho" className="font-display text-xs uppercase tracking-wider">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link href={item.href} className={`${baseColor} ${hoverColor} transition-colors`}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? activeColor : baseColor}>{item.label}</span>
                )}
                {!isLast && <span aria-hidden className={sepColor}>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>

      <Script
        id={`ld-breadcrumb-${items.map((i) => i.label).join("-")}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
