/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'chocolate': '#561C24',
      'milk-chocolate': '#6D2932',
      'cookies-cream': '#C7B7A3',
      'white-chocolate': '#E8D8C4'
    },
    extend: {
    },
  },
  plugins: [],
};
