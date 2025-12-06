import Link from "next/link";

import { contactContent, socialLinks } from "@/config/contact";

import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-(--accent-secondary) opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <ScrollReveal stagger={0.1}>
          {/* Section header with accent line */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-[var(--accent-secondary)] to-transparent" />
            <h3 className="text-2xl font-semibold tracking-tight text-white/90 md:text-3xl">
              {contactContent.title}
            </h3>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/60">
            {contactContent.description}
          </p>

          <div className="mt-6 text-white/80">
            <Link
              href={`mailto:${contactContent.email}`}
              className="text-[var(--accent-secondary)] transition-colors hover:underline hover:underline-offset-4"
            >
              {contactContent.cta}
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.isEmail ? undefined : "_blank"}
                rel={link.isEmail ? undefined : "noopener noreferrer"}
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:text-[var(--accent-secondary)]"
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
