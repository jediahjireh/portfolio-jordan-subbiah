"use client";

import { experienceItems, sectionContent } from "@/config/experience";

import ScrollReveal from "@/components/ScrollReveal";

const WorkExperience = () => {
  return (
    <section id="about" className="relative py-28">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-(--accent-primary) opacity-[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-(--accent-secondary) opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section header with accent line */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-[var(--accent-secondary)] to-transparent" />
          <h3 className="text-2xl font-semibold tracking-tight text-white/90 md:text-3xl">
            {sectionContent.title}
          </h3>
        </div>

        {/* Grid container */}
        <ScrollReveal stagger={0.1}>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {experienceItems.map((item, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[var(--card-bg)] transition-all duration-500 hover:border-[var(--accent-primary)]/30"
              >
                {/* Floating accent ring on hover */}
                <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full border border-[var(--accent-primary)]/20 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

                {/* Top accent bar */}
                <div className="absolute top-0 right-0 h-0.5 w-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-500 group-hover:w-20" />

                <div className="relative p-5">
                  {/* Header row: icon + title + period */}
                  <div className="mb-3 flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] transition-all duration-300 group-hover:border-[var(--accent-primary)]/40 group-hover:shadow-[0_0_20px_var(--glow-subtle)]">
                        <div className="h-5 w-5">{item.icon}</div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
                          {item.role}
                        </h4>
                        <span className="shrink-0 text-[10px] font-medium tracking-widest text-[var(--accent-secondary)] uppercase">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-white/70">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/40">{item.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/65">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;
