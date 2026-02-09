import { profile } from "@/data/profile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Resume | Joseph Raju Myla",
  description: "Resume - Joseph Raju Myla - Trust & Safety | Content Review Specialist | Data-Driven Analyst",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="no-print fixed left-0 right-0 top-0 z-50 border-b bg-background/95 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild size="sm">
            <a href="/Joseph_Raju_Myla_CV.pdf" download="Joseph_Raju_Myla_CV.pdf">
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 pt-24 pb-16 print:pt-0">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-lg font-medium text-primary">{profile.headline}</p>
          <p className="mt-1 text-muted-foreground">{profile.location}</p>
          <p className="mt-2 text-sm">
            {profile.phone} · {profile.email} · {profile.linkedIn}
          </p>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold border-b pb-2">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">{profile.summary}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold border-b pb-2">Core Competencies</h2>
          <ul className="flex flex-wrap gap-2">
            {profile.competencies.map((c) => (
              <li key={c} className="rounded bg-secondary px-2 py-1 text-sm">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold border-b pb-2">Professional Experience</h2>
          <div className="space-y-6">
            {profile.experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{job.company}</h3>
                    <p className="text-muted-foreground">{job.title}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{job.dates}</span>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">{job.location}</p>
                <ul className="mb-2 ml-4 list-disc space-y-1">
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <p className="mb-1 text-sm font-medium">Key Achievements:</p>
                <ul className="ml-4 list-disc space-y-1">
                  {job.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold border-b pb-2">Education</h2>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.institution}>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution} · {edu.dates}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold border-b pb-2">Certifications</h2>
          <ul className="space-y-1">
            {profile.certifications.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold border-b pb-2">Additional Information</h2>
          <ul className="list-disc space-y-1 pl-4">
            {profile.additionalInfo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
