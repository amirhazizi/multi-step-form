/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      // Colors
      colors: {
        // ### Primary
        cl_MarineBlue: "hsl(213, 96%, 18%)",
        cl_PurplishBlue: " hsl(243, 100%, 62%)",
        cl_PastelBlue: "hsl(228, 100%, 84%)",
        cl_LightBlue: "hsl(206, 94%, 87%)",
        cl_StrawberryRed: "hsl(354, 84%, 57%)",
        // ### Neutral
        cl_CoolGray: "hsl(231, 11%, 63%)",
        cl_LightGray: "hsl(229, 24%, 87%)",
        cl_Magnolia: "hsl(217, 100%, 97%)",
        cl_Alabaster: "hsl(231, 100%, 99%)",
        cl_White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubunto: ["var(--font-ubunto)"],
      },
    },
  },
  plugins: [],
}
