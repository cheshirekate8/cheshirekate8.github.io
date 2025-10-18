/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-black": "#050823", //text lightmode
        "navy": "#0C134F", //main headings, body text, navigation labels, and icons
        "royal": "#1D267D", //call-to-action buttons, primary links, active navigation states
        "purple": "#5C469C", //secondary buttons, hover states, form field borders when focused, subheadings
        "lavender": "#D4ADFC", //badges, notifications, progress bars, subtle background sections
        "lav-white": "#F5EBFE", //text darkmode
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}