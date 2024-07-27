/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1440px',

      },
      colors: {
        /*Primary */
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        youTube: 'hsl(348, 97%, 39%)',
        instagram:'hsl(32, 82%, 50%)',

        lightToggle: 'hsl(230, 22%, 74%)'

        /*Neutral*/

        /*Dark Theme*/,

        veryDbBg: 'hsl(230, 17%, 14%)',
        veryDbtopBGPattern: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlueCardbg: 'hsl(228, 28%, 20%)',
        DesBlueText: 'hsl(228, 34%, 66%)',
        whiteText: 'hsl(0, 0%, 100%)'

        /*Light Theme*/,

        whiteBg: 'hsl(0, 0%, 100%)',
        veryaleBlueTopBGPattern: 'hsl(225, 100%, 98%)',
        lightGrayishblueCardBg: 'hsl(227, 47%, 96%)',
        darkGbText: 'hsl(228, 12%, 44%)',
        veryDarkblueText: 'hsl(230, 17%, 14%)',
      }
    },
  },
  plugins: [],
}