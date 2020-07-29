import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const palette = {
    dark: {
      main: "#2c3e50",
      sub: "#34495e",
      text: "white",
      accent:'#3498db'
    },
    light: {
      main: "#2c3e50",
      sub: "#34495e",
      text: "white",
      accent:'#3498db'

    }
  };
  const [theme, setTheme] = useState(palette.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, palette }}>
      {children}
    </ThemeContext.Provider>
  );
}
