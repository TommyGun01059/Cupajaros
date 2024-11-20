import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: {
              100: "#FEFEFA",
              200: "#FEFDF6",
              300: "#FDFBF1",
              400: "#FCF9EC",
              500: "#FBF7E6",
              600: "#D7CDA8",
              700: "#B4A573",
              800: "#917F49",
              900: "#78632C",
              DEFAULT: "#FBF7E6",
            },
            foreground: {
              100: "#C7D0F3",
              200: "#93A4E7",
              300: "#5466B9",
              400: "#243173",
              500: "#020516",
              600: "#010312",
              700: "#01020F",
              800: "#00010C",
              900: "#00010A",
              DEFAULT: "#00010A",
            },
            divider: "#222425",
            focus: "#0F162F",
            primary: {
              100: "#D3DDF4",
              200: "#AABCEA",
              300: "#7186C0",
              400: "#3F4F82",
              500: "#0F162F",
              600: "#0A1028",
              700: "#070C21",
              800: "#04081B",
              900: "#020516",
              DEFAULT: "#0F162F",
            },
            secondary: {
              100: "#FBF7E6",
              200: "#F8EDCF",
              300: "#EAD9B0",
              400: "#D5BF94",
              500: "#BA9E6E",
              600: "#9F7F50",
              700: "#856337",
              800: "#6B4823",
              900: "#593515",
              DEFAULT: "#BA9E6E",
            },
            success: {
              100: "#E8FCDB",
              200: "#CDF9B8",
              300: "#A8EE91",
              400: "#83DE71",
              500: "#51C946",
              600: "#33AC33",
              700: "#23902C",
              800: "#167425",
              900: "#0D6021",
            },
            warning: {
              100: "#FEFACD",
              200: "#FEF49C",
              300: "#FEEC6B",
              400: "#FDE446",
              500: "#FCD80A",
              600: "#D8B607",
              700: "#B59505",
              800: "#927603",
              900: "#785F01",
            },
            danger: {
              100: "#FFEBDD",
              200: "#FFD3BB",
              300: "#FFB599",
              400: "#FF9980",
              500: "#FF6A56",
              600: "#DB443E",
              700: "#B72B31",
              800: "#931B2A",
              900: "#7A1025",
            },
          },
        },
        dark: {
          colors: {
            background: {
              100: "#C7D0F3",
              200: "#93A4E7",
              300: "#5466B9",
              400: "#243173",
              500: "#020516",
              600: "#010312",
              700: "#01020F",
              800: "#00010C",
              900: "#00010A",
              DEFAULT: "#00010A",
            },
            foreground: {
              100: "#FEFEFA",
              200: "#FEFDF6",
              300: "#FDFBF1",
              400: "#FCF9EC",
              500: "#FBF7E6",
              600: "#D7CDA8",
              700: "#B4A573",
              800: "#917F49",
              900: "#78632C",
              DEFAULT: "#FBF7E6",
            },
            divider: "#222425",
            focus: "#BA9E6E",
            primary: {
              100: "#FBF7E6",
              200: "#F8EDCF",
              300: "#EAD9B0",
              400: "#D5BF94",
              500: "#BA9E6E",
              600: "#9F7F50",
              700: "#856337",
              800: "#6B4823",
              900: "#593515",
              DEFAULT: "#BA9E6E",
            },
            secondary: {
              100: "#D3DDF4",
              200: "#AABCEA",
              300: "#7186C0",
              400: "#3F4F82",
              500: "#0F162F",
              600: "#0A1028",
              700: "#070C21",
              800: "#04081B",
              900: "#020516",
              DEFAULT: "#0F162F",
            },
            success: {
              100: "#E8FCDB",
              200: "#CDF9B8",
              300: "#A8EE91",
              400: "#83DE71",
              500: "#51C946",
              600: "#33AC33",
              700: "#23902C",
              800: "#167425",
              900: "#0D6021",
            },
            warning: {
              100: "#FEFACD",
              200: "#FEF49C",
              300: "#FEEC6B",
              400: "#FDE446",
              500: "#FCD80A",
              600: "#D8B607",
              700: "#B59505",
              800: "#927603",
              900: "#785F01",
            },
            danger: {
              100: "#FFEBDD",
              200: "#FFD3BB",
              300: "#FFB599",
              400: "#FF9980",
              500: "#FF6A56",
              600: "#DB443E",
              700: "#B72B31",
              800: "#931B2A",
              900: "#7A1025",
            },
          },
        },
      },
    }),
  ],
};
