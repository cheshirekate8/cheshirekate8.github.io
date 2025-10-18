export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  location?: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  resume?: string; // Link to resume PDF
}

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Frontend Developer",
  tagline: "Building beautiful, performant web experiences",
  bio: [
    "First paragraph about your background...",
    "Second paragraph about your passion...",
  ],
  email: "you@example.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};
