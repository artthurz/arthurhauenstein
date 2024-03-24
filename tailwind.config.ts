import type { Config } from "tailwindcss";

const config = {
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
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
