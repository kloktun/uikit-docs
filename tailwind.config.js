/** @type {import('tailwindcss').Config} */

const {
  KloktunTailwindColors,
  KloktunTailwindScreens,
  KloktunTailwindBoxShadows,
  KloktunTailwindBorderRadius 
} = require('@kloktun/uikit');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx',
  ],
  theme: {

    extend: {
      
      screens: {
        ...KloktunTailwindScreens
      },
 
      boxShadow: {
        ...KloktunTailwindBoxShadows
      },
 
      borderRadius: {
        ...KloktunTailwindBorderRadius
      },
 
      colors: {
        ...KloktunTailwindColors
      },
      
    },
  },
  plugins: [],
}
