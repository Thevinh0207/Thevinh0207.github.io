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
      { title: "Javier Castillo — Desarrollador Full Stack" },
      {
        name: "description",
        content:
          "Javier Castillo es un desarrollador full stack con experiencia en React, Next.js, Python y AWS — construyendo productos digitales limpios, escalables e inolvidables desde Cartagena, Colombia.",
      },
      { property: "og:title", content: "Javier Castillo — Desarrollador Full Stack" },
      {
        property: "og:description",
        content:
          "Portfolio de Javier Castillo, desarrollador full stack enfocado en ingeniería frontend, arquitectura cloud y sistemas.",
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
