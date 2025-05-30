export default {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-winky-sans)"],
          },
        },
      },
    },
  },
};
