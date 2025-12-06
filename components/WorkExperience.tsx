import { HiAcademicCap } from "react-icons/hi2";
import { TbBuildingSkyscraper, TbEngine, TbShoppingCart } from "react-icons/tb";

import ScrollReveal from "@/components/ScrollReveal";

const sectionContent = {
  title: "Experience & Education",
};

type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  icon: React.ReactNode;
};

const experienceItems: ExperienceItem[] = [
  {
    title: "UKZN SAICE Student Chapter",
    role: "Procurement Officer",
    period: "Oct 2025 - Present",
    location: "Durban, KwaZulu-Natal",
    description:
      "Sourcing and managing resources for events and projects. Communicating with suppliers, negotiating deals, and coordinating logistics while maintaining quality within budget.",
    icon: <TbShoppingCart className="size-full" />,
  },
  {
    title: "Malvern Learning Academy",
    role: "Tutor",
    period: "Jan 2024 - Jun 2025",
    location: "Durban, KwaZulu-Natal",
    description:
      "Providing personalised support to students, helping them understand and apply engineering design concepts, prepare for tests, and track progress.",
    icon: <HiAcademicCap className="size-full" />,
  },
  {
    title: "BMW SupertechDurban",
    role: "Mechanical Technician Apprentice",
    period: "Sep 2022",
    location: "Durban, KwaZulu-Natal",
    description:
      "Assisted senior technicians in diagnosing, repairing, and maintaining vehicles. Gained hands-on experience in troubleshooting engine, brake, suspension, and electrical systems.",
    icon: <TbEngine className="size-full" />,
  },
  {
    title: "University of KwaZulu-Natal",
    role: "BSc (Hons) Civil Engineering",
    period: "Feb 2024 - Nov 2028",
    location: "Durban, KwaZulu-Natal",
    description:
      "Coursework includes Applied Mathematics, Fluid Mechanics, Materials Science, and Civil Design. Active member of SAICE Student Chapter and Future Engineers Society.",
    icon: <TbBuildingSkyscraper className="size-full" />,
  },
];

const WorkExperience = () => {
  return (
    <section id="about" className="relative py-24">
      {/* glow effect */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[280px] w-[90vw] -translate-x-1/2 opacity-25 blur-[100px] sm:h-[380px] sm:w-[760px] md:h-[520px] md:w-[1000px]"
        style={{
          background: "var(--gradient-radial)",
        }}
      />
      <div>
        <h3 className="mb-8 text-2xl font-semibold text-white/90 md:text-3xl">
          {sectionContent.title}
        </h3>

        <ScrollReveal
          stagger={0.1}
          className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8"
        >
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_8px_32px_var(--glow-primary)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[var(--card-border-hover)] hover:shadow-[0_12px_48px_var(--glow-primary)] sm:p-6 md:p-7"
            >
              {/* card gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: "var(--gradient-card)",
                }}
              ></div>

              <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 md:gap-8">
                {/* icon */}
                <div className="relative h-16 w-16 shrink-0 text-[var(--accent-secondary)] drop-shadow-[0_6px_20px_var(--glow-primary)] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:size-20 md:size-24">
                  {item.icon}
                </div>

                {/* text content */}
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs text-[var(--accent-tertiary)]">
                    {item.period}
                  </p>
                  <h4 className="mt-1 mb-1 text-base font-semibold text-white sm:text-lg md:text-xl">
                    {item.role}
                  </h4>
                  <p className="text-sm text-white/80">{item.title}</p>
                  <p className="mt-1 text-xs text-white/50">{item.location}</p>
                  <p className="mx-auto mt-3 max-w-sm text-xs text-white/60 sm:mx-0 md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;
