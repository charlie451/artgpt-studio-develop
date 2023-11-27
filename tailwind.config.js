const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors:{
        
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [
    'prettier-plugin-tailwindcss',  
    plugin(function({ addUtilities }) {
      addUtilities({
        '.imageSizeInput': {
          "@apply w-1/3 rounded-3xl bg-gray-700 text-center text-gray-300" : ""
        },
        '.imageSizeRange' : {
          "@apply accent-blue-500 w-full cursor-pointer" :""
        },
        '.promptTextArea' : {
          "@apply p-2.5 w-full text-sm text-gray-300 bg-gray-700 rounded-lg border":""
        }
      })
    })
  ],
}