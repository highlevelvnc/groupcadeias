"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type ParallaxProps = {
  children: ReactNode;
  /** -1 a 1 — valores positivos sobem, negativos descem ao fazer scroll */
  speed?: number;
  className?: string;
  /** Distância máxima em pixels (controla amplitude) */
  distance?: number;
};

/**
 * Parallax leve baseado no scroll do viewport.
 * Usa Framer Motion `useScroll` ancorado ao próprio elemento — performance GPU-only.
 * Recomendado para imagens de fundo, layers decorativas, "floating cards".
 */
export default function Parallax({
  children,
  speed = 0.3,
  className,
  distance = 100,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [distance * speed, -distance * speed],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
