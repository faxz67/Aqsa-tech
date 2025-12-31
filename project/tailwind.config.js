/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        // Core brand palette adapted to the provided blue scale
        'brand-teal': '#12344A',        // dark navy
        'brand-blue': '#174A67',        // primary blue
        'soft-gray': '#43627D',         // slate/steel blue
        'soft-gray-light': '#E5E5E5',   // light gray background
        'soft-white': '#FFFFFF',
      },
      backgroundImage: {
        // Smooth navy → blue gradient using the new palette
        'brand-gradient': 'linear-gradient(90deg, #12344A 0%, #174A67 100%)',
        'brand-gradient-hover': 'linear-gradient(90deg, #102B3A 0%, #153B54 100%)',
        'dubai-skyline': "url('/images/photos/dubai-skyline.jpg')",
      },
    },
  },
  plugins: [],
}
