/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: { preflight: false },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "blue-1": "#F3F6FC",
      "blue-2": "#E6EEF8",
      "blue-3": "#C8DAEF",
      "blue-4": "#619BCF",
      "blue-5": "#3D7EBA",
      "blue-6": "#2C639D",
      "blue-7": "#22456A",
      "blue-8": "#213B59",
      "blue-9": "#16263B"
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      "onest": ["Onest", "sans-serif"]
    },
    extend: {
      fontSize: {
        "1zp": "0.625rem",
        "2zp": "0.8rem",
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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(57deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '0 24px 24px #00000040',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

