/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'turquoise':'#05d9e8',
      'dark-blue': '#01012b',
      'red': '#d1f7ff',
      'pink': '#ff184c',
      'light-pink':'#ffccdc',
      'purple-grey': '#575267',
      'green': '#65dc98',
      'light-green': '#a0ffe3',
      'yellow': '#defe47',
      'pale=orage': '#e96d5e',
      'dark-green': '#083e12',
      'light-neon-green': '#1afe49',
      'black': '#000000'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderColor: {
        custom: {
          'turquoise':'#05d9e8',
          'semi-dark-blue': '#005678',
          'dark-blue': '#01012b',
          'red': '#d1f7ff',
          'pink': '#ff184c',
          'light-pink':'#ffccdc',
          'purple-grey': '#575267',
          'green': '#65dc98',
          'light-green': '#a0ffe3',
          'yellow': '#defe47',
          'pale-orage': '#e96d5e',
          'dark-green': '#083e12',
          'light-neon-green': '#1afe49',
          'black': '#000000'
        },
      },

    }
  },
  plugins: [],
}

