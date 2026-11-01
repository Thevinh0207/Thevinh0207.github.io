import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Vinh Vuong - Computer Science Student" },
      {
        name: "description",
        content:
          "TODO.",
      },
      { property: "og:title", content: "The Vinh Vuong — Computer Science Student" },
      {
        property: "og:description",
        content:
          "The Vinh's Portfolio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ background: "var(--page-bg)", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
