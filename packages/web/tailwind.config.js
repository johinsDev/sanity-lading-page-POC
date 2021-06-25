// eslint-disable-next-line @typescript-eslint/no-var-requires
const tw = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      flex: {
        1.5: '1.5 1.5 0%',
      },
      colors: {
        primary: 'var(--primary)',
        pink: 'var(--pink)',
        'gray-1': 'var(--gray-1)',
        'gray-2': 'var(--gray-2)',
        'gray-3': 'var(--gray-3)',
        'gray-4': 'var(--gray-4)',
        'gray-5': 'var(--gray-5)',
        'green-1': 'var(--green-1)',
        'green-2': 'var(--green-2)',
        black: 'var(--black)',
      },
      height: {
        '1px': '1px',
      },
      lineHeight: {
        37: '37.27px',
        80: '80px',
      },
      backgroundImage: {
        'bg-opacity-hero':
          'linear-gradient(180deg,rgba(3,12,20,.25),rgba(3,12,20,.25))',
      },
      letterSpacing: {
        1.62: '1.62px',
        3: '3.36px',
        2: '2.16px',
        5: '5px',
      },
      fontSize: {
        13.5: '13.5px',
        28: '28px',
      },
      fontFamily: {
        caslon: ['Caslon', ...tw.fontFamily.sans],
        montserrat: ['Montserrat', ...tw.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
