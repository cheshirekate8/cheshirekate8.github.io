/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      translate: {
        'extra': '150%',
      },
      dropShadow: {
        'hard': '5px 5px rgba(0, 0, 0, 0.2)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        jost: ['var(--font-jost)'],
        caveat: ['var(--font-caveat)'],
      },
      textShadow: {
        black: '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        "reveal": {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        "donk": {
          '0%': { transform: "translate3d(0, 0, 0)" },
          '20%': { transform: "translate3d(16px, 0, 0)" },
          '40%': { transform: "translate3d(6px, 0, 0)" },
          '60%': { transform: "translate3d(16px, 0, 0)" },
          '80%': { transform: "translate3d(12px, 0, 0)" },
          '100%': { transform: "translate3d(16px, 0, 0)" },
        },

      },
      animation: {
        'reveal': 'reveal .25s ease-in-out forwards ',
        'donk': 'donk .35s ease-in-out forwards ',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}