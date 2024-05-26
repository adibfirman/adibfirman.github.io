import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grandstander: '"Grandstander", cursive',
      },
    },
  },
  plugins: [],
} satisfies Config;
