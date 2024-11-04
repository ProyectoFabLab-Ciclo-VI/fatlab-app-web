/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: { preflight: false },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#000000",
      "primary": {
        "50": "#e8f0fe",
        "100": "#b9cffb",
        "200": "#97b8f9",
        "300": "#6797f6",
        "400": "#4983f5",
        "500": "#1c64f2",
        "600": "#195bdc",
        "700": "#1447ac",
        "800": "#0f3785",
        "900": "#0c2a66"
      },
      "error": {
        "50": "#fce9e9",
        "75": "#f1a6a6",
        "100": "#eb8181",
        "200": "#e24b4b",
        "300": "#dc2626",
        "400": "#9a1b1b",
        "500": "#861717"
      },
      "neutral": {
        "50": "#f0f1f3",
        "75": "#bfc6cf",
        "100": "#a5aebc",
        "200": "#7e8c9f",
        "300": "#64748b",
        "400": "#465161",
        "500": "#3d4755"
      },
      "success": {
        "50": "#e9f9ef",
        "75": "#a4e7bd",
        "100": "#7fdda2",
        "200": "#48cf79",
        "300": "#22c55e",
        "400": "#188a42",
        "500": "#157839"
      }
    },
    fontSize: {
      "base": "0.8125rem",
      "lg": "1rem",
      "xl": "1.25rem",
      "2xl": "1.5625rem",
      "3xl": "1.9375rem",
      "4xl": "2.4375rem",
      "5xl": "3.0625rem"
    },
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "inter": ["Inter", "sans-serif"],
    },
    boxShadow: {
      "Shadow": "0px 0px 16px 0px rgba(0,0,0,0.15)",
      "base": "0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)",
      "medium": "0px 2px 4px 0px rgba(0,0,0,0.06), 0px 4px 6px 0px rgba(0,0,0,0.1)",
      "large": "0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.05)",
      "xl": "0px 20px 25px 0px rgba(0,0,0,0.1), 0px 10px 10px 0px rgba(0,0,0,0.04)",
      "2xl": "0px 25px 50px 0px rgba(0,0,0,0.25)",
      "inner": "inset 0px 2px 4px 0px rgba(0,0,0,0.1)"
    },
    borderRadius: {
      "0": "0rem",
      "1": "0.3076923076923077rem",
      "2": "0.38461538461538464rem",
      "3": "0.46153846153846156rem",
      "4": "0.5384615384615384rem",
      "5": "0.6153846153846154rem",
      "6": "0.9230769230769231rem",
      "7": "1.2307692307692308rem",
      "8": "1.5384615384615385rem",
      "9": "1.8461538461538463rem",
      "10": "3.076923076923077rem",
      "11": "3.8461538461538463rem",
      "12": "76.84615384615384rem"
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(57deg, var(--tw-gradient-stops))',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

