export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  underConstruction?: boolean;
  category?: "web-app" | "website" | "tool" | "other";
}
