/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    zIndex: {
      sidebar: '6000',
      navbar: '9000',
      'general-content': '7000',
      'menu-dropdown': '8000',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '44px',
      '8xl': '48px',
      '9xl': '52px',
      '10xl': '56px',
      DEFAULT: '16px',
    },
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        dark: '#000000',
        navbar: '#23252B',
        primary: '#f47521',
        light: '#DADADA',
        dim: '#A0A0A0',
        'carousel-green': '#2abdbb',
        'carousel-orange': '#fab818',
      },
    },
  },
  plugins: [],
};
