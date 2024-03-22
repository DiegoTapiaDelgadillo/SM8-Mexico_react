/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blur": "rgba(0, 0, 0, 0.85)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
