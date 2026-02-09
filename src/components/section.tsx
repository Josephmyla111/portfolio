"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/lib/motion";
import { User, Briefcase, Trophy, Wrench, GraduationCap, Award, Mail } from "lucide-react";

const ICON_MAP = {
  user: User,
  briefcase: Briefcase,
  trophy: Trophy,
  wrench: Wrench,
  graduation: GraduationCap,
  award: Award,
  mail: Mail,
} as const;

type IconKey = keyof typeof ICON_MAP;

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
  icon?: IconKey;
};

export function Section({ id, title, children, className = "", variant = "default", icon }: SectionProps) {
  const motionConfig = useMotionConfig();
  const Icon = icon ? ICON_MAP[icon] : null;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-16 md:py-24 ${variant === "accent" ? "bg-section-gradient" : ""} ${className}`}
    >
      <motion.div
        {...motionConfig}
        className="mx-auto max-w-4xl px-6 sm:px-8"
      >
        <h2
          id={`${id}-heading`}
          className="mb-10 flex items-center gap-3 text-3xl font-bold tracking-tight md:text-4xl"
        >
          {Icon && (
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
          )}
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
