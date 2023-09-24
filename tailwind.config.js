/** @type {import('tailwindcss').Config} */

const {
  TailwindPreset
} = require('@kloktun/uikit');

module.exports = {

  presets: [
    TailwindPreset
  ],
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],

}
