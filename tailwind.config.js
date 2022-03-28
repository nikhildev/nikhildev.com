module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: ["forest"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  plugins: [require("daisyui")],
};
