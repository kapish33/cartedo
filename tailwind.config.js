/** @type {import('tailwindcss').Config} */
import {colors} from './custum-tw-plugin/color'
import {fontFamily} from './custum-tw-plugin/fonts'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors,
    fontFamily,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: [
    require('./custum-tw-plugin/typography')
  ]
}
