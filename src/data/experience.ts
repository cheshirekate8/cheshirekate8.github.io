import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "job-1",
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Leading frontend development for enterprise applications",
    responsibilities: [
      "Led a team of 5 developers in building responsive web applications",
      "Implemented new features that increased user engagement by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance, reducing load times by 50%",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    id: "job-2",
    company: "Startup XYZ",
    position: "Frontend Developer",
    location: "Remote",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: "Built and maintained customer-facing web applications",
    responsibilities: [
      "Developed responsive React applications from scratch",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Integrated RESTful APIs and managed application state",
      "Participated in agile development process",
    ],
    technologies: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    id: "job-3",
    company: "Web Agency",
    position: "Junior Web Developer",
    location: "New York, NY",
    startDate: "Jan 2019",
    endDate: "May 2020",
    description: "Created websites for various clients",
    responsibilities: [
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Maintained and updated existing client websites",
      "Worked closely with design team to implement mockups",
      "Ensured cross-browser compatibility",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];
