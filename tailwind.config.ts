import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#0B4630",
          DEFAULT: "#146B45",
          light: "#1E8A5A",
        },
        forest: "#0F3D2A",
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C97A",
          dark: "#A6812F",
        },
        beige: {
          DEFAULT: "#F4EEDD",
          dark: "#E9DFC4",
        },
        charcoal: {
          DEFAULT: "#1B1B18",
          light: "#2A2A25",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "feather-texture":
          "radial-gradient(circle at 20% 20%, rgba(201,162,75,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(20,107,69,0.10), transparent 45%)",
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(11,70,48,0.35)",
        gold: "0 10px 30px -10px rgba(201,162,75,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
