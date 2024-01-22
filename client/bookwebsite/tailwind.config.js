module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
      },
      backgroundColor: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        delete: "bg-red-500",
        edit: "bg-blue-500",
        create: "bg-green-500",
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
      },
    },
  },
  plugins: [],
};
