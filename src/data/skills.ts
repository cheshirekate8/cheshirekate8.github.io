import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", proficiency: 90, category: "frontend" },
      { name: "TypeScript", proficiency: 85, category: "frontend" },
      { name: "Tailwind CSS", proficiency: 90, category: "frontend" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", proficiency: 85, category: "tools" },
      { name: "Vite", proficiency: 80, category: "tools" },
    ],
  },
];
