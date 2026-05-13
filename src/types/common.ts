export interface NavLink {
  label: string;
  href: string; // Section ID like "#about"
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string; // Use "Present" for current job
  responsibilities: string[];
  technologies?: string[];
  logo?: string;
}
