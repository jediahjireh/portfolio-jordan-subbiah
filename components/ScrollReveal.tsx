"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  opacityFrom?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

const ScrollReveal = ({
  children,
  className,
  offsetY = 16,
  opacityFrom = 0,
  duration = 1.1,
  delay = 0,
  ease = "power2.out",
  stagger,
  as: Wrapper = "div",
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const element = containerRef.current as unknown as HTMLElement | null;
    if (!element) return;

    const targets: gsap.TweenTarget =
      typeof stagger === "number"
        ? (element as HTMLElement).querySelectorAll(":scope > *")
        : element;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: opacityFrom,
          y: offsetY,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: ease,
          stagger: stagger,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            once: true,
          },
        },
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [offsetY, opacityFrom, duration, delay, ease, stagger]);

  const Tag = Wrapper as any;
  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;
