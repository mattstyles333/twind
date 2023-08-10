/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        p: "#1f2937",
        s: "#1E3A8A",
        l: "#d6d3d1",
        t: "#0f172a",
        a: "#f97316",
        b: "#2563eb",
      },
      screens: {
        xxsm: "420px",
        xxxsm: "360px",
      },
    },
  },
  plugins: [],
  
};
