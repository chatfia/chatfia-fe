import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      writingMode: {
        horizontal: "horizontal-tb",
        vertical: "vertical-rl",
      },
      transitionDuration: {
        "5000": "5000ms",
      },
      colors: {
        custom: "var(--custom)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        colorChangeRed: {
          "0%, 100%": { color: "#F87171" },
          "50%": { color: "white" },
        },
        colorChangeGreen: {
          "0%, 100%": { color: "#34D399" },
          "50%": { color: "white" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        colorChangeRed: "colorChangeRed 3s infinite",
        colorChangeGreen: "colorChangeGreen 3s infinite",
        fadeIn: "fadeIn 300ms ease-in-out",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: string[],
      ) => void;
    }) {
      addUtilities(
        {
          ".no-user-select": {
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
          },
          ".no-user-drag": {
            "-webkit-user-drag": "none",
            "-khtml-user-drag": "none",
            "-moz-user-drag": "none",
            "-o-user-drag": "none",
            "user-drag": "none",
          },
        },
        ["responsive", "hover"],
      );
    },
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;

export default config;
