/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-outfit)",
      display: "var(--font-space)",
      mono: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#050505",
        secondary: "#111113",
        surface: "#1a1a1e",
        accent: {
          DEFAULT: "#b79cff",
          hover: "#9a7deb",
        },
        accent2: {
          DEFAULT: "#6cb8f6",
          hover: "#4a9fe8",
        },
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #b79cff 0%, #6cb8f6 100%)",
        "metal-gradient": "linear-gradient(to bottom, #ffffff 0%, #cbd5e1 40%, #64748b 50%, #e2e8f0 60%, #ffffff 100%)",
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "center -200%" },
          "100%": { backgroundPosition: "center 200%" },
        },
        "blink": {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out both",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "shimmer": "shimmer 4s linear infinite",
        "caret": "blink 1.1s steps(1, end) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
