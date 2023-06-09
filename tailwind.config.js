/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif']
      },
      colors: {
        VeryDarkMagenta: 'hsl(300, 43%, 22%)',
        SoftPink: 'hsl(333, 80%, 67%)',
        DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
        LightGrayishMagenta: 'hsl(300, 24%, 96%)',
        White: 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}

