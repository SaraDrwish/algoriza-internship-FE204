/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2F80ED", 
        "yellow-color": "#FCEFCA",
        "dark-black": "#181818",
        "med-footer-black": "#1B1F2D",
        "light-blsck": "#4F4F4F",
        "gray": "#4F4F4F",
        "BGC": " #FFF",
        "inputsGray":"#F2F2F2"
      }
      
    },
    fontFamily: {
      SFProDisplay:["SF Pro Display, sans-serif"],
    },
    container: {
      padding: " 6.25rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md:"768px",
    },
    //  borderRadius: {
    //     'custom': '10px', 
    //   },
  },
   
  plugins: [],
}

