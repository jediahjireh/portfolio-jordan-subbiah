"use client";

import Image from "next/image";

import { projects } from "@/config/projects";

import ScrollReveal from "@/components/ScrollReveal";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20">
      {/* Background ambient glow - extends beyond section */}
      <div className="pointer-events-none absolute -inset-x-20 -top-40 -bottom-40">
        <div className="absolute top-[20%] left-[10%] h-[550px] w-[550px] rounded-full bg-(--accent-primary) opacity-[0.025] blur-[140px]" />
        <div className="absolute right-[5%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-(--accent-secondary) opacity-[0.03] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <ScrollReveal
                key={project.title}
                stagger={0.1}
                delay={index * 0.2}
              >
                <div
                  className={`group relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Project visual */}
                  <div className="relative flex-1">
                    {/* Floating accent ring */}
                    <div
                      className={`absolute -top-6 ${isReversed ? "-left-6" : "-right-6"} h-24 w-24 rounded-full border border-[var(--accent-primary)]/20 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100`}
                    />
                    <div
                      className={`absolute -bottom-4 ${isReversed ? "-right-4" : "-left-4"} h-16 w-16 rounded-full border border-[var(--accent-secondary)]/30 opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100`}
                    />

                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--card-bg)] shadow-[0_0_80px_-20px_var(--glow-primary)] transition-all duration-500 group-hover:border-[var(--accent-primary)]/40 group-hover:shadow-[0_0_100px_-15px_var(--glow-primary)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {project.imageUrl ? (
                          <>
                            <Image
                              src={project.imageUrl}
                              alt={project.imageAlt || project.title}
                              fill
                              className="object-cover transition-all duration-700 group-hover:scale-105"
                            />
                            {/* Gradient overlay on image */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />
                          </>
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--accent-primary)]/15 via-[var(--card-bg)] to-[var(--accent-secondary)]/10">
                            {/* Orbital decoration for placeholder */}
                            <div className="absolute h-32 w-32 animate-[spin_20s_linear_infinite] rounded-full border border-[var(--accent-primary)]/20" />
                            <div className="absolute h-48 w-48 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-[var(--accent-secondary)]/15" />
                            <span className="relative z-10 text-5xl font-bold tracking-tight text-white/30 sm:text-6xl">
                              {project.placeholder}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Corner accent */}
                      <div
                        className={`absolute top-0 ${isReversed ? "left-0 rounded-br-2xl" : "right-0 rounded-bl-2xl"} h-1 w-16 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-60 transition-all duration-300 group-hover:w-24 group-hover:opacity-100`}
                      />
                    </div>

                    {/* Floating index number */}
                    <div
                      className={`absolute -bottom-6 ${isReversed ? "right-8" : "left-8"} flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-primary)]/30 bg-[var(--background)] text-sm font-medium text-[var(--accent-primary)] shadow-[0_0_30px_var(--glow-subtle)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent-primary)]/60`}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${isReversed ? "md:text-right" : ""}`}
                  >
                    {/* Label with line */}
                    <div
                      className={`flex items-center gap-3 ${isReversed ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="h-px w-8 bg-gradient-to-r from-[var(--accent-secondary)] to-transparent opacity-60" />
                      <span className="text-[11px] font-medium tracking-[0.2em] text-[var(--accent-secondary)] uppercase">
                        {project.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    {/* Description card */}
                    <div className="relative mt-6">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]">
                        <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/70">
                          {project.description}
                        </p>
                      </div>
                      {/* Accent dot */}
                      <div
                        className={`absolute -top-1.5 ${isReversed ? "right-6" : "left-6"} h-3 w-3 rounded-full bg-[var(--accent-primary)] opacity-60 blur-[2px]`}
                      />
                    </div>

                    {/* Tags */}
                    <div
                      className={`mt-6 flex flex-wrap gap-2 ${isReversed ? "md:justify-end" : ""}`}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="group/tag relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] text-white/50 transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:text-white/80"
                        >
                          <span className="relative z-10">{tag}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/tag:opacity-100" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
