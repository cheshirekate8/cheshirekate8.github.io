import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const styles = {
  section: "py-16 md:py-24 lg:py-32",
  container: "max-w-7xl mx-auto px-6 md:px-8 lg:px-12",
  heading:
    "text-3xl md:text-4xl lg:text-5xl font-bold text-marian-blue dark:text-vivid-sky",
  subheading: "text-xl md:text-2xl text-pacific-cyan dark:text-vivid-sky",
  card: "bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-lg p-6 shadow-lg hover:shadow-xl transition-all",
  primaryBtn:
    "bg-honolulu-blue hover:bg-marian-blue dark:bg-pacific-cyan dark:hover:bg-honolulu-blue text-white px-6 py-3 rounded-lg font-medium transition-colors",
  secondaryBtn:
    "bg-pacific-cyan hover:bg-honolulu-blue dark:bg-honolulu-blue dark:hover:bg-pacific-cyan text-white px-6 py-3 rounded-lg font-medium transition-colors",
  link: "text-honolulu-blue hover:text-pacific-cyan dark:text-vivid-sky dark:hover:text-pacific-cyan transition-colors underline-offset-4 hover:underline",
};
