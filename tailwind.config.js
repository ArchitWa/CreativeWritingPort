// https://coolors.co/102542-f87060-cdd7d6-b3a394-ffffff

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "oxford-blue": {
          50: "#DEE9F7",
          100: "#B9CFEE",
          200: "#739FDD",
          300: "#3273CD",
          400: "#214C87",
          DEFAULT: "#102542",
          600: "#0D1E35",
          700: "#0A1729",
          800: "#060E19",
          900: "#03070C",
          950: "#020508"
        },
        "bittersweet": {
          50: "#FEF2F0",
          100: "#FEE4E2",
          200: "#FCC6BF",
          300: "#FBABA2",
          400: "#F98C80",
          DEFAULT: "#F87060",
          600: "#F5341E",
          700: "#C81C09",
          800: "#841206",
          900: "#440A03",
          950: "#220501"
        },
        "platinum": {
          50: "#F9FAFA",
          100: "#F4F6F6",
          200: "#EBEFEF",
          300: "#E0E6E5",
          400: "#D7DFDE",
          DEFAULT: "#CDD7D6",
          600: "#9FB2B0",
          700: "#6F8B88",
          800: "#4B5D5C",
          900: "#242D2C",
          950: "#121716"
        },
        "khaki": {
          50: "#F7F5F3",
          100: "#F0EDEA",
          200: "#E1DBD5",
          300: "#D0C7BD",
          400: "#C2B5A9",
          DEFAULT: "#B3A394",
          600: "#97816D",
          700: "#716051",
          800: "#4E4237",
          900: "#27211C",
          950: "#120F0D"
        },
      }
    },
  },
  plugins: [],
}