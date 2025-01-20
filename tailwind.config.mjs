/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Use class strategy for toggling dark mode manually
  theme: {
    // Fonts
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif']
    },
    // Colors
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'main': '#2D2C2C',
      'accent': '#27A5DD',
      'black': '#1F1E1E',
    },
    extend: {},
  },
  plugins: [],
};
