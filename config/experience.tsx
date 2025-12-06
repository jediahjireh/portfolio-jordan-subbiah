import { ExperienceItem } from "@/types/types";
import { HiAcademicCap } from "react-icons/hi2";
import { TbBuildingSkyscraper, TbEngine, TbShoppingCart } from "react-icons/tb";

export const sectionContent = {
  title: "Experience & Education",
};

export const experienceItems: ExperienceItem[] = [
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
