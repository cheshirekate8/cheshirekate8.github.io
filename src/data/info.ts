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
  resume?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Katie Young",
  title: "Frontend Developer",
  tagline: "Building beautiful, performant web experiences",
  bio: [
    "First paragraph about your background...",
    "Second paragraph about your passion...",
  ],
  email: "you@example.com",
  social: {
    github: "https://github.com/cheshirekate8",
    linkedin: "https://linkedin.com/in/cheshirekate8",
  },
};
