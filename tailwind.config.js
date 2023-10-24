/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000',
        foreground: 'hsl(var(--foreground))',
        primary: "#DEB738",
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
      },
      backgroundImage: {
        "hero": "url('/hero.webp')",
        "mobile": "url('/mobile_hero.webp')",
        "contact": "url('/contact.webp')",
        "profile": "url('/profile_background.webp')"
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
