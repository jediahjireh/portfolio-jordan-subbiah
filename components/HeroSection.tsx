"use client";

import { useState } from "react";

import Image from "next/image";

import { heroContent } from "@/config/hero";
import { Typewriter } from "react-simple-typewriter";

import ScrollReveal from "@/components/ScrollReveal";
import {
  AvatarPlaceholder,
  CurvedArrow,
  EllipseHighlight,
} from "@/components/icons";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal
          stagger={0.1}
          className="flex flex-col items-center gap-8 md:flex-row md:items-center"
        >
          {/* avatar and greetings */}
          <div className="relative flex justify-center">
            <div className="pointer-events-none absolute -inset-12 rounded-full bg-linear-to-b from-[var(--accent-hover)] via-[var(--accent-primary)]/20 to-transparent opacity-50 blur-[80px] md:-inset-24"></div>
            <div className="relative">
              <div className="relative size-60 overflow-hidden rounded-full border-4 border-[var(--accent-primary)]/20 shadow-[0_0_50px_var(--glow-primary)]">
                {!imageLoaded && (
                  <div className="absolute inset-0">
                    <AvatarPlaceholder />
                  </div>
                )}
                <Image
                  src={heroContent.avatarUrl}
                  alt={heroContent.name}
                  fill
                  className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* small greeting with curve arrow */}
              <div className="pointer-events-none absolute -top-8 -right-6 text-xs text-white/70 select-none md:-top-16 md:-right-40">
                <div className="relative flex items-center justify-end">
                  <div className="relative h-6 w-16 md:h-16 md:w-24">
                    <CurvedArrow />
                  </div>
                  <div className="-mt-6 shrink-0 md:-mt-10">
                    <span>{heroContent.greeting} </span>
                    <span className="text-[var(--accent-tertiary)]">
                      {heroContent.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* headline */}
          <div className="w-full text-center md:w-auto md:pl-2 md:text-left">
            <p className="mb-2 text-sm text-white/60 md:text-base">
              {heroContent.subtitle}
            </p>

            <h1 className="text-4xl leading-[1.15] font-normal tracking-tight sm:text-5xl">
              <span className="block">{heroContent.headline.line1}</span>
              <span className="block">
                {heroContent.headline.line2}{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[var(--accent-primary)]">
                    {heroContent.headline.highlight}
                  </span>
                  <EllipseHighlight />
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-md text-[10px] text-white/50 md:mx-0 md:max-w-lg md:text-xs">
              {heroContent.tagline}
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal
          delay={0.15}
          className="mt-16 max-w-3xl text-center md:text-left"
        >
          <h2 className="text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl">
            <Typewriter
              words={heroContent.typewriterWords}
              typeSpeed={65}
              deleteSpeed={0}
              delaySpeed={600}
              cursor
              cursorStyle="|"
              loop={1}
            />
          </h2>
          <p className="text-white/80">{heroContent.degree}</p>

          <p className="mt-6 leading-7 text-white/70">{heroContent.bio}</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
