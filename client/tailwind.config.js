/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blog: "#ef4136",
        "blog-light": "#FFD8D8",
        "blog-dark": "#C70000",
        "hover-blog": "rgb(253, 10, 1) / 0.75",
        "hover-blog-light": "#ff7470",
      },
    },
  },
  plugins: [],
};
