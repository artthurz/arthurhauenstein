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
    },
    backgroundImage: {
      "grid-slate-400": "url('/images/grid-background/bg-grid-slate-400.svg')",
      "grid-slate-900": "url('/images/grid-background/bg-grid-slate-900.svg')",
      "beams-blue-dark": "url('/images/beams-background/beams-blue-dark.png')",
      "beams-blue-light":
        "url('/images/beams-background/beams-blue-light.jpg')",
      "beams-indigo-dark":
        "url('/images/beams-background/beams-indigo-dark.png')",
      "beams-indigo-light":
        "url('/images/beams-background/beams-indigo-light.jpg')",
      "beams-pink-dark": "url('/images/beams-background/beams-pink-dark.png')",
      "beams-pink-light":
        "url('/images/beams-background/beams-pink-light.jpg')",
      "beams-sky-dark": "url('/images/beams-background/beams-sky-dark.png')",
      "beams-sky-light": "url('/images/beams-background/beams-sky-light.jpg')",
      "beams-dark": "url('/images/beams-background/beams-dark.jpg')",
      "beams-light": "url('/images/beams-background/beams-light.png')",
      overlay: "url('/images/beams-background/overlay.webp')",
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
