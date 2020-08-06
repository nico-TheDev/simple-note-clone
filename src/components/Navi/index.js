import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Navlinks from "./Navlinks";
import Icon from "../shared/Icon";
import Taglist from "../Taglist";
import { UIContext } from "../../contexts/UIContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import getIcon from "../../getIcon";

export default function () {
    const { state } = useContext(UIContext);
    const { darkMode } = useContext(ThemeContext);

    return (
        <Nav open={state.isNavbarOpen} darkMode={darkMode}>
            <div className="">
                <Link to="/">
                    <Navlinks>
                        <Icon>
                            <use href={getIcon("note")}></use>
                        </Icon>
                        All Notes
                    </Navlinks>
                </Link>
                <Link to="/trash">
                    <Navlinks>
                        <Icon>
                            <use href={getIcon("delete1")}></use>
                        </Icon>
                        Trash
                    </Navlinks>
                </Link>
            </div>

            <Taglist />
        </Nav>
    );
}
