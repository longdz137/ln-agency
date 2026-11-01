/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08090C",
        graphite: "#14161B",
        gold: "#D6B36A",
        paper: "#F5F5F5",
        mute: "#969BA5",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(214,179,106,0.15)",
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(circle at 50% 50%, rgba(214,179,106,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};