/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "dark": "var(--dark)",
        "medium-grey": "var(--medium-grey)",
        "red": "var(--red)"
      },
    },
  },
  plugins: [],
}

