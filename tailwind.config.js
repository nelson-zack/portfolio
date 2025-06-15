/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '36ch': '36ch',
        '56ch': '56ch',
      },
      animation: {
        type: 'typing 7s steps(56, end) infinite, blink 1.2s step-end infinite',
        blink: 'blink 1.2s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '50%': { width: '56ch' },
          '100%': { width: '56ch' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#22d3ee' }, // cyan-400
        },
      },
    },
  },
  plugins: [],
}