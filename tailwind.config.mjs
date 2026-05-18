/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#e4e9f0',
          200: '#c5d0de',
          300: '#9aadc4',
          400: '#6b87a8',
          500: '#3b5577',
          600: '#2d4a6f',
          700: '#1e3a5f',
          800: '#152a47',
          900: '#0e1f36',
        },
        accent: {
          400: '#f0a830',
          500: '#e58a00',
          600: '#c87100',
        },
        ink: '#0c1220',
        paper: '#fafbfc',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
};
