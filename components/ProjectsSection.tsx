import Image from "next/image";

import ScrollReveal from "@/components/ScrollReveal";

type Project = {
  label: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
  placeholder?: string;
};

const projects: Project[] = [
  {
    label: "Academic Focus",
    title: "Sustainable Infrastructure Design",
    description:
      "Focused on developing innovative infrastructure solutions that balance structural integrity with environmental sustainability. Applying knowledge from Applied Mathematics, Fluid Mechanics, and Materials Science to tackle real-world civil engineering challenges in South Africa.",
    tags: ["AutoCAD", "SolidWorks"],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E16AQGbzOd6Uny8Zg/profile-displaybackgroundimage-shrink_350_1400/B4EZoHtGnLKsAc-/0/1761065860376?e=1766620800&v=beta&t=pnqGdbuBXsKUciLbRtidrvnHS4L97_bElim3P6_-M34",
    imageAlt: "Infrastructure design",
  },
  {
    label: "Leadership & Involvement",
    title: "SAICE Student Chapter",
    description:
      "Active member of the South African Institution of Civil Engineering (SAICE) Student Chapter at UKZN, serving as Procurement Officer. Contributing to events and projects that connect students with industry professionals and promote engineering excellence in the community.",
    tags: ["Future Engineers Society"],
    placeholder: "SAICE",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative space-y-24 py-28">
      {projects.map((project, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div key={project.title}>
            <div
              className="pointer-events-none absolute top-8 right-0 left-1/3 -z-10 h-[420px] opacity-25 blur-[100px]"
              style={{
                background: "var(--gradient-hero)",
              }}
            />
            <ScrollReveal
              stagger={0.1}
              delay={index * 0.2}
              className="grid grid-cols-1 items-center md:grid-cols-2"
            >
              {/* text content */}
              <div
                className={`relative z-10 ${isReversed ? "md:order-2" : ""}`}
              >
                {/* heading */}
                <div className={`mb-12 ${isReversed ? "text-right" : ""}`}>
                  <p className="text-xs text-[var(--accent-tertiary)]">
                    {project.label}
                  </p>
                  <h3 className="text-2xl font-semibold text-white/90 md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                {/* description */}
                <div
                  className={`relative z-20 max-w-5xl rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_6px_40px_var(--glow-primary)] backdrop-blur-sm md:-mt-6 ${isReversed ? "md:-ml-24" : "md:-mr-24"}`}
                >
                  <p className="p-4 text-sm text-white/75">
                    {project.description}
                  </p>
                  <div
                    className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                    style={{
                      background: "var(--gradient-border)",
                    }}
                  />
                </div>
                <div
                  className={`mt-6 ml-2 flex space-x-3 text-white/60 ${isReversed ? "justify-end" : "justify-start"}`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* project image */}
              <div className={`relative ${isReversed ? "md:order-1" : ""}`}>
                <div
                  tabIndex={0}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--background)] shadow-[0_0_50px_var(--glow-primary)] transition-transform duration-500 ease-out hover:-translate-y-0.5 focus:-translate-y-0.5"
                >
                  {project.imageUrl ? (
                    <div className="h-[360px] overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.imageAlt || project.title}
                        width={1400}
                        height={350}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-[250px] items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-hover)] md:h-[360px]">
                      <span className="text-6xl font-bold text-white/90">
                        {project.placeholder}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
