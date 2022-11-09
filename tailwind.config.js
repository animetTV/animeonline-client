const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [  
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F70B53",
          200: "#F9487E",
          300: "#F9487E",
          400: "#F9487E",
          500: "#F7175C"
        },

        background: {
          DEFAULT: "#111111",
          200: "#666666",
          300: "#595959",
          400: "#4d4d4d",
          500: "#404040",
          600: "#333333",
          700: "#262626",
          800: "#1a1a1a",
          900: "#111111",
        },
        typography: {
          DEFAULT: "#FFFFFF",
          secondary: colors.stone["300"],
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
