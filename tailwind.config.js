/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/*"],
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
