import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "About me", href: "#about-me" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "/services", isRoute: true },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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
          {/* Logo */}
          <FadeIn delay={0} y={-16}>
            <a
              href="/"
              className="font-black tracking-widest text-sm md:text-base"
              style={{ color: "var(--page-fg)", letterSpacing: "0.18em" }}
            >
              The Vinh
            </a>
          </FadeIn>

          {/* Desktop nav — centrado absolutamente */}
          <FadeIn
            delay={0.05}
            y={-16}
            className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-xs lg:text-[0.8rem] font-semibold tracking-widest transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--page-fg)" }}
              >
                {item.label}
                {item.isRoute && <ArrowUpRight className="w-3.5 h-3.5 opacity-60 -mt-0.5" />}
              </a>
            ))}
          </FadeIn>

          {/* Right: theme toggle + hamburger mobile */}
          <FadeIn delay={0.1} y={-16} className="flex items-center gap-3 md:gap-4">
            <div className="md:hidden flex items-center z-50" id="menuToggle">
              <input
                id="checkbox"
                type="checkbox"
                checked={isMenuOpen}
                onChange={() => setIsMenuOpen(!isMenuOpen)}
              />
              <label className="toggle" htmlFor="checkbox">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
              </label>
            </div>
            <ThemeToggle />
          </FadeIn>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--page-bg)" }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-3xl font-semibold tracking-widest transition-opacity duration-200"
            style={{ color: "var(--page-fg)" }}
          >
            {item.label}
            {item.isRoute && <ArrowUpRight className="w-6 h-6 opacity-60" />}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>
        {/* Spacer for fixed navbar */}
        <div className="pt-20 md:pt-28" />

        {/* Heading */}
        <div className="overflow-hidden flex-1 flex flex-col justify-center items-center px-4">
          <FadeIn delay={0.15} y={40} className="text-center">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              The Vinh Vuong
            </h1>
            <p
              className="font-light leading-relaxed mt-6 mx-auto max-w-[600px] text-center"
              style={{
                color: "var(--page-fg)",
                fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                opacity: 0.65,
              }}
            >
              Full-time student in Computer Science & Technology, looking for an intership for Winter 2026 and Summer 2026 or an entry job for web-development.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn
            delay={0.4}
            y={20}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              id="btn-download-cv"
              href="/The vinh resume - Latex.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 md:px-10 md:py-3.5 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
              style={{
                background:
                  "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                boxShadow:
                  "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                outline: "2px solid #ffffff",
                outlineOffset: "-3px",
                color: "#fff",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

            <a
              id="btn-contact-hero"
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 md:px-10 md:py-3.5 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-80"
              style={{
                border: "1px solid var(--hairline)",
                color: "var(--page-fg)",
                background: "transparent",
              }}
            >
              Contact me
            </a>
          </FadeIn>
        </div>

        {/* Scroll arrow only */}
        <FadeIn delay={0.7} y={10} className="pb-8 flex justify-center">
          <div className="flex flex-col items-center opacity-35" style={{ color: "var(--page-fg)" }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
