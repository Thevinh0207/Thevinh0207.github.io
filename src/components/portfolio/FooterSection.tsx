import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

function DevpostIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Thevinh0207",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/the-vinh-vuong-6a54533a7/",
    Icon: Linkedin,
  },
  {
    label: "Devpost",
    href: "https://devpost.com/Thevinh0207",
    Icon: DevpostIcon,
  },
];

export function FooterSection() {
  return (
    <footer
      className="w-full px-4 pb-10 sm:px-8"
      style={{ background: "var(--page-bg)" }}
    >
      <div
        className="mx-auto max-w-7xl flex flex-col items-start justify-between gap-10 border-t pt-10 text-sm md:flex-row md:items-start"
        style={{ borderColor: "var(--hairline)", color: "var(--page-fg)" }}
      >
        {/* Left: copyright + location */}
        <div className="flex flex-col gap-1.5" style={{ opacity: 0.5 }}>
          <p>© {new Date().getFullYear()} The Vinh Vuong.</p>
          <p>Montreal, Quebec, Canada.</p>
        </div>

        {/* Right: other socials */}
        <div className="flex flex-col gap-3">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ opacity: 0.4 }}
          >
            Other socials
          </span>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="contact-social-btn group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
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
        </div>
      </div>
    </footer>
  );
}
