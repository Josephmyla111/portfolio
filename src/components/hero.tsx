"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Mail, Download, MapPin, Linkedin } from "lucide-react";

const motionConfig = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center px-6 pt-24 pb-16 sm:px-8 bg-hero-gradient bg-mesh-pattern"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...motionConfig}>
          <h1
            id="hero-heading"
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mb-2 text-lg text-primary font-medium sm:text-xl">
            {profile.headline}
          </p>
          <p className="mb-6 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden />
            {profile.location}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
            {profile.summaryShort}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="gap-2">
              <a href="#contact">
                <Mail className="h-4 w-4" aria-hidden />
                Contact
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="/Joseph_Raju_Myla_CV.pdf" download="Joseph_Raju_Myla_CV.pdf">
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
