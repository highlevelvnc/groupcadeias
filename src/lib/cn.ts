import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Concatena classes Tailwind com merge inteligente —
 * resolve conflitos como `cn("p-4", isLarge && "p-8") → "p-8"`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
