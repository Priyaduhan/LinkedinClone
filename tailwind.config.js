export default {
  content: ["./index.html", "./src/App.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sourceCode: ["Source Code Pro", "monospace"],
      },
      colors: {
        primary: "#feeee5",
      },
    },
  },
  plugins: [],
};
