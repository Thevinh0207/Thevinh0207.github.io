import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    num: "01",
    name: "Desarrollo Frontend",
    desc: "Construyo interfaces rápidas, accesibles y visualmente pulidas con React, TypeScript y CSS moderno, desde sistemas de diseño hasta apps listas para producción.",
  },
  {
    num: "02",
    name: "Backend & IA",
    desc: "Diseño e implemento APIs escalables (REST/GraphQL) con Node.js y Python, integrando modelos de Inteligencia Artificial (LLMs) para dotar de capacidades inteligentes a tu producto.",
  },
  {
    num: "03",
    name: "DevOps & Despliegue",
    desc: "Configuro pipelines CI/CD, contenedores Docker e infraestructura en la nube en AWS o Vercel para que los productos salgan con confianza y funcionen sin problemas.",
  },
  {
    num: "04",
    name: "Rendimiento & Optimización",
    desc: "Audito y mejoro el rendimiento web mediante análisis de bundles, lazy loading, estrategias de caché y mejoras en Core Web Vitals.",
  },
  {
    num: "05",
    name: "Consultoría Técnica",
    desc: "Ayudo a equipos a tomar mejores decisiones arquitecturales, adoptar herramientas de IA en sus flujos, mejorar la calidad del código y acelerar sus ciclos de desarrollo.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
      style={{ background: "var(--page-bg-invert)" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "var(--page-fg-invert)", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Servicios
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn
            key={s.num}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: "1px solid color-mix(in srgb, var(--page-fg-invert) 15%, transparent)",
              borderBottom: i === SERVICES.length - 1 ? "1px solid color-mix(in srgb, var(--page-fg-invert) 15%, transparent)" : undefined,
            }}
          >
            <span
              className="font-black flex-shrink-0"
              style={{ color: "var(--page-fg-invert)", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {s.num}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 pt-2">
              <h3
                className="font-medium uppercase"
                style={{ color: "var(--page-fg-invert)", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ color: "var(--page-fg-invert)", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              >
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
