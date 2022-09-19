module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'pulse2':'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) 1'
      }
    },
  },
  plugins: [],
}