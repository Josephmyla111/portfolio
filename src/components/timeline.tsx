"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";
import { MapPin, Building2, ListChecks, Star } from "lucide-react";
import { useItemMotionConfig } from "@/lib/motion";

export function Timeline() {
  const motionItem = useItemMotionConfig();
  return (
    <div className="space-y-12">
      {profile.experience.map((job) => (
        <motion.article key={job.company} {...motionItem}>
          <Card className="overflow-hidden border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <Building2 className="h-5 w-5 text-primary" aria-hidden />
                    {job.company}
                  </h3>
                  <p className="text-muted-foreground">{job.title}</p>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {job.dates}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" aria-hidden />
                  {job.location}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  <ListChecks className="h-4 w-4" aria-hidden />
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-primary">
                  <Star className="h-4 w-4" aria-hidden />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex gap-2 font-medium">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.article>
      ))}
    </div>
  );
}
