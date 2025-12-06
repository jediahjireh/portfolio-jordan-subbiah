"use client";

import { useCallback, useState } from "react";

import { experienceItems, sectionContent } from "@/config/experience";

import ExperienceCard from "@/components/ExperienceCard";
import ScrollReveal from "@/components/ScrollReveal";

const WorkExperience = () => {
  // Track all visible card indices
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const handleEnter = useCallback((index: number) => {
    setVisibleCards((prev) => new Set(prev).add(index));
  }, []);

  const handleLeave = useCallback((index: number) => {
    setVisibleCards((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  }, []);

  // The active card is the most recently entered visible card (highest index in set)
  // This works for both scroll directions since we track enter/leave
  const activeIndex =
    visibleCards.size > 0 ? Math.max(...Array.from(visibleCards)) : null;

  return (
    <section id="about" className="relative py-20">
      {/* Background ambient glow - extends beyond section */}
      <div className="pointer-events-none absolute -inset-x-20 -top-40 -bottom-40">
        <div className="absolute top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-(--accent-primary) opacity-[0.02] blur-[140px]" />
        <div className="absolute right-[15%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-(--accent-secondary) opacity-[0.025] blur-[120px]" />
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
              <ExperienceCard
                key={index}
                item={item}
                index={index}
                isActive={activeIndex === index}
                onEnter={handleEnter}
                onLeave={handleLeave}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;
