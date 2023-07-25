/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary_hover: "#860FD8",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
