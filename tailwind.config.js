/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgb(38, 57, 77) 0px 20px 30px -10px;', // Spread shadow more visibly
      },
      colors: {
        // Primary & Secondary Solids
        primarySolid: "#0147B9",   // Solid Primary Color
        secondary: "#041139",      // Secondary Background
        secondaryHover: "#041150",      // Secondary Background
        // Search Bar & Buttons
        searchBarBg: "rgba(255,255,255,0.32)",  // Search Bar Background
        searchBtnBg: "#0147B9",   // Search Button Background

      },
      backgroundImage: {
        primary: "radial-gradient(107.86% 70.84% at 52.33% 52.59%, #0147B9 0%, #051948 100%)",
        // customGradient: 'linear-gradient(117deg, rgba(255, 255, 255, 0.00) -3.91%, rgba(255, 255, 255, 0.04) 75.27%)',
        customGradient: "linear-gradient(117deg, rgba(255, 255, 255, 0.00) -3.91%, rgba(255, 255, 255, 0.04) 75.27%)",

      },
      backdropBlur: {
        21: '21px',
      },
      strokeWidth: {
        2: '2px',
      },
    },
  },
  plugins: [],
};


