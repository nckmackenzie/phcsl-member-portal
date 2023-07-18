/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      minHeight: {
        dvh: '100dvh',
      },
      colors: {
        'brand-50': '#c2c1da',
        'brand-100': '#adacce',
        'brand-200': '#9997c2',
        'brand-400': '#332f84',
        'brand-500': '#2e2a77',
        'brand-600': '#29266a',
        'brand-700': '#24215c',
        'light-text': '#374151',
        'dark-text': '#e5e7eb',
        'light-bg': '#f9fafb',
        'dark-bg': '#111827',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
