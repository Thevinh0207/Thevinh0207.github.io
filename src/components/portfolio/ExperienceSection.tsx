import { FadeIn } from "./FadeIn";

const EXPERIENCE = [
  {
    role: "Co-fundador & Desarrollador Full Stack",
    company: "HeyFood",
    period: "Desde Sep. 2025",
    location: "Cartagena, Colombia",
    bullets: [
      "Co-diseñé y desarrollé una plataforma SaaS para gestión de restaurantes, pedidos y operaciones logísticas.",
      "Implementé geolocalización y seguimiento en tiempo real integrando APIs de mapas.",
      "Arquitecté el sistema completo con Next.js, TypeScript y PostgreSQL, manejando flujos de datos concurrentes en tiempo real.",
    ],
  },
  {
    role: "Cloud Engineer & Full Stack Developer",
    company: "Operations Maritime Fluvial Integral S.A.S.",
    period: "Jul. 2025 – Abr. 2026",
    location: "Cartagena, Colombia",
    bullets: [
      "Diseñé e implementé arquitectura serverless en AWS (Lambda, API Gateway, Serverless Framework) para APIs REST escalables.",
      "Desarrollé herramientas backend en Python para la digitalización de procesos operativos críticos.",
      "Diseñé una PWA offline-first con React, TypeScript y Dexie.js para captura de datos en zonas sin conectividad.",
    ],
  },
  {
    role: "Desarrollador Full Stack (Prácticas)",
    company: "Ingeniería Sistemas y Servicios E.U.",
    period: "Ene. 2025 – Jun. 2025",
    location: "Cartagena, Colombia",
    bullets: [
      "Desarrollé aplicaciones web full stack con Python, Django, React y MySQL para automatización de procesos internos.",
      "Optimicé consultas SQL y estructuras relacionales en MySQL, logrando mejoras del 40% en tiempos de respuesta.",
    ],
  },
  {
    role: "Desarrollador y Consultor TI",
    company: "Freelance",
    period: "Jun. 2023 – Dic. 2024",
    location: "Cartagena, Colombia",
    bullets: [
      "Desarrollé soluciones de software a medida para automatización de inventarios y gestión operativa de pequeñas empresas.",
      "Implementé soluciones web con Next.js y Astro, optimizadas para SEO y rendimiento, incluyendo despliegue y configuración de infraestructura.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 mx-2 sm:mx-4 md:mx-6 mt-10 mb-0"
      style={{ background: "var(--page-bg-invert)" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn y={40}>
          <h2
            className="font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-28"
            style={{ color: "var(--page-fg-invert)", fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Experiencia
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-0">
          {EXPERIENCE.map((exp, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              y={30}
              className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid color-mix(in srgb, var(--page-fg-invert) 15%, transparent)",
                borderBottom:
                  i === EXPERIENCE.length - 1
                    ? "1px solid color-mix(in srgb, var(--page-fg-invert) 15%, transparent)"
                    : undefined,
              }}
            >
              {/* Left: Period and Location */}
              <div className="md:w-[220px] flex-shrink-0 pt-2">
                <span
                  className="font-semibold tracking-wide block"
                  style={{ color: "var(--page-fg-invert)", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
                >
                  {exp.period}
                </span>
                <span
                  className="font-medium block mt-1"
                  style={{ color: "var(--page-fg-invert)", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}
                >
                  {exp.location}
                </span>
              </div>

              {/* Right: Role, Company and Bullets */}
              <div className="flex-1 flex flex-col gap-4 pt-1">
                {/* H3 for heading font */}
                <h3
                  className="font-medium uppercase"
                  style={{
                    color: "var(--page-fg-invert)",
                    fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {exp.role}
                  <span
                    className="block sm:inline font-normal mt-1 sm:mt-0 sm:ml-2 normal-case tracking-normal font-sans"
                    style={{ opacity: 0.6, fontSize: "clamp(0.9rem, 1.5vw, 1.4rem)" }}
                  >
                    en {exp.company}
                  </span>
                </h3>

                <ul className="flex flex-col gap-3 mt-2">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 font-light leading-relaxed max-w-3xl"
                      style={{
                        color: "var(--page-fg-invert)",
                        opacity: 0.7,
                        fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                      }}
                    >
                      <span className="mt-[0.55em] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
