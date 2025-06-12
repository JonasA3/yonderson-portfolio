import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx (for conditionals and arrays),
 * then merges conflicting Tailwind classes using tailwind-merge.
 *
 * Example: cn("px-4", condition && "px-8") → "px-8"
 */
export const cn = (...inputs: Parameters<typeof clsx>): string => {
  return twMerge(clsx(...inputs));
};
