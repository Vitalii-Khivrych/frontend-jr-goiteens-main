const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  content: ['./src/**/*.{html,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // BASE FONT
    fontFamily: {
      gotham_pro: ['Gotham Pro', 'sans-serif'],
    },
    // SHADOW
    boxShadow: {
      card: '10px 10px 40px 0px rgba(92, 46, 145, 0.24), 0px 1px 2px 0px rgba(92, 46, 145, 0.08)',
      secondary:
        '2px -2px 10px 0px rgba(92, 46, 145, 0.05), 4px 4px 10px 0px rgba(92, 46, 145, 0.08)',
      btn: '0px 4px 30px 0px rgba(170, 67, 162, 0.45)',
      projectsCard:
        '2px 2px 11px 0px rgba(92, 46, 145, 0.24), 2px 9px 9px 0px rgba(92, 46, 145, 0.08)',
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        check: "url('../images/agree-checkbox.svg')",
      },
      // ALL COLORS
      colors: {
        body: '#FFFCF5',
        primary: '#312D3D',
        accent: '#FEC830',
        button: '#AA43A2',
        second: '#FFF4D7',
        third: '#F9DE8A',
        grey: '#EDEFF1',
      },
      //RADII
      borderRadius: {
        card: '24px',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: ' translateY(0)' },
        },
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
