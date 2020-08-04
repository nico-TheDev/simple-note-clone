import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
 
    const [darkMode, setDarkMode] = useState(true);
    const [currentNote,setCurrentNote] =  useState(null);

    return (
        <ThemeContext.Provider value={{ darkMode,setDarkMode,currentNote,setCurrentNote }}>
            {children}
        </ThemeContext.Provider>
    );
}
