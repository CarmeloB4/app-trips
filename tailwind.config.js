/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14532d",
          secondary: "#1e3a8a",
          accent: "#fde047",
          neutral: "#f3f4f6",
          info: "#93c5fd",
          success: "#84cc16",
          warning: "#f59e0b",
          error: "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
