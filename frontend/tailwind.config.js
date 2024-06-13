import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add jsx and tsx extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
