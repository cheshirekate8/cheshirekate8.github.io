import { IconType } from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";
export interface NavLink {
  label: string;
  href: string; // Section ID like "#about"
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
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
  description: string;
  responsibilities: string[];
  technologies?: string[];
  logo?: string; // Optional company logo
}
