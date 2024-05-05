/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pri: '#888',
        sec: '#fffb06',
        ter: '#111011',
      },
    },
  },
  plugins: [],
};
