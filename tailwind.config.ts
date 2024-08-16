import { Arimo } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily:{
      arvo: ['Arvo', 'serif'],
      Arimo:[ "Arimo", "sans-serif"],
      serif: ['"MS Serif"', 'New York', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
      trebuchet: ['"Trebuchet MS"', 'sans-serif'],
    },
    extend: {
    colors:{
      primary:"#8a1538",
      secondary:"#ffc600",
      black1:"#1a1a1a",
      black2:"#1d272f",
     
    }
    },

  },
  plugins: [],
};
export default config;
