import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";
const FORM_SUBJECT = "New message from personal Website";
const NAME_PATTERN = /^[\p{L}\s'’\-.]+$/u;
const EMAIL_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(): Errors {
    const errs: Errors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      errs.name = "Please enter your name.";
    } else if (/\d/.test(trimmedName)) {
      errs.name = "Name cannot contain numbers.";
    } else if (!NAME_PATTERN.test(trimmedName)) {
      errs.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
    } else if (trimmedName.length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!trimmedEmail) {
      errs.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!trimmedMessage) {
      errs.message = "Please write a message.";
    } else if (trimmedMessage.length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    return errs;
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const stripped = e.target.value.replace(/\d/g, "");
    setName(stripped);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg("Contact form is not configured yet. Please email me directly.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim(), _subject: FORM_SUBJECT,  _replyto: email.trim(), }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  }

    const fieldBaseClass =
    "contact-field w-full rounded-2xl border px-5 py-4 text-base outline-none transition-all focus:border-opacity-60 disabled:opacity-50";
  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    borderColor: hasError ? "#ef4444" : "var(--hairline)",
    background: "color-mix(in srgb, var(--page-fg) 4%, transparent)",
    color: "var(--page-fg)",
  });

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

        {/* Contact form */}
        <FadeIn delay={0.3}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-4"
            noValidate
          >
            {/* Honeypot — hidden from users, filled by bots */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  name="name"
                  inputMode="text"
                  placeholder="Your name"
                  value={name}
                  onChange={handleNameChange}
                  disabled={status === "submitting"}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldBaseClass}
                  style={fieldStyle(!!errors.name)}
                />
                {errors.name && (
                  <span
                    id="name-error"
                    className="flex items-center gap-1.5 px-2 text-xs"
                    style={{ color: "#ef4444" }}
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={status === "submitting"}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldBaseClass}
                  style={fieldStyle(!!errors.email)}
                />
                {errors.email && (
                  <span
                    id="email-error"
                    className="flex items-center gap-1.5 px-2 text-xs"
                    style={{ color: "#ef4444" }}
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <textarea
                name="message"
                placeholder="Tell me what's on your mind..."
                value={message}
                onChange={handleMessageChange}
                disabled={status === "submitting"}
                rows={6}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldBaseClass} resize-y`}
                style={{ ...fieldStyle(!!errors.message), minHeight: "160px" }}
              />
              {errors.message && (
                <span
                  id="message-error"
                  className="flex items-center gap-1.5 px-2 text-xs"
                  style={{ color: "#ef4444" }}
                >
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.message}
                </span>
              )}
            </div>

            <div className="flex flex-col items-stretch gap-4">
              <motion.button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                whileHover={{ scale: status === "idle" || status === "error" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" || status === "error" ? 0.98 : 1 }}
                className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
              >
                {status === "submitting" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent!
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: "var(--page-fg)", opacity: 0.8 }}
                >
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </span>
              )}
              {status === "success" && (
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: "var(--page-fg)", opacity: 0.7 }}
                >
                  Thanks, i'll get back to you soon!
                </span>
              )}
            </div>
          </form>
        </FadeIn>

        {/* Mailto fallback */}
        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--page-fg)", opacity: 0.4 }}
            >
              Or email me directly
            </span>
            <motion.a
              href="mailto:vuongthevinh07@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="contact-cta group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all sm:gap-3 sm:px-6 sm:py-3"
              style={{
                borderColor: "var(--hairline)",
                color: "var(--page-fg)",
                background: "transparent",
              }}
            >
              <Mail className="h-4 w-4 opacity-70" strokeWidth={1.8} />
              vuongthevinh07@gmail.com
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
