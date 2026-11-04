export default {
  plugins: [
    ({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)'],
        serif: ['var(--aw-font-serif, ui-serif)'],
        heading: ['var(--aw-font-heading, ui-sans-serif)'],
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
