import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Javier Castillo" },
      {
        name: "description",
        content:
          "Servicios de desarrollo de software ofrecidos por Javier Castillo: desarrollo frontend, backend, DevOps, optimización de rendimiento y consultoría técnica.",
      },
      { property: "og:title", content: "Servicios — Javier Castillo" },
    ],
  }),
  component: ServiciosPage,
});

const navItems = [
  { label: "INICIO", href: "/" },
  { label: "SOBRE MÍ", href: "/#sobre-mi" },
  { label: "EXPERIENCIA", href: "/#experiencia" },
  { label: "PROYECTOS", href: "/#proyectos" },
  { label: "CONTACTO", href: "#contacto" },
];

function ServiciosPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ background: "var(--page-bg)", overflowX: "clip" }}>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-xl" : "py-6 md:py-8"
        }`}
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--page-bg) 80%, transparent)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--hairline)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a
            href="/"
            className="font-black tracking-widest text-sm md:text-base"
            style={{ color: "var(--page-fg)", letterSpacing: "0.18em" }}
          >
            Javier
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs lg:text-[0.8rem] font-semibold tracking-widest transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--page-fg)" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Page spacer */}
      <div className="pt-24 md:pt-32" />

      {/* Services content */}
      <ServicesSection />

      {/* Contact + footer */}
      <ContactSection />
    </main>
  );
}
