/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      borderRadius: {
        nm: "4px"
      },
      opacity: {
        7: "0.07"
      }
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      blackish: "#1b1b1b"
    }
  },
  plugins: []
}