module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'soft-desaturated-blue': 'hsl(238, 29%, 16%)',
        'dark-grey-blue': 'hsl(237, 12%, 33%)',
        'dark-greyish-blue': 'hsl(240, 6%, 50%)',
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
