module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Ensure this includes src files
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft 1s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      colors: {
        primary: "#6D28D9",
        secondary: "#1F2937",
        accent: "#A78BFA",
        background: "#0F172A",
      },
    },
  },
  
  plugins: [],
};

