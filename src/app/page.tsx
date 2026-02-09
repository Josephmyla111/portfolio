import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { SkillGrid } from "@/components/skill-grid";
import { EducationSection } from "@/components/education-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactCard } from "@/components/contact-card";
import { WorkHighlights } from "@/components/work-highlights";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Section id="about" title="About" icon="user">
          <AboutSection />
        </Section>

        <Section id="experience" title="Experience" variant="accent" icon="briefcase">
          <Timeline />
        </Section>

        <Section id="work-highlights" title="Work Highlights" icon="trophy">
          <p className="mb-6 text-muted-foreground">
            Key achievements from my professional experience.
          </p>
          <WorkHighlights />
        </Section>

        <Section id="skills" title="Skills" variant="accent" icon="wrench">
          <SkillGrid />
        </Section>

        <Section id="education" title="Education" icon="graduation">
          <EducationSection />
        </Section>

        <Section
          id="certifications"
          title="Certifications"
          variant="accent"
          icon="award"
        >
          <CertificationsSection certifications={profile.certifications} />
        </Section>

        <Section id="contact" title="Contact" variant="accent" icon="mail">
          <ContactCard />
        </Section>
      </main>

      <Footer />
    </>
  );
}
