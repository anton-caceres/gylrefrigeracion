import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007BFF",
          50: "#E6F2FF",
          100: "#CCE5FF",
          200: "#99CCFF",
          300: "#66B2FF",
          400: "#33A0FF",
          500: "#007BFF",
          600: "#0062CC",
          700: "#004A99",
          800: "#003366",
          900: "#001A33"
        },
        accent: {
          DEFAULT: "#00CFFF"
        },
        graybrand: {
          DEFAULT: "#4A4A4A"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
