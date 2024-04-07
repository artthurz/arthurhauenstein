const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0F172A",
          accent: "#0EA5E9",
          "base-100": "#ffffff",
          "base-200": "#ffffff",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ffffff",
          accent: "#38BDF8",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
        },
      },
    ],
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
      backgroundImage: ({ theme }) => ({
        hero: `linear-gradient(to right, ${theme("colors.indigo.500")},${theme(
          "colors.sky.500"
        )},${theme("colors.amber.600")},${theme("colors.amber.900")})`,
        "beams-blue-dark":
          "url('/images/beams-background/beams-blue-dark.png')",
        "beams-blue-light":
          "url('/images/beams-background/beams-blue-light.jpg')",
        "beams-indigo-dark":
          "url('/images/beams-background/beams-indigo-dark.png')",
        "beams-indigo-light":
          "url('/images/beams-background/beams-indigo-light.jpg')",
        "beams-pink-dark":
          "url('/images/beams-background/beams-pink-dark.png')",
        "beams-pink-light":
          "url('/images/beams-background/beams-pink-light.jpg')",
        "beams-sky-dark": "url('/images/beams-background/beams-sky-dark.png')",
        "beams-sky-light":
          "url('/images/beams-background/beams-sky-light.jpg')",
        "beams-dark": "url('/images/beams-background/beams-dark.jpg')",
        "beams-light": "url('/images/beams-background/beams-light.png')",
        overlay: "url('/images/beams-background/overlay.webp')",
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
