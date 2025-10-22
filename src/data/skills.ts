import { SkillCategory } from "../types";
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "HTML/CSS", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Responsive Design", category: "frontend" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", category: "tools" },
      { name: "Vite", category: "tools" },
      { name: "npm/yarn", category: "tools" },
      { name: "VS Code", category: "tools" },
      { name: "Chrome DevTools", category: "tools" },
      { name: "Figma", category: "tools" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "RESTful APIs", category: "other" },
      { name: "Problem Solving", category: "other" },
      { name: "UI/UX Principles", category: "other" },
      { name: "Agile/Scrum", category: "other" },
    ],
  },
];
