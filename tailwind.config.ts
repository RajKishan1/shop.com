import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        integral: ["integral", "sans-serif"],
        satoshi: ["satoshi", "sans-serif"],
        satoshiBold: ["satoshiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
