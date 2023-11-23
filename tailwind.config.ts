import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// module.exports = {
//   mode: 'jit',
//   content: [
//       './pages/**/*.{js,ts,jsx,tsx}',
//       './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//       extend: {},
//   },
//   plugins: [],
// }
