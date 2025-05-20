/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all relevant files are included
  ],
  // safelist: [
  //   { pattern: /(bg|text|border)-(blush|lavender|mint|cream|plum|deepPurple|primary|pretty|halo)/ },
  // ],
  theme: {
    extend: {
    colors: {
        blush: "#f9c5d1",
        lavender: "#c3aed6",
        mint: "#d5f4e6",
        cream: "#fefbd8",
        plum: "#b392ac",
        deepPurple: "#390041",
        primary: "#2978b5",
        pretty: "#d376f2",
        halo: "#00F7DA",
      },
         fontFamily: {
                "comforter": ['Comforter', 'sans-serif']
            }
    },
  },
  plugins: [],
};
