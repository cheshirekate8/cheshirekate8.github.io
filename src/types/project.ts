export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For modal/expanded view
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean; // To highlight top projects
  category?: "web-app" | "website" | "tool" | "other";
}
