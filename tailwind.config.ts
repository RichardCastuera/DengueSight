import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand Colors (from image) */
        brand: {
          DEFAULT: "#B00014",   // main crimson
          dark: "#7A000F",
          soft: "#E8E3E3",
        },

        surface: {
          DEFAULT: "#D3CECE",   // navbar/cards
          elevated: "#FFFFFF",
          base: "#F4F2F2",
        },

        neutral: {
          text: "#1A1A1A",
          secondary: "#2B2B2B",
          muted: "#6B6B6B",
          border: "#2B2B2B",
        },
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
}

export default config