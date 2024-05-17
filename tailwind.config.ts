import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' }, //TODO: When the mouse is on hover increase the size and when you 
          '50%': { transform: 'scale(1.02)' },
        },
      },
      animation: {
        pulseScale: 'pulseScale 2s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "celestito": "#00b4fc"
      }
    },
  },
  plugins: [],
};
export default config;
