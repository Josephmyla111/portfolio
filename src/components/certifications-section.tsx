"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useItemMotionConfig } from "@/lib/motion";
import { Award } from "lucide-react";

export function CertificationsSection({ certifications }: { certifications: readonly { name: string }[] }) {
  const motionItem = useItemMotionConfig();
  return (
    <div className="flex flex-wrap gap-3">
      {certifications.map((cert) => (
        <motion.div key={cert.name} {...motionItem}>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
            <Award className="h-4 w-4" aria-hidden />
            {cert.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}
