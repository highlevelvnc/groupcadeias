"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  useCallback,
  useRef,
} from "react";

import { cn } from "@/lib/cn";

type MagneticButtonProps<E extends ElementType = "a"> = {
  as?: E;
  children: ReactNode;
  className?: string;
  /** Força do efeito magnético (0 a 1, default 0.4) */
  strength?: number;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "children" | "className">;

/**
 * Wrapper que aplica efeito magnético ao seu conteúdo.
 * O cursor "atrai" o botão — feel premium muito usado em estúdios Awwwards.
 * Auto-desativa em touch devices (sem hover).
 */
export default function MagneticButton<E extends ElementType = "a">({
  as,
  children,
  className,
  strength = 0.4,
  ...rest
}: MagneticButtonProps<E>) {
  const Component = (as ?? "a") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      // Em touch devices não há hover real — não distorcer
      if (window.matchMedia("(hover: none)").matches) return;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      x.set(relX * strength);
      y.set(relY * strength);
    },
    [strength, x, y],
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.span
      ref={ref as never}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-flex"
    >
      <Component className={cn(className)} {...rest}>
        <span className="pointer-events-none inline-flex items-center gap-2">
          {children}
        </span>
      </Component>
    </motion.span>
  );
}
