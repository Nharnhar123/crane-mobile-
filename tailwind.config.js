/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101C2C',
        blue: '#203B59',
        yellow: '#F5B82E',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(16, 28, 44, 0.08)',
      },
    },
  },
  plugins: [],
};

