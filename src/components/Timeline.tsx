"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { TIMELINE } from "@/lib/company-data";

/**
 * Timeline vertical com linha que se preenche conforme o scroll.
 * Cada evento aparece em fade-up + stagger ao entrar no viewport.
 * Eventos `highlight` ficam em destaque visual.
 */
export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // Linha vertical que se desenha à medida do scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-caps text-brand-600">A nossa história</span>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
            Construímos confiança ao longo dos anos
          </h2>
          <div className="mx-auto mt-5 rule-brand" />
          <p className="mt-6 font-body text-lg leading-relaxed text-ink-500">
            Cada projeto soma à nossa história — desde a fundação até hoje, mantemos a mesma exigência técnica.
          </p>
        </Reveal>

        <div
          ref={containerRef}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          {/* Linha base */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-ink-100 lg:left-1/2 lg:-translate-x-1/2"
          />
          {/* Linha que se preenche com o scroll */}
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-brand-600 via-brand-500 to-brand-700 lg:left-1/2 lg:-translate-x-1/2"
          />

          <ul className="space-y-12 lg:space-y-20">
            {TIMELINE.map((event, idx) => (
              <Reveal
                as="li"
                key={event.year}
                delay={(idx % 4) as 0 | 1 | 2 | 3}
                className={cn(
                  "relative pl-12 lg:pl-0",
                  idx % 2 === 0 ? "lg:pr-[52%] lg:text-right" : "lg:pl-[52%]",
                )}
              >
                {/* Ponto na linha */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-4 top-2 -translate-x-1/2 rounded-full border-2 border-white shadow-precision lg:left-1/2",
                    event.highlight
                      ? "h-5 w-5 bg-brand-600 ring-4 ring-brand-200"
                      : "h-4 w-4 bg-brand-700",
                  )}
                />

                <p
                  className={cn(
                    "font-display text-xs font-semibold uppercase tracking-[0.18em]",
                    event.highlight ? "text-brand-600" : "text-ink-400",
                  )}
                >
                  {event.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-brand-900 sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-2 font-body text-base leading-relaxed text-ink-500">
                  {event.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
