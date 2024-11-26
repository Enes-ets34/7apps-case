import Colors from './app/theme/Colors.ts';
import Borders from './app/theme/Borders.ts';
import Fonts from './app/theme/Fonts.ts';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', 
    './app/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...Colors,
      },
      borderWidth: {
        ...Borders,
      },
      borderRadius: {
        ...Borders,
      },
      fontSize: {
        ...Fonts,
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
