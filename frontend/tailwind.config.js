/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'my-blue': '#4169E1',
      },
      animation: {
        'border-pulse': 'borderPulse 1s infinite',
      },
      keyframes: {
        borderPulse: {
          '0%': { borderColor: '#e5e7eb' }, // Light gray
          '50%': { borderColor: '#60a5fa' }, // Blue
          '100%': { borderColor: '#e5e7eb' }, // Light gray
        },
      },
    },
  },
  plugins: [],
}

