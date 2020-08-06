import React, { createContext, useState } from "react";

export const CurrentNoteContext = createContext();

export default function CurrentNoteContextProvider({ children }) {
    const [currentNote, setCurrentNote] = useState(null);

    return (
        <CurrentNoteContext.Provider value={{ currentNote, setCurrentNote }}>
            {children}
        </CurrentNoteContext.Provider>
    );
}
