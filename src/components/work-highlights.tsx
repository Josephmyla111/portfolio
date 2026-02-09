"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { useItemMotionConfig } from "@/lib/motion";
import { Trophy } from "lucide-react";

export function WorkHighlights() {
  const motionItem = useItemMotionConfig();
  const achievements = profile.experience.flatMap((job) =>
    job.achievements.map((a) => ({ company: job.company, achievement: a }))
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {achievements.map(({ company, achievement }, i) => (
        <motion.div key={i} {...motionItem}>
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <Trophy className="h-4 w-4 text-primary" aria-hidden />
                {company}
              </p>
              <p className="mt-2 font-medium">{achievement}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
