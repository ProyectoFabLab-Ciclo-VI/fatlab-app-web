/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "blue-1": "#f3f6fc",
      "blue-2": "#e7eef7",
      "blue-3": "#80ed99",
      "blue-4": "#45dfb1",
      "blue-5": "#0ad1c8",
      "blue-6": "#14919b",
      "blue-7": "#0b6477",
      "blue-8": "#213a57",
      "blue-9": "#16263b"
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      "onest": ["Onest", "sans-serif"]
    },
    extend: {
      fontSize: {
        "1zp": "0.5rem",
        "2zp": "0.625rem",
        "3zp": "1rem",
        "4zp": "1.125rem",
        "5zp": "1.25rem",
        "6zp": "1.5rem",
        "7zp": "1.75rem",
        "8zp": "2rem",
        "9zp": "2.25rem",
        "10zp": "2.5rem",
        "11zp": "3rem",
        "12zp": "4rem"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

