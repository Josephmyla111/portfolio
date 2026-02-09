"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { MapPin, FileText, Mail, Phone, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    icon: Phone,
    label: "Phone",
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    value: profile.phone,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: profile.linkedIn,
    value: "Connect on LinkedIn",
  },
  {
    icon: MapPin,
    label: "Location",
    href: null,
    value: profile.location,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border/50 bg-muted/30 py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact Details
          </h3>
          <div className="flex flex-wrap items-center gap-6 gap-y-4">
            {contactLinks.map(({ icon: Icon, label, href, value }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                  aria-label={`${label}: ${value}`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  <span>{value}</span>
                </a>
              ) : (
                <span
                  key={label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {value}
                </span>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/resume"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileText className="h-4 w-4" aria-hidden />
              View Resume
            </Link>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
