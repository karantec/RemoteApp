/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          fontFamily: {
            'sans': ['Fira Sans', 'sans-serif'], // for descriptive content
            'serif': ['Georgia', 'serif'], // for heading content
          },
          colors: {
            custom: '#fff7cc',
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      
      animation: {
        typing: "typing 4s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}