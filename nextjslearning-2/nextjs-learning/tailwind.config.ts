import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   padding: "24px",
    // },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1496px",
    },

    fontFamily: {
      Montserrat: ["Montserrat", "sans"],
      Unna: ["Unna", "serif"],
      Sacramento: ["Sacramento", "serif"],
      raleway: ["Raleway", "sans:serif"],
      ralewayBold: ["RalewayBold", "sans:serif"],
      Poppins: ["Poppins", "sans:serif"],
    },
    fontSize: {
      'sm2': "14px",
      '4xl': "40px",
      '5xl': "48px",
      'md3': "19.2px",
      'sm1': "12px",
      'md1': "18px",
      'sm3': "15px",
      '3xl': "32px",
      '2xl': "30px",
      'xl': "24px",
      'md2': "20px",
    },
    fontWeight:{
      'light':'300',
      'md':'400',
      'bold':'500',
      'extraBold':'700',
    },
    animation: {
      cursor: 'cursor .6s linear infinite alternate',
      type: 'type 1.8s ease-out .8s 1 normal both',
      'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
    },

    colors: {
      mainBg: "#818181",
      white: "#fff",
      lightColor:'#737373',
      subColor: "#21325E",
      primary: "#b3b3b3",
      secondary: "#21325E",
      ternary: "#888",
      black: "#000",
      borderColor: " #ced4da",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
