"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { useState, useCallback } from "react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedIn,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export function ContactCard() {
  const motionConfig = useMotionConfig();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 800);
  }, []);

  return (
    <motion.div {...motionConfig} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-4" role="list">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <span className="text-sm text-muted-foreground">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        className="block font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={`${label}: ${value}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-4 text-lg font-semibold">Send a Message</h3>
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-lg border border-green-500/50 bg-green-500/10 p-6 text-center text-green-700 dark:text-green-300"
              >
                Thank you! Your message has been sent. I&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
                    Name
                  </label>
                  <Input id="contact-name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
