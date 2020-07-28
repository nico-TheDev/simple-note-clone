import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const palette = {
    dark: {
      main: "#2c3e50",
      sub: "#34495e",
      text: "white"
    },
    light: {
      main: "#2c3e50",
      sub: "#34495e",
      text: "white"
    }
  };
  const [theme, setTheme] = useState(palette.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, palette }}>
      {children}
    </ThemeContext.Provider>
  );
}
