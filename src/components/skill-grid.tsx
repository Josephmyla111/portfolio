"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { useItemMotionConfig } from "@/lib/motion";
import { ExternalLink, Shield, Database, BarChart2, Users } from "lucide-react";

const SKILL_ICONS: Record<string, typeof Shield> = {
  "Trust & Safety": Shield,
  "Data Quality": Database,
  "Analysis & Reporting": BarChart2,
  Collaboration: Users,
};

export function SkillGrid() {
  const motionItem = useItemMotionConfig();
  const skillGroups = Object.entries(profile.skills);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {skillGroups.map(([groupName, skills]) => {
          const Icon = SKILL_ICONS[groupName] || Database;
          return (
          <motion.div key={groupName} {...motionItem}>
            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {groupName}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <a
                      key={skill}
                      href={profile.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-secondary px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label={`${skill} - View on LinkedIn`}
                    >
                      {skill}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
        })}
      </div>
      <p className="text-center">
        <a
          href={profile.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          View full profile on LinkedIn
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </p>
    </div>
  );
}
