"use client";

import { useEffect, useState } from "react";

/**
 * Hook SSR-safe que devolve `true`/`false` consoante a media query.
 *
 * Estado inicial é SEMPRE `false` no servidor e no primeiro render do cliente,
 * para evitar hydration mismatch. Atualiza no useEffect com o valor real.
 *
 * Uso:
 *   const isDesktop = useMediaQuery("(min-width: 1024px)");
 *   const isMobile = useMediaQuery("(max-width: 768px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Atalho — true em ≥1024px (igual ao breakpoint `lg` do Tailwind). */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}

/** Atalho — true em ≤767px (mobile real, não tablet). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}
