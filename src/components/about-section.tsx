"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/lib/motion";
import { profile } from "@/data/profile";
import { UserCheck } from "lucide-react";

const AVATAR_URL =
  "https://ui-avatars.com/api/?name=Joseph+Myla&size=400&background=0f766e&color=fff&bold=true&font-size=0.4";

export function AboutSection() {
  const motionConfig = useMotionConfig();
  const imageSrc = profile.profileImage || AVATAR_URL;

  return (
    <motion.div {...motionConfig} className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      <div className="shrink-0">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl ring-2 ring-primary/10 sm:h-56 sm:w-56 lg:mx-0 lg:h-64 lg:w-64">
          <Image
            src={imageSrc}
            alt={`${profile.name} - Professional photo`}
            fill
            sizes="(max-width: 768px) 224px, 256px"
            className="object-cover"
            priority
            unoptimized={imageSrc.startsWith("http")}
          />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          {profile.summary}
        </p>
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
              <UserCheck className="h-4 w-4 shrink-0" aria-hidden />
            </span>
            Core Competencies
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.competencies.map((c) => (
              <li key={c}>
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-secondary/80 px-3 py-1.5 text-sm backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`${c} - View on LinkedIn`}
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
