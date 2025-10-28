import {
  Si99designs,
  SiFigma,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLiquibase,
  SiNodedotjs,
  SiReact,
  SiRust,
  SiShopify,
  SiSupabase,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { SkillCategory } from "../types";
import {
  Bug,
  Cloud,
  MonitorSmartphone,
  PaintBucket,
  PersonStanding,
  Puzzle,
} from "lucide-react";
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", category: "frontend", icon: SiReact, color: "#61DAFB" },
      {
        name: "TypeScript",
        category: "frontend",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        category: "frontend",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "HTML/CSS",
        category: "frontend",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Framer Motion",
        category: "frontend",
        icon: SiFramer,
        color: "#0055FF",
      },
      {
        name: "Responsive Design",
        category: "frontend",
        icon: MonitorSmartphone,
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git & GitHub",
        category: "tools",
        icon: SiGithub,
        color: "#181717",
      },
      {
        name: "Node.js",
        category: "tools",
        icon: SiNodedotjs,
        color: "#5FA04E",
      },
      {
        name: "GraphQL/SQL",
        category: "tools",
        icon: SiGraphql,
        color: "#E10098",
      },
      {
        name: "Tauri/Rust",
        category: "tools",
        icon: SiTauri,
        color: "#24C8D8",
      },
      {
        name: "Supabase",
        category: "tools",
        icon: SiSupabase,
        color: "#3FCF8E",
      },
      { name: "Rust", category: "tools", icon: SiRust, color: "#000000" },
      { name: "Figma", category: "tools", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      {
        name: "Agile/Scrum",
        category: "other",
        icon: SiJira,
        color: "#0052CC",
      },
      { name: "Problem Solving", category: "other", icon: Puzzle },
      { name: "RESTful APIs", category: "other", icon: Cloud },
      { name: "UI/UX Principles", category: "other", icon: PersonStanding },
      { name: "Shopify", category: "other", icon: SiShopify, color: "#7AB55C" },
      {
        name: "Liquid",
        category: "other",
        icon: SiLiquibase,
        color: "#2962FF",
      },
      { name: "Debugging", category: "other", icon: Bug },
    ],
  },
];
