import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk", "sans-serif"],
        subtitle: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        glint: 'glint 1s ease-in-out forwards',
      },
      keyframes: {
        glint: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config



