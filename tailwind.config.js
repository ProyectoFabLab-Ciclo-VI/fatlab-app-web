/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: { preflight: false },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      neutral: {
        50: '#E6E9ED',
        100: '#CDD2DB',
        200: '#B4BCC8',
        300: '#9BA6B6',
        400: '#828FA4',
        500: '#6A7991',
        600: '#586579',
        700: '#475161',
        800: '#353C49',
        900: '#232830',
      },
      primary: {
        50: '#A5BEEB',
        100: '#779EDC',
        200: '#437DD0',
        300: '#2E61B3',
        400: '#234A86',
        500: '#173059',
        600: '#142B4F',
        700: '#122545',
        800: '#0F203B',
        900: '#0D1B31',
      },
      secondary: {
        50: '#F1D5F5',
        100: '#E3ABEB',
        200: '#D681E1',
        300: '#C857D7',
        400: '#BB30CB',
        500: '#9226A1',
        600: '#7D218A',
        700: '#681B73',
        800: '#53165C',
        900: '#3F1045',
      },
      success: {
        50: '#CAFDC1',
        100: '#95FB84',
        200: '#60F946',
        300: '#2AF709',
        400: '#1FBB06',
        500: '#157D04',
        600: '#116403',
        700: '#0D4B02',
        800: '#083202',
        900: '#052503',
      },
      warning: {
        50: '#FDF4CF',
        100: '#FAE89F',
        200: '#F8DD6F',
        300: '#F5D13F',
        400: '#F3C60F',
        500: '#C5A00A',
        600: '#AF8E09',
        700: '#925F01',
        800: '#705501',
        900: '#5D4701',
      },
      error: {
        50: '#FDE4E4',
        100: '#FAB9B9',
        200: '#F68E8E',
        300: '#F26464',
        400: '#EE3A3A',
        500: '#BA2C2C',
        600: '#952323',
        700: '#6F1A1A',
        800: '#491212',
        900: '#2E0909',
      },
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

