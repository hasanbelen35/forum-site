import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whiteBg: "#FFFFFF",
        grayBg: "#F3F4F6",
        greenBg: "#82BD4E",
        textGreen: "#82BD4E",
        darkerBG: "#262626",
        darkBg: "#2D2D2D",
        darkTextGreen:"#82BF4E"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1028px',
        'xl': '1280px',
        '2xl': '1536px',
      },


    },
  },
  plugins: [],
} satisfies Config;
