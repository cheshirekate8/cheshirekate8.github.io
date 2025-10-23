import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "cahdb",
    title: "Cards Against Humanity Deck Builder",
    description:
      "Build, save, and share custom Cards Against Humanity decks with my intuitive click-to-add builder.",
    image: "/path/to/image.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: false,
    underConstruction: true,
    category: "web-app",
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    description: "A portfolio to showcase my experience, skills, and projects.",
    image: "./portfolioPic.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
    ],
    liveUrl: "https://cheshirekate8.github.io",
    githubUrl: "https://github.com/cheshirekate8.github.io",
    featured: false,
    category: "website",
  },
];
