"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  categoryColors,
  categoryLabels,
  sectionContent,
  skills,
  softSkills,
} from "@/config/skills";

import ScrollReveal from "@/components/ScrollReveal";

// Define orbital configuration - which skills go on which ring
const orbitConfig = {
  inner: [0, 1, 2, 3, 4], // 5 skills on inner ring
  outer: [5, 6, 7, 8, 9, 10, 11, 12], // 8 skills on outer ring
};

// Calculate position on ellipse
const getPosition = (
  index: number,
  total: number,
  radiusX: number,
  radiusY: number,
  rotation: number,
) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
  const rotRad = (rotation * Math.PI) / 180;

  // Position on ellipse
  const x = radiusX * Math.cos(angle);
  const y = radiusY * Math.sin(angle);

  // Apply rotation
  const rotatedX = x * Math.cos(rotRad) - y * Math.sin(rotRad);
  const rotatedY = x * Math.sin(rotRad) + y * Math.cos(rotRad);

  return { x: rotatedX, y: rotatedY };
};

// Breakpoint configs: [width, height, rotation]
const ringConfigs = {
  // xs: < 480px, sm: 480-639px, md: >= 640px
  inner: {
    xs: { width: 160, height: 100, rotation: 12 },
    sm: { width: 260, height: 170, rotation: 12 },
    md: { width: 380, height: 240, rotation: 12 },
  },
  outer: {
    xs: { width: 240, height: 160, rotation: -6 },
    sm: { width: 400, height: 270, rotation: -6 },
    md: { width: 580, height: 380, rotation: -6 },
  },
};

type CurveStyle = "quadratic" | "cubic";

const TechStack = () => {
  const [breakpoint, setBreakpoint] = useState<"xs" | "sm" | "md">("md");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [curveStyle, setCurveStyle] = useState<CurveStyle>("quadratic");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 640) {
        setBreakpoint("md");
      } else if (width >= 480) {
        setBreakpoint("sm");
      } else {
        setBreakpoint("xs");
      }

      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const innerRing = ringConfigs.inner[breakpoint];
  const outerRing = ringConfigs.outer[breakpoint];

  // Soft skill positions (percentage from left)
  const softSkillPositions = [12, 37, 63, 88];

  // Heights for curved lines
  const softSkillsRowY = 60;
  const orbitalCenterY =
    breakpoint === "xs" ? 380 : breakpoint === "sm" ? 460 : 560;

  return (
    <section id="lab" className="relative py-20">
      {/* Background ambient glow - extends beyond section */}
      <div className="pointer-events-none absolute -inset-x-20 -top-40 -bottom-40">
        <div className="absolute top-1/4 right-[10%] h-[600px] w-[600px] rounded-full bg-(--accent-secondary) opacity-[0.025] blur-[150px]" />
        <div className="absolute bottom-0 left-[15%] h-[500px] w-[500px] rounded-full bg-(--accent-primary) opacity-[0.025] blur-[130px]" />
      </div>

      <ScrollReveal stagger={0.1} className="relative text-center">
        {/*
        <div className="mb-16">
          <p className="mb-6 text-white/70">
            {sectionContent.intro}{" "}
            <span className="text-[var(--accent-secondary)]">
              {sectionContent.highlight}
            </span>{" "}
            {sectionContent.outro}
          </p>
          <p className="text-sm text-white/50">{sectionContent.tagline}</p>
        </div>
        */}
        {/* Full visualization container */}
        <div
          ref={containerRef}
          className="xs:h-[580px] relative mx-auto h-[480px] w-full max-w-4xl px-4 sm:h-[700px]"
        >
          {/* SVG for curved lines from orbital center up to soft skills */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent-secondary)"
                  stopOpacity="0.5"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent-primary)"
                  stopOpacity="0.15"
                />
              </linearGradient>
            </defs>

            {/* Curved lines from soft skills down to orbital center */}
            {softSkillPositions.map((xPercent, i) => {
              const startX = (xPercent / 100) * containerWidth;
              const startY = softSkillsRowY;
              const endX = containerWidth / 2;
              const endY = orbitalCenterY;

              let pathD: string;

              if (curveStyle === "quadratic") {
                // Quadratic bezier - sharper fan-out curves
                const cpX = startX + (endX - startX) * 0.3;
                const cpY = startY + (endY - startY) * 0.6;
                pathD = `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
              } else {
                // Cubic bezier - smoother S-curves
                const cp1X = startX;
                const cp1Y = startY + (endY - startY) * 0.5;
                const cp2X = endX;
                const cp2Y = startY + (endY - startY) * 0.7;
                pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
              }

              return (
                <path
                  key={`curve-${i}`}
                  d={pathD}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Soft skills row at top */}
          <div className="xs:px-4 absolute top-0 right-0 left-0 flex justify-between px-2 sm:px-8">
            {softSkills.map((skill, i) => (
              <div key={i} className="group flex flex-col items-center gap-1">
                <div className="xs:h-11 xs:w-11 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent-secondary)]/50 bg-[var(--card-bg)] text-[var(--accent-secondary)] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:cursor-pointer group-hover:border-[var(--accent-secondary)] group-hover:shadow-[0_0_20px_var(--glow-secondary)] sm:h-12 sm:w-12">
                  <span className="xs:text-xl text-lg sm:text-2xl">
                    {skill.icon}
                  </span>
                </div>
                <span className="xs:max-w-20 xs:text-[10px] max-w-16 text-center text-[8px] leading-tight text-white/60 transition-colors group-hover:text-white sm:text-xs">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Blinking dot at curve convergence point */}
          <div
            className="absolute left-1/2 mt-1 -translate-x-1/2"
            style={{ top: orbitalCenterY - 4 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-secondary)]" />
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-[var(--accent-secondary)] opacity-50" />
            </div>
          </div>

          {/* Original orbital skills visualization */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: orbitalCenterY }}
          >
            <div className="relative flex items-center justify-center">
              {/* Glow effect at center */}
              <div className="absolute h-32 w-32 rounded-full bg-[var(--accent-primary)] opacity-20 blur-[80px]" />

              {/* Inner orbital ring */}
              <div
                className="absolute rounded-full border border-[var(--accent-primary)]/40 transition-all duration-300"
                style={{
                  width: innerRing.width,
                  height: innerRing.height,
                  transform: `rotate(${innerRing.rotation}deg)`,
                }}
              />

              {/* Outer orbital ring */}
              <div
                className="absolute rounded-full border border-[var(--accent-secondary)]/30 transition-all duration-300"
                style={{
                  width: outerRing.width,
                  height: outerRing.height,
                  transform: `rotate(${outerRing.rotation}deg)`,
                }}
              />

              {/* Inner ring skills */}
              {orbitConfig.inner.map((skillIndex, i) => {
                const skill = skills[skillIndex];
                const pos = getPosition(
                  i,
                  orbitConfig.inner.length,
                  innerRing.width / 2,
                  innerRing.height / 2,
                  innerRing.rotation,
                );

                return (
                  <div
                    key={skillIndex}
                    className="group xs:gap-1 absolute flex flex-col items-center gap-0.5 transition-transform duration-300"
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px)`,
                    }}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${categoryColors[skill.category]} xs:h-10 xs:w-10 xs:p-1.5 p-1 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:cursor-pointer group-hover:shadow-[0_0_20px_var(--glow-primary)] sm:h-12 sm:w-12 sm:p-2`}
                    >
                      <span className="xs:text-lg text-sm sm:text-xl">
                        {skill.icon}
                      </span>
                    </div>
                    <span className="xs:max-w-20 xs:text-[10px] max-w-14 text-center text-[8px] leading-tight text-white/60 transition-colors group-hover:text-white sm:text-xs">
                      {skill.name}
                    </span>
                  </div>
                );
              })}

              {/* Outer ring skills */}
              {orbitConfig.outer.map((skillIndex, i) => {
                const skill = skills[skillIndex];
                const pos = getPosition(
                  i,
                  orbitConfig.outer.length,
                  outerRing.width / 2,
                  outerRing.height / 2,
                  outerRing.rotation,
                );

                return (
                  <div
                    key={skillIndex}
                    className="group xs:gap-1 absolute flex flex-col items-center gap-0.5 transition-transform duration-300"
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px)`,
                    }}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${categoryColors[skill.category]} xs:h-10 xs:w-10 xs:p-1.5 p-1 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:cursor-pointer group-hover:shadow-[0_0_20px_var(--glow-primary)] sm:h-12 sm:w-12 sm:p-2`}
                    >
                      <span className="xs:text-lg text-sm sm:text-xl">
                        {skill.icon}
                      </span>
                    </div>
                    <span className="xs:max-w-20 xs:text-[10px] max-w-14 text-center text-[8px] leading-tight text-white/60 transition-colors group-hover:text-white sm:text-xs">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category legend - positioned below orbital */}
        <div className="xs:mt-24 mt-16 flex flex-wrap justify-center gap-4 pt-8 text-xs text-white/50 sm:mt-32">
          {(
            Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>
          ).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full bg-gradient-to-r ${categoryColors[key]}`}
              />
              {categoryLabels[key]}
            </div>
          ))}
        </div>

        {/* Curve style toggle - for client preview */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-xs text-white/40">
            {sectionContent.curveToggleLabel}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurveStyle("quadratic")}
              className={`rounded-md px-3 py-1.5 text-xs transition-all ${
                curveStyle === "quadratic"
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-[var(--card-bg)] text-white/60 hover:text-white"
              }`}
            >
              {sectionContent.curveOptions.quadratic}
            </button>
            <button
              type="button"
              onClick={() => setCurveStyle("cubic")}
              className={`rounded-md px-3 py-1.5 text-xs transition-all ${
                curveStyle === "cubic"
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-[var(--card-bg)] text-white/60 hover:text-white"
              }`}
            >
              {sectionContent.curveOptions.cubic}
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TechStack;
