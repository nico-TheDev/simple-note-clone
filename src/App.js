import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// CONTEXTS
import ThemeContextProvider from "./contexts/ThemeContext";
import DataContextProvider from "./contexts/DataContext";
import QueryContextProvider from "./contexts/QueryContext";
import UIContextProvider from "./contexts/UIContext";
import CurrentNoteContextProvider from "./contexts/CurrentNoteContext";
// COMPONENTS
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navi from "./components/Navi";
import NoteDisplay from "./components/NoteDisplay/";
import NoteInfo from "./components/NoteInfo";

import "./resets.css";

export default function App() {
    
    return (
        <ThemeContextProvider>
            <DataContextProvider>
                <QueryContextProvider>
                    <UIContextProvider>
                        <CurrentNoteContextProvider>
                            <Router>
                                <>
                                    <Main>
                                        <Navi />
                                        <Sidebar />
                                        <NoteDisplay />
                                    </Main>
                                    <NoteInfo />
                                </>
                            </Router>
                        </CurrentNoteContextProvider>
                    </UIContextProvider>
                </QueryContextProvider>
            </DataContextProvider>
        </ThemeContextProvider>
    );
}
