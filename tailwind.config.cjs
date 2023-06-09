/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "18px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
      "5xl": "3.052rem",
    },
    colors: {
      backrondPrimary: "#FFFFFF",
      backrondSecondary: "#F6F6F6",
      black: "#000000",
      white: "#FFFFFF",
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
