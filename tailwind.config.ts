import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'position': 'top, right, bottom, left',
      },
      keyframes: {
        'background-shine': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'background-shine': 'background-shine 8s ease-in-out infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
