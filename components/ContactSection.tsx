import Link from "next/link";

import { contactContent, socialLinks } from "@/config/contact";

import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <ScrollReveal stagger={0.1}>
        <h3 className="mb-7 text-2xl font-semibold text-white/90 md:text-3xl">
          {contactContent.title}
        </h3>
        <p className="max-w-xl text-sm text-white/60">
          {contactContent.description}
        </p>

        <div className="mt-6 text-white/80">
          <Link
            href={`mailto:${contactContent.email}`}
            className="transition-colors hover:text-[var(--accent-secondary)]"
          >
            {contactContent.cta}
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-4 text-white/80">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.isEmail ? undefined : "_blank"}
              rel={link.isEmail ? undefined : "noopener noreferrer"}
              aria-label={link.name}
              className="transition-colors hover:text-[var(--accent-secondary)]"
            >
              <link.icon className="size-5" />
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
