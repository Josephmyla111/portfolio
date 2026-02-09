import { profile } from "@/data/profile";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Resume | Joseph Raju Myla",
  description:
    "Resume - Joseph Raju Myla - Trust & Safety | Content Review Specialist | Data-Driven Analyst",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar (hidden on print) */}
      <div className="no-print fixed left-0 right-0 top-0 z-50 border-b bg-background/95 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* Optional: Print button (client-side only). If you don't need it, remove this block */}
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent no-print"
          >
            Print / Save PDF
          </button>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 pb-16 pt-24 print:pt-0">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-lg font-medium text-primary">{profile.headline}</p>
          <p className="mt-1 text-muted-foreground">{profile.location}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>{profile.phone}</span>
            <span>·</span>
            <a className="hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <span>·</span>
            <a
              className="hover:underline"
              href={profile.linkedIn.startsWith("http") ? profile.linkedIn : `https://${profile.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold">
            Professional Summary
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
        </section>

        {/* Competencies */}
        <section className="mb-8">
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold">
            Core Competencies
          </h2>
          <ul className="flex flex-wrap gap-2">
            {profile.competencies.map((c) => (
              <li
                key={c}
                className="rounded bg-secondary px-2 py-1 text-sm text-secondary-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-xl font-semibold">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {profile.experience.map((job) => (
              <div key={`${job.company}-${job.dates}`} className="break-inside-avoid">
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
                    <li key={`${job.company}-r-${i}`}>{r}</li>
                  ))}
                </ul>

                <p className="mb-1 text-sm font-medium">Key Achievements:</p>
                <ul className="ml-4 list-disc space-y-1">
                  {job.achievements.map((a, i) => (
                    <li key={`${job.company}-a-${i}`}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Education</h2>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={`${edu.institution}-${edu.dates}`}>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.institution} · {edu.dates}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold">
            Certifications
          </h2>
          <ul className="space-y-1">
            {profile.certifications.map((c, i) => (
              <li key={`${c.name}-${i}`}>{c.name}</li>
            ))}
          </ul>
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="mb-3 border-b pb-2 text-xl font-semibold">
            Additional Information
          </h2>
          <ul className="list-disc space-y-1 pl-4">
            {profile.additionalInfo.map((item, i) => (
              <li key={`add-${i}`}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
