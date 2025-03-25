/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        "noto-sans-hatran-regular": ["Noto Sans Hatran", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-30px, 20px) scale(1.1)" },
          "66%": { transform: "translate(20px, -30px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
