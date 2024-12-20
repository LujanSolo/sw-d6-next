/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      }
    },
    boxShadow: {
      'glass-inset': 'inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)',
      'glass-sm': '5px 5px 20px 0px rgba(254, 254, 91, 0.3)',
    },
    colors: {
      background: 'rgb(var(--background))',
      foreground: 'rgb(var(--foreground))',
      muted: 'rgb(var(--muted))',
      accent: 'rgb(var(--accent))',
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
