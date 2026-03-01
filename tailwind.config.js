import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: 'class', //darkmode erstellen
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#ddd6fe",         
          text: "#1A1A1A",       // dunkler, aber nicht schwarz
          textButton: "#6366f1",
          primary: "#5850EC",    // Haupt-Violett
          primaryDark: "#6C2BD9",
          primaryDarker: "#5521B5",
          bgDark: "#1A1A1A",   // für Dark Mode Hintergrund
          textLight: "#F5EEDC", // für Dark Mode Text
        },
        // cat: {                   // neue feste Farbtöne für Diagramm
        //   einkommen: "#10b981",     // emerald-500
        //   lebensmittel: "#f59e0b",  // amber-500
        //   transport: "#0ea5e9",     // sky-500
        //   freizeit: "#8b5cf6",      // violet-500
        //   miete: "#f43f5e",         // rose-500
        //   sonstiges: "#64748b",     // slate-500
        // },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
