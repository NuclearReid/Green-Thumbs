/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.handlebars"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
