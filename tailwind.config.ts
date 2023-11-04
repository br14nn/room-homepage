import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        18: "4.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontSize: {
        sm: "0.75rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.563rem",
        "2xl": "1.953rem",
        "3xl": "2.441rem",
        "4xl": "3.052rem",
      },
      screens: {
        xs: "22.5rem",
        // => @media (min-width: 22.5rem) { ... }

        sm: "40rem",
        // => @media (min-width: 40rem) { ... }

        md: "48rem",
        // => @media (min-width: 48rem) { ... }

        lg: "64rem",
        // => @media (min-width: 64rem) { ... }

        xl: "80rem",
        // => @media (min-width: 80rem) { ... }

        "2xl": "90rem",
        // => @media (min-width: 96rem) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
