import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Star } from "lucide-react";
import { LiveProjectButton } from "./LiveProjectButton";
import mariHacks from "@/assets/projects/mariehacks-demo.png";
import flutterFinanceTracker from "@/assets/projects/financetracker-demo.png";
import petConnect from "@/assets/projects/petconnect-demo.png";
import nailSalon from "@/assets/projects/nailsalon-demo.png";
import defaultProject from "@/assets/projects/default-project.jpg";
import slimIcon from "@/assets/techIcons/slim.svg";

const PROJECTS = [
  {
    num: "01",
    category: "Personal Project",
    name: "AI Study Assistant",
    highlighted: true,
    desc: "A gamified AI study companion that turns any topic, plus optional notes, PDFs, or slides into AI-generated study notes, flashcards, quizzes, and a personalized study plan, with a plant pet that grows as you study.",    
    bullets: [
      "End-to-end AI pipeline powered by Groq LLMs for notes, 1–30 flashcards, 1–20 quiz questions, and day-by-day study plans, with Tavily web research and PDF/PPTX/MD ingestion.",
      "Gamification layer with a coin economy, four upgrade tracks, and a plant pet whose XP and health react to study time and quiz accuracy unlocking seven tier skins from Bad to Legendary.",
      "Full Spotify Connect integration: OAuth login, encrypted token storage, device discovery and transfer, playlist/track search, and in-browser playback via the Web Playback SDK.",
      "Hardened FastAPI backend with JWT auth, bcrypt hashing, SlowAPI rate limits, upload magic-byte checks, Fernet-encrypted OAuth tokens, and pytest coverage against a stubbed AI stack."
    ],
    stack: [
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css"},
      { name: "JavaScript", slug: "javascript" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Spotify", slug: "spotify" },
      { name: "JWT", slug: "jsonwebtokens" },
      { name: "GroqAPI", slug: "postman" },
      { name: "Tavily", slug: "postman" }
    ],
    image: mariHacks,
    url: "https://github.com/gvogas/hacks",
  },
  {
    num: "02",
    category: "Personal Project",
    highlighted: true,
    name: "AI Room Planner Assistant",
    desc: "An AI-powered room planner that generates 3D room layouts and furniture arrangements based on user input, allowing users to visualize and customize their living spaces in a virtual environment.",
    bullets: [
      "AI-driven room layout generation using natural language processing and computer vision techniques.",
      "Interactive 3D visualization of room layouts with real-time customization options.",
      "Integration with furniture databases for accurate representation of furniture items.",
      "User-friendly interface for easy navigation and manipulation of room designs."
    ],
    stack: [

    ],
    image: null,
    isBlocked: true,
  },
  {
    num: "03",
    category: "School Group Project",
    highlighted: true,
    name: "JATV Finance Tracker",
    desc: "A cross-platform personal finance tracker built with Flutter and Firebase, combining transaction logging, goal-based savings, category budgets, and family-shared expenses behind a single themable, multilingual interface.",
    bullets: [
      "Full transaction suite with income, expense, and transfer types, per-user auto-generated categories, rich filter and sort sheets, date-range presets, and pull-to-refresh history search.",
      "Goals and budgets system with weekly/monthly/yearly budget tracking, savings goals that auto-create audit-trail transfer transactions, and insight messages projecting when each goal will complete.",
      "Family plan feature with shared household budgets, per-member allocations, email-based invites, admin roles, and shared-expense logging with per-person splits.",
      "Shipped with full dark mode, 7 interface languages, Firebase email verification and password-reset flows, and a clean MVVM architecture separating Views, ViewModels, Repositories, and Models.",
    ],
    stack: [
      { name: "Flutter", slug: "flutter" },
      { name: "Dart", slug: "dart" },
      { name: "Firebase", slug: "firebase" },
      { name: "Material Design", slug: "materialdesign" },
    ],
    image: flutterFinanceTracker,
    url: "https://github.com/Thevinh0207/finance-tracker-App-dev-2",
  },
  {
    num: "04",
    category: "School Group Project",
    highlighted: true,
    name: "Fossil API",
    desc: "This is team-based Project where we developed a RESTful API built with PHP slim 4 framework and MariaDB database. It provides endpoints for managing fossil data, including creating, reading, updating, and deleting fossil records. The API is designed to be lightweight and efficient, making it suitable for integration with various applications.",
    bullets: [
      "Developed a RESTful API using PHP slim 4 framework for managing fossil data.",
      "Implemented CRUD operations for fossil records, allowing users to create, read, update, and delete fossil data.",
      "Utilized MariaDB as the database backend for efficient data storage and retrieval.",
      "Designed the API to be lightweight and efficient, ensuring fast response times and scalability.",
      "Provided clear documentation for API endpoints, request/response formats, and authentication methods.",
    ],
    stack: [
      { name: "PHP", slug: "php" },
      { name: "Slim Framework", slug: "slim", icon: slimIcon },
      { name: "MariaDB", slug: "mariadb" },
      { name: "RESTful API", slug: "postman" },
    ],
    image: null,
    isBlocked: true,
  },
    {
    num: "05",
    category: "School Group Project",
    name: "Studio Doki — Nail Salon",
    desc: "A full-stack web application for a Montreal nail salon where guests and members can browse services, book appointments, pay a $20 deposit, and leave reviews after their visit, with a full admin dashboard behind role-guarded routes.",
    bullets: [
      "6-step guest flow / 4-step member flow for booking: service pick, server-side slot availability, deposit payment, and atomic appointment-plus-payment write so neither half can orphan.",
      "Full admin panel with CRUD for appointments, services, service categories, payments, reviews, FAQ, and About-page content — every destructive action behind a custom confirmation modal.",
      "Session-based auth with bcrypt hashing, three-tier role model (guest / client / admin), auto-promotion via a config allowlist, and a DB-level `role IN ('admin','client')` check constraint for defense in depth.",
      "7-table MariaDB schema with historical contact snapshots on appointments and payments so records stay accurate even after a user updates their email or phone; UNIQUE enforcement on reviews so each appointment gets at most one.",
    ],
    stack: [
      { name: "PHP", slug: "php" },
      { name: "Slim Framework", slug: "slim", icon: slimIcon },
      { name: "Twig", slug: "twig" },
      { name: "MariaDB", slug: "mariadb" },
      { name: "Composer", slug: "composer" },
    ],
    image: nailSalon,
    url: "https://github.com/Thevinh0207/SYSTEM-DEVELOPTMENT.git",
  },
  {
    num: "06",
    category: "School Group Project",
    name: "3D Game: Squeeze benz",
    desc: "A 3D game built with Unity and C# where players control a car to goes through the traffic without hitting other cars. The game features an infinite runner mode, a scoring system, virtual currency, upgradable cars, and a simple UI for navigation and settings.",
    bullets: [
      "Unity 3D game development with C# scripting, physics, and collision detection.",
      "Infinite runner mode with procedurally generated traffic and obstacles.",
      "Scoring system with virtual currency and upgradable cars.",
      "Simple UI for navigation, settings, and game over screen.",
      "Implemented sound effects and background music for an immersive experience.",
    ],
    stack: [
      { name: "Unity", slug: "unity" },
      { name: "C#", slug: "csharp", isDevicon: true },
    ],
    image: null,
    isBlocked: true,
  },
    {
    num: "07",
    category: "School Group Project",
    name: "PetConnect — Pet Adoption",
    desc: "A full-featured pet adoption web platform where visitors browse adoptable pets by category and advanced filters, registered users submit and track adoption requests, and admins manage pets, users, and requests from a dedicated dashboard.",
    bullets: [
      "Guest browsing with category tabs (Dog / Cat / Bird / Rabbit), advanced filters (breed, age, size, location), live AJAX search, and dedicated pet-detail pages with adoption CTAs.",
      "Hardened auth flow: registration, bcrypt password hashing, email-based 2FA (6-digit code, 3-attempt lockout, 5-min expiry), hashed one-time password-reset codes, and timing-safe comparisons on every code check.",
      "Rich profile center with avatar uploads (image-type whitelist, 5 MB cap, randomized filenames), theme / language / notification preferences, adoption history, and self-serve account deletion with confirmation modal.",
      "Site-wide middleware stack: security headers (X-Frame-Options, CSP, Permissions-Policy), maintenance-mode toggle, custom 404, role-guarded admin routes, and session regeneration on authentication.",
    ],
    stack: [
      { name: "PHP", slug: "php" },
      { name: "Slim Framework", slug: "slim", icon: slimIcon },
      { name: "SQLite", slug: "sqlite" },
      { name: "Composer", slug: "composer" },
    ],
    image: petConnect,
    url: "https://github.com/OliverDAvino/eCommerceProject.git",
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: "var(--page-bg)" }}
    >
      <h2
        className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>

      <div className="pb-[20vh]">
        {PROJECTS.map((p, i) => {
          // const targetScale = Math.max(0.92, 1 - (PROJECTS.length - 1 - i) * 0.02);
          const targetScale = 1;
          const range = [i / PROJECTS.length, 1];
          return (
            <ProjectCard
              key={p.num}
              project={p}
              index={i}
              progress={scrollYProgress}
              range={range as [number, number]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function ProjectCard({ project, index, progress, range, targetScale }: ProjectCardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
        <div className="h-[85vh] md:h-[80vh] sticky mb-[15vh] md:mb-[20vh]" style={{ top: `${80 + Math.min(index, 4) * 16}px` }}>
      <motion.div
        style={{ scale, background: "var(--page-bg)", borderColor: "var(--hairline)" }}
        className="rounded-[32px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
      >
        {/* Header row */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:gap-4">
          <div className="flex items-start gap-3 sm:gap-6 min-w-0">
            <span
              className="font-black shrink-0"
              style={{ color: "var(--page-fg)", fontSize: "clamp(2.25rem, 10vw, 140px)", lineHeight: 0.85 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2 pt-1 sm:pt-2 min-w-0">
              <span
                className="uppercase tracking-widest font-light"
                style={{ color: "var(--page-fg)", opacity: 0.6, fontSize: "clamp(0.65rem, 1vw, 0.9rem)" }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight flex items-center gap-2"
                style={{ color: "var(--page-fg)", fontSize: "clamp(1rem, 3vw, 2.5rem)" }}
              >
                {project.name}
                {project.highlighted && (
                  <Star
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400 animate-pulse shrink-0"
                    strokeWidth={2}
                  />
                )}
              </h3>
            </div>
          </div>
          <div className="shrink-0 pt-1 sm:pt-2">
            {(project.url || (project as any).isBlocked || project.isPrivate) && (
              <LiveProjectButton url={project.url} isBlocked={project.isBlocked} isPrivate={project.isPrivate}/>
            )}
          </div>
        </div>

        {/* Body: desc left + image right (original proportions) */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-3 sm:gap-4 flex-1 min-h-0 overflow-hidden">
          {/* Description — col-span-2 on md */}
          <div className="md:col-span-2 flex-1 md:flex-auto flex flex-col min-h-0 py-2 sm:py-4 overflow-y-auto pr-2 custom-scrollbar">
            <p
              className="font-light leading-relaxed"
              style={{
                color: "var(--page-fg)",
                opacity: 0.8,
                fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)",
                marginBottom: project.bullets ? "1rem" : "0",
              }}
            >
              {project.desc}
            </p>
            {project.bullets && (
              <ul className="flex flex-col gap-2.5">
                {project.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 font-light leading-relaxed"
                    style={{
                      color: "var(--page-fg)",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                    }}
                  >
                    <span className="mt-[0.55em] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            
            {project.stack && (
              <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
                {project.stack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{
                      background: "color-mix(in srgb, var(--page-fg) 5%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--page-fg) 10%, transparent)",
                    }}
                  >
                    <img
                      src={
                          (tech as { icon?: string }).icon
                          ? (tech as { icon?: string }).icon!
                          : tech.slug === "python"
                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                          : tech.slug === "openai"
                          ? "https://cdn.simpleicons.org/openai/19c9a9"
                          : tech.slug === "anthropic"
                          ? "https://cdn.simpleicons.org/anthropic/cc9b7a"
                          : `https://cdn.simpleicons.org/${tech.slug}`
                      }
                      alt={tech.name}
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain ${"class" in tech ? tech.class || "" : ""}`}
                      loading="lazy"
                    />
                    <span
                      className="text-xs sm:text-sm font-medium tracking-wide"
                      style={{ color: "var(--page-fg)", opacity: 0.8 }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image — col-span-3 on md */}
          <div className="md:col-span-3 flex-shrink-0 h-[180px] sm:h-[220px] md:h-auto min-h-0 mt-2 md:mt-0">
            <img
              src={project.image || defaultProject}
              alt={project.name}
              loading="lazy"
              className="w-full h-full min-h-[200px] object-cover rounded-[24px] sm:rounded-[40px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
