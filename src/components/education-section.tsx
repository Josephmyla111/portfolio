"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { useItemMotionConfig } from "@/lib/motion";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const motionItem = useItemMotionConfig();
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {profile.education.map((edu) => (
        <motion.article key={edu.institution} {...motionItem}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
                {edu.degree}
              </h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="mt-1 text-sm text-muted-foreground">{edu.dates}</p>
            </CardContent>
          </Card>
        </motion.article>
      ))}
    </div>
  );
}
