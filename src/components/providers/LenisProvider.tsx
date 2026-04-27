"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

/**
 * Smooth scroll global com Lenis.
 * - Curvas de easing premium (sentem-se a fluir)
 * - Respeita prefers-reduced-motion (auto-desativa)
 * - Intercepta anchors (#xxx) e faz scroll suave com offset do header fixo
 * - Marca <html class="lenis-disabled"> em fallback para CSS smooth nativo
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Lenis é desativado em mobile/tablet:
    //  - O scroll nativo iOS/Android tem momentum impecável e pull-to-refresh
    //  - Lenis em touch pode parecer "drag-y" e competir com o scroll nativo
    //  - Devices low-end ganham FPS sem o raf loop extra
    const isTouchOrMobile = window.matchMedia(
      "(hover: none), (max-width: 1023px)",
    ).matches;

    if (prefersReducedMotion || isTouchOrMobile) {
      document.documentElement.classList.add("lenis-disabled");
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      autoRaf: true,
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Intercept anchor clicks e scroll com offset do header (96px)
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (!element) return;

      event.preventDefault();
      lenis.scrollTo(element, { offset: -96, duration: 1.2 });

      // Atualiza URL sem disparar scroll do browser
      history.pushState(null, "", href);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
