const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblue: "rgb(5,4,19)",
        lightblue: "rgb(20,16,23)",
        mypurple: "rgb(238,130,238, .7)",
        projectblue: "rgb(18,15,55)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: 100, // Stärke 100
        extrabold: 800, // Stärke 800
      },
      boxShadow: {
        glow: "0 0 35px 2px rgba(238,130,238, 0.5)",
        glowlight: "0 0 35px 2px rgba(238,130,238, 0.15)", // Rosa Glow-Effekt
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
