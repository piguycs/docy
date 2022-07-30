/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        midnight: "#0E1329",
        highlight: "#151c3d",
        neptune: "#76A0B4",
        grad1: "#2cd8d5",
        grad2: "#8e37d7",
        palenight: "hsl(229, 49%, 14%)",
        palenight2: "hsl(229, 49%, 21%)",
        // palenight2: "#292d3e",
        darkborder: "#233067",
      },
      fontFamily: {
        sans: ["Inter"],
        mono: ["firacode"],
        docs: ["DM Sans"],
      },
    },
  },
  plugins: [],
};
