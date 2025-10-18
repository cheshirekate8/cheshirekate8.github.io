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
