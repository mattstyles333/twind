/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        p: "#1f2937",
        s: "#1E3A8A",
        l: "#f3f4f6",
        t: "#5494EC",
        a: "#f97316",
        b: "#2563eb",
        gr: "#6b7280",
      },
      screens: {
        xxsm: "420px",
        xxxsm: "360px",
      },
    },
  },
  plugins: [],
};
