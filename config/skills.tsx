import { Skill, SoftSkill } from "@/types/types";
import { FaDraftingCompass, FaHardHat } from "react-icons/fa";
import { GiConcreteBag, GiMountainRoad, GiWaterDrop } from "react-icons/gi";
import {
  HiCalculator,
  HiClipboardDocumentCheck,
  HiCube,
  HiLightBulb,
} from "react-icons/hi2";
import { MdEngineering } from "react-icons/md";
import { SiAutodesk } from "react-icons/si";
import {
  TbBuildingBridge2,
  TbClock,
  TbMathFunction,
  TbMessageCircle,
  TbRulerMeasure,
  TbUsers,
} from "react-icons/tb";

// Technical skills for orbital rings
export const skills: Skill[] = [
  // Software & Tools
  { name: "AutoCAD", icon: <SiAutodesk />, category: "software" },
  { name: "SolidWorks", icon: <HiCube />, category: "software" },
  { name: "Drafting", icon: <FaDraftingCompass />, category: "software" },
  // Engineering Skills
  {
    name: "Civil Design",
    icon: <TbBuildingBridge2 />,
    category: "engineering",
  },
  { name: "Surveying", icon: <TbRulerMeasure />, category: "engineering" },
  // Coursework
  { name: "Applied Maths", icon: <TbMathFunction />, category: "coursework" },
  { name: "Fluid Mechanics", icon: <GiWaterDrop />, category: "coursework" },
  {
    name: "Materials Science",
    icon: <GiConcreteBag />,
    category: "coursework",
  },
  { name: "Geotechnical", icon: <GiMountainRoad />, category: "coursework" },
  {
    name: "Structural Analysis",
    icon: <HiCalculator />,
    category: "coursework",
  },
  // Fieldwork & Practical
  { name: "Site Inspection", icon: <FaHardHat />, category: "fieldwork" },
  {
    name: "Quality Control",
    icon: <HiClipboardDocumentCheck />,
    category: "fieldwork",
  },
  {
    name: "Project Coordination",
    icon: <MdEngineering />,
    category: "fieldwork",
  },
];

export const softSkills: SoftSkill[] = [
  { name: "Problem Solving", icon: <HiLightBulb /> },
  { name: "Teamwork", icon: <TbUsers /> },
  { name: "Communication", icon: <TbMessageCircle /> },
  { name: "Time Management", icon: <TbClock /> },
];

export const categoryColors = {
  software: "from-blue-500 to-cyan-400",
  engineering: "from-[var(--accent-primary)] to-[var(--accent-secondary)]",
  coursework: "from-amber-500 to-orange-400",
  fieldwork: "from-emerald-500 to-teal-400",
};

export const categoryLabels = {
  software: "Software",
  engineering: "Engineering",
  coursework: "Coursework",
  fieldwork: "Fieldwork",
};

export const sectionContent = {
  intro: "In search of a",
  highlight: "ground-breaking",
  outro: "team",
  tagline: "that values building infrastructure people can actually stand on",
  curveToggleLabel: "Curve Style Preview",
  curveOptions: {
    quadratic: "Quadratic (Fan)",
    cubic: "Cubic (S-Curve)",
  },
};
