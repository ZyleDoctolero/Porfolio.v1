// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1B1F2E",
        surface: "#252A3A",
        "surface-2": "#2F3548",
        "surface-warm": "#2A2518",
        border: "#3A4156",
        "border-warm": "#4A3D2A",
        gold: "#E8B84B",
        "gold-dim": "#B8922F",
        teal: "#5BBFB5",
        "red-soft": "#D97070",
        "green-soft": "#6BBD8A",
        text: "#EAE6DC",
        "text-muted": "#8A8FAA",
        "text-data": "#C8D0E0",
        heading: "#F0D080",
        "stamp-red": "#C05050",
      },
      fontFamily: {
        display: ["'Pixelify Sans'", "system-ui"],
        mono: ["'DM Mono'", "monospace"],
        body: ["'Lora'", "serif"],
      },
      spacing: {
        2: "8px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },
    },
  },
  plugins: [],
};
