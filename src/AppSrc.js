import React,{ useContext } from "react";
// COMPONENTS
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navi from "./components/Navi";
import NoteDisplay from "./components/NoteDisplay/";
import NoteInfo from "./components/NoteInfo";
import { DataContext } from "./contexts/DataContext";
import { UIContext } from "./contexts/UIContext";
import { ThemeContext } from "./contexts/ThemeContext";

export default function AppSrc() {
    const { state : dataState } = useContext(DataContext);
    const { state : UIState } = useContext(UIContext);
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <>
            <Main darkMode={isDarkMode} showInfo={UIState.isInfoBarOpen}>
                <Navi />
                <Sidebar showNavbar={UIState.isNavBarOpen} />
                <NoteDisplay />
            </Main>
            <NoteInfo />
        </>
    );
}
