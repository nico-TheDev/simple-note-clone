import React from "react";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import AppContextProvider from "./contexts/AppContext";
import "./resets.css";
import MainApp from "./MainApp";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
    return (
        <ThemeContextProvider>
            <AppContextProvider>
                <Router>
                    <MainApp />
                </Router>
            </AppContextProvider>
        </ThemeContextProvider>
    );
}
