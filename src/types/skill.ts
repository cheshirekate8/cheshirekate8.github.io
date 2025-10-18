export interface Skill {
  name: string;
  icon?: string; // Icon name or path
  proficiency?: number; // 1-5 or 1-100
  category: "frontend" | "backend" | "tools" | "other";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
