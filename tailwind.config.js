module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['md:w-1/2', 'md:w-1/3', 'md:w-1/4', 'lg:w-1/2', 'lg:w-1/3', 'lg:w-1/4'],
      // because we set these dynamically on imageTile
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo Black", "sans-serif"],
        lato: ["Lato", "sans-serif"], 
      }
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
