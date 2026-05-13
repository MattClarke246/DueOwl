import type { Config } from "tailwindcss";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette derived from Due_Owl_HeaderEND.png
        sky: {
          50: "#F1F9FE",
          100: "#E2F2FC",
          200: "#BFE2F7",
          300: "#8ECCEF",
          400: "#5DB4E5",
          500: "#3A9CD9",
          600: "#2A82BD",
          700: "#236997",
        },
        owl: {
          50: "#F2F7EE",
          100: "#E1ECD6",
          200: "#C5DAAE",
          300: "#A0C282",
          400: "#7FAB5D",
          500: "#5F8C3F",
          600: "#4A6F30",
          700: "#3A5826",
        },
        bronze: {
          50: "#FBF4E7",
          100: "#F4E4BF",
          200: "#E9C885",
          300: "#D9A957",
          400: "#C9923E",
          500: "#A87726",
          600: "#855D1D",
          700: "#5F4214",
        },
        cream: {
          50: "#FBF8F1",
          100: "#F6F1E5",
          200: "#EFE6D2",
          DEFAULT: "#FBF8F1",
        },
      },
      borderRadius: {
        lg: "1.25rem",
        md: "0.875rem",
        sm: "0.5rem",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 8px 32px rgba(15, 23, 42, 0.06)",
        "glass-lg":
          "0 1px 0 0 rgba(255,255,255,0.7) inset, 0 24px 60px -20px rgba(15, 23, 42, 0.18)",
        "soft": "0 12px 40px -16px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "noise":
          "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.04) 1px, transparent 0)",
        "mesh-warm":
          "radial-gradient(at 12% 0%, rgba(201,146,62,0.10) 0px, transparent 50%), radial-gradient(at 85% 8%, rgba(58,156,217,0.12) 0px, transparent 55%), radial-gradient(at 70% 92%, rgba(95,140,63,0.10) 0px, transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "shimmer-sweep": {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "float": "float 6s ease-in-out infinite",
        "shimmer-sweep": "shimmer-sweep 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
