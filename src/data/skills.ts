import {
  SiDocker,
  SiGithub,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiJira,
  SiNodedotjs,
  SiOpenai,
  SiPinia,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";
import { SkillCategory } from "../types";
import {
  BarChart3,
  Bug,
  Cloud,
  Network,
  PersonStanding,
  Puzzle,
} from "lucide-react";
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", category: "frontend", icon: SiReact, color: "#61DAFB" },
      { name: "Vue 3", category: "frontend", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Pinia", category: "frontend", icon: SiPinia, color: "#FFD859" },
      { name: "SciChart", category: "frontend", icon: BarChart3, color: "#F26522" },
    ],
  },
  {
    title: "Tools & Backend",
    skills: [
      { name: "Git & GitHub", category: "tools", icon: SiGithub, color: "#181717" },
      { name: "Tauri", category: "tools", icon: SiTauri, color: "#24C8D8" },
      { name: "Rust", category: "tools", icon: SiRust, color: "#000000" },
      { name: "Docker", category: "tools", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", category: "tools", icon: Cloud, color: "#FF9900" },
      { name: "Node.js", category: "tools", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "GraphQL/SQL", category: "tools", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Agile/Scrum", category: "other", icon: SiJira, color: "#0052CC" },
      { name: "RESTful APIs", category: "other", icon: Network },
      { name: "UI/UX Principles", category: "other", icon: PersonStanding },
      { name: "SVG/Icon Design", category: "other", icon: SiInkscape, color: "#000000" },
      { name: "Problem Solving", category: "other", icon: Puzzle },
      { name: "Debugging", category: "other", icon: Bug },
      { name: "AI-Assisted Dev", category: "other", icon: SiOpenai, color: "#412991" },
    ],
  },
];
