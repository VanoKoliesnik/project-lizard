import autoPrefixer from 'autoprefixer';
import tailwindCSS from 'tailwindcss';

/** @type {import('postcss').ProcessOptions} */
export default {
  plugins: [autoPrefixer, tailwindCSS],
};
