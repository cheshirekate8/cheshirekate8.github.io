import { IconType } from "@icons-pack/react-simple-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color?: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
