import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// CONTEXTS
import ThemeContextProvider from "./contexts/ThemeContext";
import DataContextProvider from "./contexts/DataContext";
import QueryContextProvider from "./contexts/QueryContext";
import UIContextProvider from "./contexts/UIContext";
import CurrentNoteContextProvider from "./contexts/CurrentNoteContext";


import "./resets.css";
import AppSrc from "./AppSrc";

export default function App() {
    
    return (
        <ThemeContextProvider>
            <DataContextProvider>
                <QueryContextProvider>
                    <UIContextProvider>
                        <CurrentNoteContextProvider>
                            <Router>
                                <AppSrc/>
                            </Router>
                        </CurrentNoteContextProvider>
                    </UIContextProvider>
                </QueryContextProvider>
            </DataContextProvider>
        </ThemeContextProvider>
    );
}
