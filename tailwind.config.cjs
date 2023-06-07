/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      backrondprimary: "#FFFFFF",
      backrondsecondary: "#F6F6F6",
      gray: {
        50: "#F6F6F6",
        100: "#EEEEEE",
        200: "#E2E2E2",
        300: "#CBCBCB",
        400: "#AFAFAF",
        500: "#6B6B6B",
        600: "#545454",
        700: "#333333",
        800: "#1F1F1F",
        900: "#141414",
      },
    },
    fontFamily: {
      sans: ["Proto Mono", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
