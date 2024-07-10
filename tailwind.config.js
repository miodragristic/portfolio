// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Definišemo gde se nalaze naši JavaScript fajlovi
  theme: {
    extend: {
      animation: {
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both', // Definišemo animaciju tipkanja
      },
      keyframes: {
        'typewriter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
