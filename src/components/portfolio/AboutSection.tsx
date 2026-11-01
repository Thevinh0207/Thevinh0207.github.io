import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";

const DECOR = {
  tl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop",
  bl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&auto=format&fit=crop",
  tr: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
  br: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop",
};

const TECH_STACK = [
  // { name: "React", slug: "react" },
  // { name: "Next.js", slug: "nextdotjs", class: "dark:invert" },
  // { name: "TypeScript", slug: "typescript" },
  // { name: "Python", slug: "python", isDevicon: true },
  // { name: "FastAPI", slug: "fastapi" },
  // { name: "Django", slug: "django", color: "44b78b" },
  // { name: "PostgreSQL", slug: "postgresql" },
  // { name: "AWS Lambda", slug: "awslambda" },
  // { name: "Serverless", slug: "serverless" },
  { name: "REST APIs", slug: "postman" },
  { name: "Git", slug: "git" },
  { name: "Docker", slug: "docker" },
  { name: "PHP", slug: "php" },
  { name: "Java", slug: "java", isDevicon: true },
  { name: "C#", slug: "csharp", isDevicon: true },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Dart", slug: "dart" },
  { name: "Flutter", slug: "flutter" },
  { name: "MySQL", slug: "mysql" },
  { name: "SQLite", slug: "sqlite" },
  { name: "MariaDB", slug: "mariadb" },

];

export function AboutSection() {
  return (
    <section
      id="about-me"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={DECOR.tl} alt="" className="w-full h-auto rounded-2xl" loading="lazy" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src={DECOR.bl} alt="" className="w-full h-auto rounded-2xl" loading="lazy" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={DECOR.tr} alt="" className="w-full h-auto rounded-2xl" loading="lazy" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={DECOR.br} alt="" className="w-full h-auto rounded-2xl" loading="lazy" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About Me
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14">
          <AnimatedText
          text="Full-time student in Computer Science & Technology at Vanier College. I am "
          className="font-medium text-center leading-relaxed max-w-[600px]"
            style={{ color: "var(--page-fg)", fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)" }}
          />

          {/* Tech stack pills */}
          <FadeIn delay={0.3} y={20}>
            <div className="flex flex-wrap justify-center gap-2 max-w-[580px]">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    border: "1px solid var(--hairline)",
                    background: "color-mix(in srgb, var(--page-fg) 4%, transparent)",
                  }}
                >
                  <img
                    src={
                      tech.isDevicon
                        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}/${tech.slug}-original.svg`
                        : tech.slug === "django"
                        ? "https://cdn.simpleicons.org/django/44b78b"
                        : `https://cdn.simpleicons.org/${tech.slug}`
                    }
                    alt={tech.name}
                    className={`w-3.5 h-3.5 object-contain ${tech.class || ""}`}
                    loading="lazy"
                  />
                  <span style={{ color: "var(--page-fg)", opacity: 0.85 }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={10}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 md:px-10 md:py-3.5 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-80"
              style={{
                border: "1px solid var(--hairline)",
                color: "var(--page-fg)",
                background: "transparent",
              }}
            >
              Let's connect!
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
