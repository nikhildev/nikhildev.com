module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2160px",
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: "#7c3aed",
          "primary-content": "#fff",
          secondary: "#8b5cf6",
          "secondary-content": "#fff",
          accent: "#6ee7b7",
          "accent-content": "#333",
          neutral: "#a78bfa",
          "base-100": "#4c1d95",
          info: "#3b82f6",
          success: "#16a34a",
          warning: "#fbbf24",
          error: "#dc2626",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  plugins: [require("daisyui")],
};
