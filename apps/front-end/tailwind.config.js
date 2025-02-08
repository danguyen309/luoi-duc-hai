const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { heroui } = require('@heroui/react');
const plugin = require('./tailwind.plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui(), plugin, require('@tailwindcss/typography')],
};
