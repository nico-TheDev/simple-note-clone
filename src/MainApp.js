import React, { useContext } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navi from "./components/Navi";
import NoteDisplayHead from "./components/NoteDisplay/";
import { ThemeContext } from "./contexts/ThemeContext";

export default function MainApp() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Main darkMode={darkMode}>
            <Navi />
            <Sidebar />
            <NoteDisplayHead />
        </Main>
    );
}
