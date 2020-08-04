import React, { useContext } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navi from "./components/Navi";
import NoteDisplay from "./components/NoteDisplay/";
import { ThemeContext } from "./contexts/ThemeContext";
import NoteInfo from "./components/NoteInfo";
import { AppContext } from "./contexts/AppContext";

export default function MainApp() {
    const { darkMode } = useContext(ThemeContext);
    const { state } = useContext(AppContext);

    return (
        <React.Fragment>
            <Main
                darkMode={darkMode}
                showInfo={state.infoBarOpen}
                sidebarOpen={state.sidebarOpen}
            >
                <Navi/>
                <Sidebar sidebarOpen={state.sidebarOpen}/>
                <NoteDisplay />
            </Main>
            <NoteInfo showInfo={state.infoBarOpen} />
        </React.Fragment>
    );
}
