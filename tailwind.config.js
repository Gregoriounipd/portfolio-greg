// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            500: '#1E88E5',  // Azzurro
            600: '#1976D2',
            700: '#1565C0',
            800: '#0D47A1',
          },
          purple: {
            500: '#7B2CBF',  // Viola
            600: '#6A1B9A',
            700: '#4A148C',
            800: '#38006B',
          }
        }
      }
    },
  },
  plugins: [],
}