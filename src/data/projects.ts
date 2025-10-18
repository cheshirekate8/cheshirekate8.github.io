import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Your Project Name",
    description: "Brief description for card view",
    longDescription: "More detailed description...",
    image: "/path/to/image.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: true,
    category: "web-app",
  },
];
