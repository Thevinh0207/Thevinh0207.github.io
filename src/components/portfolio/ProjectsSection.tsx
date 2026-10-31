import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Star } from "lucide-react";
import { LiveProjectButton } from "./LiveProjectButton";
import heyfood from "@/assets/heyfood/heyfood-1.png";
import fotopdf from "@/assets/fotopdf/fotopdf-1.png";
import cvAdapter from "@/assets/cv-adapter/cv-adapter-1.png";
import genome from "@/assets/genome/genome-1.png";
import checkMyFood from "@/assets/check-my-food/check-my-food-1.png";
import devUtils from "@/assets/dev-utils/dev-utils-1.png";

const PROJECTS = [
  {
    num: "01",
    category: "Cliente",
    name: "HeyFood",
    highlighted: true,
    desc: "Plataforma SaaS integral para gestión de restaurantes, pedidos y domicilios, construida siguiendo Clean Architecture.",
    bullets: [
      "Plataforma en producción validada por clientes reales activos que automatizan su facturación, operación y logística diaria.",
      "Arquitectura multi-tenant segura con aislamiento de datos por restaurante y dashboards optimizados para 6 roles distintos.",
      "Gestión de pedidos en tiempo real con notificaciones visuales y sonoras por rol, garantizando operaciones fluidas.",
      "Módulo de operaciones integral con tracking GPS para domicilios y flujos automatizados de comunicación con el cliente.",
    ],
    stack: [
      { name: "Next.js", slug: "nextdotjs", class: "dark:invert" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "PostgreSQL", slug: "postgresql" }
    ],
    image: heyfood,
    url: "https://www.heyfood-app.com",
  },
  {
    num: "02",
    category: "Personal",
    name: "CV Adapter AI",
    desc: "Adaptador de currículum inteligente impulsado por IA que adapta automáticamente tu perfil profesional a descripciones de vacantes en tiempo real.",
    bullets: [
      "Integración con 7 proveedores de IA (OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Groq, xAI) para optimizaciones de CV altamente personalizadas.",
      "Interfaz interactiva con edición en vivo y descarga inmediata en formatos profesionales DOCX y PDF.",
      "Diseño enfocado en privacidad local: tus claves de API permanecen 100% seguras en tu navegador sin intermediación de servidores externos."
    ],
    stack: [
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Gemini", slug: "googlegemini" }
    ],
    image: cvAdapter,
    url: "https://github.com/JavierDvlpr/cv-adapter-ai",
  },
  {
    num: "03",
    category: "Personal",
    name: "FotoPDF",
    desc: "Escáner de documentos 100% en el navegador, libre de servidores, registros o instalaciones, diseñado con Arquitectura Hexagonal.",
    bullets: [
      "Procesamiento local mediante OpenCV.js (WebAssembly) para detección automática de bordes de papel en tiempo real a +30 FPS.",
      "Filtros de imagen avanzados (B&N adaptativo y Unsharp Masking) para limpiar sombras y realzar texto directamente en el cliente.",
      "Generación de PDFs optimizados y ligeros integrando pdf-lib en formatos A4, Carta o Auto con compresión configurable."
    ],
    stack: [
      { name: "React", slug: "react" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "TypeScript", slug: "typescript" },
      { name: "OpenCV", slug: "opencv" }
    ],
    image: fotopdf,
    url: "https://fotopdf.vercel.app",
  },
  {
    num: "04",
    category: "Personal (En Desarrollo)",
    name: "Genome",
    desc: "Herramienta de línea de comandos para optimizar tokens en agentes de IA, mapeando repositorios en un grafo de conocimiento.",
    bullets: [
      "Estructura el grafo jerárquicamente como una doble hélice de ADN, reduciendo el consumo de tokens de contexto hasta 4,700x por consulta.",
      "Análisis estático de código mediante tree-sitter para más de 25 lenguajes e integración MCP nativa para Claude Code, Cursor y Copilot.",
      "Visualización interactiva 3D autónoma sin dependencias de servidor para explorar y filtrar la arquitectura del proyecto desde el navegador."
    ],
    stack: [
      { name: "Python", slug: "python" },
      { name: "OpenAI", slug: "openai" },
      { name: "Anthropic", slug: "anthropic" }
    ],
    image: genome,
    isBlocked: true,
  },
  {
    num: "05",
    category: "Cliente (En Desarrollo)",
    name: "Check My Food",
    desc: "Aplicación móvil para decisiones alimenticias personalizadas mediante escaneo de código de barras y análisis de idoneidad en base a perfiles de salud.",
    bullets: [
      "Escaneo de código de barras e integración directa con Open Food Facts API para análisis nutricional en tiempo real.",
      "Motor de reglas personalizado y procesamiento por IA (OpenAI + Edge Functions) para generar explicaciones personalizadas en lenguaje natural.",
      "Arquitectura de seguridad Zero-Knowledge con cifrado AES-256 en base de datos local y seguridad a nivel de fila (RLS) en Supabase."
    ],
    stack: [
      { name: "Flutter", slug: "flutter" },
      { name: "Supabase", slug: "supabase" },
      { name: "OpenAI", slug: "openai" }
    ],
    image: checkMyFood,
    isBlocked: true,
  },
  {
    num: "06",
    category: "Personal",
    name: "DevUtils",
    desc: "Colección de herramientas de línea de comandos y scripts de utilidad para automatizar flujos de trabajo diarios de desarrollo y optimizar la productividad.",
    bullets: [
      "Automatización de tareas recurrentes, formateo de datos y generación de código boilerplate mediante scripts rápidos y portables.",
      "Utilidades ligeras para desarrollo local diseñadas para integrarse de forma fluida en cualquier emulador de terminal.",
      "Código modular y de código abierto estructurado para ser fácilmente extensible y adaptable a múltiples plataformas."
    ],
    stack: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Python", slug: "python" },
      { name: "GNU Bash", slug: "gnubash" }
    ],
    image: devUtils,
    url: "https://github.com/JavierDvlpr/dev-utils",
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
      id="proyectos"
      ref={ref}
      className="relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: "var(--page-bg)" }}
    >
      <h2
        className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Proyectos
      </h2>

      <div>
        {PROJECTS.map((p, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
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
    <div className="h-[85vh] md:h-[80vh] sticky mb-[15vh] md:mb-[20vh]" style={{ top: `${80 + index * 24}px` }}>
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
            {(project.url || (project as any).isBlocked) && (
              <LiveProjectButton url={project.url} isBlocked={(project as any).isBlocked} />
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
                        tech.slug === "python"
                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                          : tech.slug === "openai"
                          ? "https://cdn.simpleicons.org/openai/19c9a9"
                          : tech.slug === "anthropic"
                          ? "https://cdn.simpleicons.org/anthropic/cc9b7a"
                          : `https://cdn.simpleicons.org/${tech.slug}`
                      }
                      alt={tech.name}
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain ${tech.class || ""}`}
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
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full min-h-[200px] object-cover rounded-[24px] sm:rounded-[40px] md:rounded-[60px]"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
