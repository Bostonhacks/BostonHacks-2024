import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text-primary': '#FFFFFF',
      },
      fontFamily: {
        pp: ['pp-reg', 'sans-serif'], //pp is then what u use in the actual code file
        cg: ['carrois gothic', 'sans-serif'],
        sevenSegment: ['7SegmentDigital', 'sans-serif'], // Custom name for 7-segment digital font
        carroisGothic: ['CarroisGothic', 'sans-serif'],
        ppSupplyMono: ['PPSupplyMono', 'monospace'],
        ppSupplyMonoUltralight: ['PPSupplyMonoUltralight', 'monospace'],
        saint: ['Saint', 'serif'],
        digital: ['"Digital7"', 'sans-serif'],
      },
      // keyframes: {
      //   rotateDown: {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '100%': { transform: 'rotate(180deg)' },
      //   },
      //   rotateUp: {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '100%': { transform: 'rotate(-180deg)' },
      //   },
      // },
      // animation: {
      //   rotateDown: 'rotateDown ease-out 0.3s',
      //   rotateUp: 'rotateUp ease-out 0.3s',
      // },
    },
  },
  plugins: [],
};
export default config;
