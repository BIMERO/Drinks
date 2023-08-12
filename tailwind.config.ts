import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Content/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg_2.jpg.png')",
        "history-pattern": "url('/images/about.jpg')",
      },

      colors: {
        brand_primary: {
          50: "#b7472a",
          100: "#ab4227",
          150: "#a23f25",
        },

        brand_secondary: {
          50: "#f5f4f0",
          100: "#dee2e6",
          150: "#343a40",
          200: "#cccccc",
          250: "#1a1a1a",
          300: "#212529",
          350: "#bbb",
          400: "#b3b3b3",
        },

        brand_gray: {
          50: "rgba(255, 255, 255, 0.5)",
          100: "rgba(255, 255, 255, 0.2)",
          150: "rgba(255, 255, 255, 0.8)",
          200: "rgba(0, 0, 0, 0.1)",
          250: "rgba(0, 0, 0, 0.05)",
        },
      },

      gridTemplateColumns: {
        product: "1fr 300px",
      },
    },
  },
  plugins: [],
};
export default config;
