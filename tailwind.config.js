/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
=======
module.exports = {
  darkMode: "class",
  content: ["./dist/*"],
>>>>>>> 28caa3240c58d1711523b9ad3cf867287cf0a339
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      textColor: {
        lightestPurple: "#FEF0FF",
        lightPurple: "#FAB2FF",
        lighterPurple: "#F680FF",
        purple: "#F34DFF",
        basePurple: "#EE07FF",
        darkPurple: "#A600B2",
        darkestPurple: "#770080",
        deepPurple: "#47004D",
        ultraDarkPurple: "#0F000F",
      },
      colors: {
        lightestPurple: "#FEF0FF",
        lightPurple: "#FAB2FF",
        lighterPurple: "#F680FF",
        purple: "#F34DFF",
        basePurple: "#EE07FF",
        darkPurple: "#A600B2",
        darkestPurple: "#770080",
        deepPurple: "#47004D",
        ultraDarkPurple: "#0F000F",
      },
    },
  },
  plugins: [],
};
