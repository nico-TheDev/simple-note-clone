import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import AppContextProvider from "./contexts/AppContext";
import Search from './components/Search';
import './resets.css';
import Main from './components/Main';
import Sidebar from "./components/Sidebar";
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import Navi from "./components/Navi";


export default function App() {
    return (
        <ThemeContextProvider>
            <AppContextProvider>
                <Router>
                    <Main>
                        <Navi/>
                        <Sidebar/>
                    </Main>
                </Router>
            </AppContextProvider>
        </ThemeContextProvider>
    );
}
