"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import ConstructionLoader from "@/components/loaders/ConstructionLoader";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

const SESSION_KEY = "gc-intro-shown";
const MIN_DURATION = 1400; // ms — duração mínima visível para não "piscar"

/**
 * Overlay de intro mostrado APENAS na primeira visita da sessão.
 *
 * Comportamento:
 *  - Bloqueia interação visual (z-index máximo) durante a entrada
 *  - Aguarda window.load + duração mínima
 *  - Sai com curtain reveal (slide-up fluido)
 *  - Marca sessionStorage para não voltar a aparecer na sessão
 *  - Respeita prefers-reduced-motion (intro instantâneo)
 *
 * Para desativar globalmente, basta remover do layout.tsx.
 */
export default function IntroLoader() {
  // null = ainda não decidimos, true = mostrar, false = não mostrar
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Em mobile o intro loader é desativado por completo:
    // bloquear o LCP em conexões 4G arruina o Lighthouse e a perceção do user.
    // Os utilizadores mobile esperam landing pages instantâneas.
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    if (alreadyShown || prefersReduced || isMobile) {
      setShow(false);
      return;
    }

    setShow(true);

    const start = Date.now();
    const dismiss = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(MIN_DURATION - elapsed, 0);
      setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setShow(false);
      }, wait);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
      // Fallback se "load" demorar muito (imagem grande no hero, etc.)
      const fallback = window.setTimeout(dismiss, 3500);
      return () => {
        window.removeEventListener("load", dismiss);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-900"
        >
          {/* Blueprint grid de fundo */}
          <div className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid-32 opacity-15" />

          {/* Faixa de luz que cruza ao sair */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-200/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <Logo variant="light" />

            <div className="mt-10 text-brand-200">
              <ConstructionLoader
                size={120}
                primary="currentColor"
                accent="rgba(167,200,255,0.7)"
              />
            </div>

            <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              A preparar a obra…
            </p>
            <p className="mt-2 font-body text-xs text-white/40">
              {siteConfig.tagline}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
