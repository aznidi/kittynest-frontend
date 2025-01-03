/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4A261", // Orange doux
        secondary: "#2A9D8F", // Vert sauge
        accent: "#264653", // Bleu foncé
        light: "#F8EDE3", // Beige clair
        neutral: "#FEFAF4", // Blanc cassé
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
