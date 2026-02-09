"use client";

import { useReducedMotion } from "framer-motion";

export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" as const },
  };
}

export function useItemMotionConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-30px" },
    transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" as const },
  };
}
