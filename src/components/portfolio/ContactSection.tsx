import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const socials = [
  {
    label: "GitHub",
    value: "@Thevinh0207",
    href: "https://github.com/Thevinh0207",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "in/thevinhvuong",
    href: "https://www.linkedin.com/in/the-vinh-vuong-6a54533a7/",
    Icon: Linkedin,
  },
  // {
  //   label: "WhatsApp",
  //   value: "+57 3054077706",
  //   href: "https://wa.me/573054077706",
  //   Icon: MessageCircle,
  // },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-surface relative w-full px-4 py-24 sm:px-8 sm:py-32 md:py-40"
      style={{ background: "var(--page-bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="w-full overflow-hidden">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] tracking-tight w-full"
            style={{ fontSize: "clamp(2.5rem, 9.5vw, 10rem)" }}
          >
            Let's
            <br />
            connect!
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="mx-auto mt-8 max-w-2xl text-center text-base sm:text-lg md:text-xl"
            style={{ color: "var(--page-fg)", opacity: 0.6 }}
          >
            My inbox is always open. Whether you have a question or just want to say hi, I'll get back to you. Let's Connect!
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <motion.a
              href="mailto:vuongthevinh07@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="contact-cta group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] sm:gap-3 sm:px-8 sm:py-5 sm:text-lg"
            >
              vuongthevinh07@gmail.com
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-5 sm:w-5"
                strokeWidth={2}
              />
            </motion.a>
          </div>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="contact-social-btn group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:gap-2.5 sm:px-5 sm:py-3"
                style={{
                  borderColor: "var(--hairline)",
                  color: "var(--page-fg)",
                  background: "transparent",
                }}
              >
                <Icon
                  className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100"
                  strokeWidth={1.8}
                />
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-0 -ml-1 transition-all group-hover:opacity-60 group-hover:ml-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </motion.a>
            ))}
          </div>
        </FadeIn>

        <div
          className="contact-footer mt-24 flex flex-col items-start justify-between gap-6 border-t pt-8 text-sm sm:flex-row sm:items-center"
          style={{ borderColor: "var(--hairline)", color: "var(--page-fg)", opacity: 0.5 }}
        >
          <p>© {new Date().getFullYear()} The Vinh Vuong.</p>
          <p>Montreal, Quebec, Canada.</p>
        </div>
      </div>
    </section>
  );
}
