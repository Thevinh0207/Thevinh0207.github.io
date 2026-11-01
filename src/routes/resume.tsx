import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { ScrollProgressBar } from "@/components/portfolio/ScrollProgressBar";
import { FooterSection } from "@/components/portfolio/FooterSection";

const RESUME_PATH = "/The Vinh resume - Latex.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — The Vinh Vuong" },
      {
        name: "description",
        content: "The Vinh Vuong's resume — view inline or download.",
      },
      { property: "og:title", content: "Resume — The Vinh Vuong" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      style={{ background: "var(--page-bg)", overflowX: "clip" }}
      className="min-h-screen"
    >
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
            className="inline-flex items-center gap-2 font-black tracking-widest text-sm md:text-base hover:opacity-70 transition-opacity"
            style={{ color: "var(--page-fg)", letterSpacing: "0.18em" }}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            BACK
          </a>

          <span
            className="hidden md:block text-xs lg:text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--page-fg)", opacity: 0.6 }}
          >
            Resume
          </span>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={RESUME_PATH}
              download
              className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03]"
            >
              <Download className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
        <ScrollProgressBar />
      </nav>

      {/* Spacer for fixed nav */}
      <div className="pt-24 md:pt-28" />

      {/* PDF viewer */}
      <div className="px-4 pb-8 sm:px-6 md:px-10">
        <div
          className="w-full max-w-[850px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden border aspect-[8.5/11]"
          style={{
            borderColor: "var(--hairline)",
            background: "#ffffff",
          }}
        >
          <object
            data={RESUME_PATH}
            type="application/pdf"
            className="w-full h-full block"
            aria-label="The Vinh Vuong resume"
          >
            {/* Fallback shown when browser can't render PDFs inline */}
            <div
              className="flex flex-col items-center justify-center gap-4 p-8 text-center h-full"
              style={{ color: "#0C0C0C" }}
            >
              <p className="text-base sm:text-lg opacity-70">
                Your browser can't display PDFs inline.
              </p>
              <a
                href={RESUME_PATH}
                download
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" strokeWidth={2.5} />
                Download the resume
              </a>
            </div>
          </object>
        </div>
      </div>

        <FooterSection />
    </main>
  );
}
