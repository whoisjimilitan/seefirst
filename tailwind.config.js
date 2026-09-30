/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D7F5E',    // Warm green
        secondary: '#FBF8F3',  // Cream
        accent: '#C67C2A',     // Deep amber
        neutral: '#2B2D42',    // Dark grey
        light: '#EBEBEB',      // Light grey
        success: '#22C55E',
        pending: '#F59E0B',
        error: '#DC2626',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': '28px',
        'h1-desktop': '48px',
        'h2-mobile': '20px',
        'h2-desktop': '36px',
        'body-mobile': '16px',
        'body-desktop': '18px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}