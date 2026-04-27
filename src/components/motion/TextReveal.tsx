"use client";

import { motion, useInView } from "framer-motion";
import { createElement, useRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type TextRevealProps = {
  children: string;
  /** Quanto cada palavra demora a entrar (segundos) */
  duration?: number;
  /** Atraso entre palavras (segundos) */
  stagger?: number;
  /** Delay antes da animação começar */
  delay?: number;
  className?: string;
  /** Suporta tags semânticas: h1, h2, p, span, etc. */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

/**
 * Headline com reveal palavra-a-palavra com stagger.
 * Cada palavra "sobe" de baixo com mask reveal — feel editorial premium.
 *
 * Suporta `<strong>`/highlights via children string + classes específicas? Não — para
 * destacar partes, partir o texto em vários <TextReveal> consecutivos.
 */
export default function TextReveal({
  children,
  duration = 0.7,
  stagger = 0.05,
  delay = 0,
  className,
  as = "span",
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words = children.split(/(\s+)/); // mantém espaços como tokens

  const content = (
    <>
      {words.map((word, idx) => {
        if (/^\s+$/.test(word)) return word;
        return (
          <span
            key={idx}
            className="inline-block overflow-hidden align-bottom"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration,
                delay: delay + (idx / 2) * stagger,
                ease: [0.22, 1, 0.36, 1], // exp-out
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </>
  );

  return createElement(
    as,
    { ref, className: cn(className) },
    content,
  );
}
