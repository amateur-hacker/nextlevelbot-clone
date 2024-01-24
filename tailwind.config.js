/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2lg": "1075px",
      },
      // animation: {
      //   "slide-bottom": "slide-bottom 0.3s ease-in both",
      //   "slide-up": "slide-up 0.3s ease-in both",
      // },
      // keyframes: {
      //   "slide-bottom": {
      //     "0%": {
      //       clipPath: polygon("0% 0%, 100% 0.00%, 100% 0%, 0% 0%"),
      //     },
      //     "100%": {
      //       clipPath: polygon("0% 0%, 100% 0.00%, 100% 100%, 0% 100%"),
      //     },
      //   },

      //   "slide-up": {
      //     "0%": {
      //       transform: "scaleY(1)",
      //     },
      //     to: {
      //       transform: "scaleY(0)",
      //     },
      //   },
      // },

      // animation: {
      //   "slide": "slide 5s linear infinite",
      // },
      // keyframes: {
      //   slide: {
      //     "0%": {
      //       transform: "translateX(0)",
      //     },
      //     "100%": {
      //       transform: "translateX(calc(-250px * 7))",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
