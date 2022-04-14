const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      current: 'currentColor',
      gray: colors.gray,
      inherit: 'inherit',
      neutral: colors.neutral,
      red: colors.red,
      slate: colors.slate,
      transparent: 'transparent',
      white: colors.white,
      zinc: colors.zinc,
    },
    fontFamily: {},
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
