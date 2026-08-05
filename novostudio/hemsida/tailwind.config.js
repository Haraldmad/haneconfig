/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "clay-terracotta": "#CC5833",
        "warm-cream": "#FAF8F5",
        "clay-light": "#e28b6d",
        "clay-dark": "#9c3f20",
        "ink": "#2a221f",
        "emerald-green": "#059669",
        "deep-moss": "#2E4036"
      },
      fontFamily: {
        "soft-serif": ["Fraunces", "serif"],
        "cormorant": ["Cormorant Garamond", "serif"],
        "body-tight": ["Outfit", "sans-serif"],
        "data-mono": ["IBM Plex Mono", "monospace"]
      },
      backgroundImage: {
        'terracotta-gradient': 'linear-gradient(135deg, #FAF8F5 0%, #e28b6d 50%, #CC5833 100%)',
        'cream-gradient': 'linear-gradient(135deg, #ffffff 0%, #FAF8F5 100%)',
      }
    },
  },
  plugins: [],
}
