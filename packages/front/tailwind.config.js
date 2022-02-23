module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        3: '1fr 1fr 1fr;',
      },
      colors: {
        primary: '#4360DF',
      },
    },
  },
  plugins: [],
}
