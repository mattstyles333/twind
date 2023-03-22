/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/email-header.html"],
  theme: {
    extend: {
      colors: {
        p: "#1f2937",
        s: "#1E3A8A",
        l: "#d6d3d1",
        t: "#00824E",
      },
      screens: {
        xxsm: "420px",
        xxxsm: "360px",
      },
    },
  },
  plugins: [],
};
