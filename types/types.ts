//projects
export type Project = {
  label: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
  placeholder?: string;
};

// skills
export type Skill = {
  name: string;
  icon: React.ReactNode;
  category: "software" | "engineering" | "coursework" | "fieldwork";
};

// Soft skills - displayed at top with curved lines
export type SoftSkill = {
  name: string;
  icon: React.ReactNode;
};

// experience
export type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  icon: React.ReactNode;
};
