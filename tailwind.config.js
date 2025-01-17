/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'gray-100': '#F2F2F2',
      'gray-200': '#D9D9D9',
      'gray-300': '#808080',
      'gray-400': '#333333',
      'gray-500': '#262626',
      'gray-600': '#1A1A1A',
      'gray-700': '#0D0D0D',
      purple: '#8284FA',
      'purple-dark': '#8284FA',
      blue: '#4EA8DE',
      'blue-dark': '#1E6F9F',
      danger: '#E25858',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      min: '12px',
      mid: '14px',
      max: '16px',
    },
  },
  plugins: [],
}
