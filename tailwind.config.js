/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "yellow-color": "#FCEFCA",
        "dark-black": "#181818",
        "med-footer-black": "#1B1F2D",
        "light-black": "#4F4F4F",
        BGC: "#FFF",
        inputsGray: "#F2F2F2",
        Gray2: "#333333",
        bordrBtnGry: "#D6D6D6",
        footerlastbtm: "#EBEBEB",
        laniergrad1: "#2969BF",
        laniergrad2: "#144E9D",
        sortText: "#828282",
        bordersr: "#BDBDBD",
        borderserbox: "#E0E0E0",
        srchRed: "#EB5757",
        srchGrn: "#219653",
        paginatiopntextcolr: "#9E9E9E",
        orngressearchbox: "#F2994A",
        bggraynstedpage: "#F4F4F4",
        welcomeBlue: "#2F80ED4D",
        welcomeGray: "#808080",
        checkoutText1: "#1A1A1A",
        gradntbluePD1: "#2366BF",
        gradntbluePD2: "#4796FF",
        pdtDetlsylo: "#FFD723",
        CeckoutGreen: "#85E0AB",
        CkeckoutYellowPAy: "#F2C94C",
      },
    },
    fontFamily: {
      SFProDisplay: ["SF Pro Display, sans-serif"],
    },
    container: {
      margin: "100px",
      center: true,
    },
  },

  plugins: [],
};
