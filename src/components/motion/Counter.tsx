"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
};

/**
 * Conta de `from` até `to` quando entra no viewport.
 * Easing exponencial — tem feel cinematográfico, sente "premium".
 * Respeita reduced-motion: salta direto para o valor final.
 */
export default function Counter({
  to,
  from = 0,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const value = useMotionValue(from);
  const display = useTransform(value, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("pt-PT"),
  );

  useEffect(() => {
    if (!inView) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      value.set(to);
      return;
    }

    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // exp-out
    });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  // Atualizar texto manualmente (motion-value → DOM)
  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${latest}${suffix}`;
    });
  }, [display, prefix, suffix]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {decimals > 0 ? from.toFixed(decimals) : from}
      {suffix}
    </span>
  );
}
