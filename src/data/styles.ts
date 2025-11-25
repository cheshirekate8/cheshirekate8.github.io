import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colors = {
  federalBlue: "#03045e",
  marianBlue: "#023e8a",
  honoluluBlue: "#0077b6",
  blueGreen: "#0096c7",
  pacificCyan: "#00b4d8",
  vividSky: "#48cae4",
  nonPhoto: "#90e0ef",
  lightCyan: "#caf0f8",
};
