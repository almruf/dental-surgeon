/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#37CDBE',
          neutral: '3D4451',
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/bg.png')",
        'footer-texture': "url('  ')",
      }
    }
  },
  plugins: [require("daisyui")],
}

