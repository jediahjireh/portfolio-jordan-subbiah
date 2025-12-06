"use client";

import { useEffect, useRef } from "react";

import { type ExperienceItem } from "@/types/types";

const ExperienceCard = ({
  item,
  index,
  isActive,
  onEnter,
  onLeave,
}: {
  item: ExperienceItem;
  index: number;
  isActive: boolean;
  onEnter: (index: number) => void;
  onLeave: (index: number) => void;
}) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter(index);
        } else {
          onLeave(index);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [index, onEnter, onLeave]);

  return (
    <article
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border bg-[var(--card-bg)] transition-all duration-500 hover:border-[var(--accent-primary)]/30 ${
        isActive
          ? "border-[var(--accent-primary)]/30 md:border-white/8"
          : "border-white/8"
      }`}
    >
      {/* Floating accent ring - visible on hover OR on scroll (mobile) */}
      <div
        className={`absolute -top-4 -right-4 h-16 w-16 rounded-full border border-[var(--accent-primary)]/20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 ${
          isActive
            ? "scale-110 opacity-100 md:scale-100 md:opacity-0"
            : "scale-100 opacity-0"
        }`}
      />

      {/* Top accent bar - visible on hover OR on scroll (mobile) */}
      <div
        className={`absolute top-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-500 group-hover:w-20 ${
          isActive ? "w-20 md:w-0" : "w-0"
        }`}
      />

      <div className="relative p-5">
        {/* Header row: icon + title + period */}
        <div className="mb-3 flex items-start gap-3">
          <div className="relative shrink-0">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] transition-all duration-300 group-hover:border-[var(--accent-primary)]/40 group-hover:shadow-[0_0_20px_var(--glow-subtle)] ${
                isActive
                  ? "border-[var(--accent-primary)]/40 shadow-[0_0_20px_var(--glow-subtle)] md:border-white/10 md:shadow-none"
                  : "border-white/10"
              }`}
            >
              <div className="h-5 w-5">{item.icon}</div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h4
                className={`text-base font-semibold transition-colors duration-300 group-hover:text-white ${
                  isActive ? "text-white md:text-white/90" : "text-white/90"
                }`}
              >
                {item.role}
              </h4>
              <span className="shrink-0 text-[10px] font-medium tracking-widest text-[var(--accent-secondary)] uppercase">
                {item.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-white/70">{item.title}</p>
            <p className="text-xs text-white/40">{item.location}</p>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-xs leading-relaxed transition-colors duration-300 group-hover:text-white/65 ${
            isActive ? "text-white/65 md:text-white/55" : "text-white/55"
          }`}
        >
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
