module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D70B8',
        secondary: '#00284F',
        neutral: {
          light: '#ffffff',
          dark: '#000000',
        },
        accent: '#f9f614',
        error: '#e86f68',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Montserrat Subrayada', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 50%, 100%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(10px)' },
          '70%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
          '85%': { transform: 'translateX(-5px)' },
          '90%': { transform: 'translateX(5px)' },
          '95%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s linear forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
