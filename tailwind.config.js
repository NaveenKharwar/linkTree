const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    enabled: true,
    content: ["index.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins, sans-serif',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        body: { 
            fontFamily: config("theme.fontFamily.body"),
        },
      });
    }),
  ],
};
