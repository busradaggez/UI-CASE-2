import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor1: "#5956E9",
        mycolor2: "#7572FF",
        mycolor3: "#6C6C72",
        mycolor4: "#232233",
        mycolor5: "#232233",
      },
    },
  },
  plugins: [],

} satisfies Config;
