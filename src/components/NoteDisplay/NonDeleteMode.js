import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Icon from "../shared/Icon";
import Button from "../shared/Button";
import getIcon from "../../getIcon";
import ActionTypes from "../../ActionTypes";
import { DataContext } from "../../contexts/DataContext";
import { UIContext } from "../../contexts/UIContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function NonDeleteMode({ noteId }) {
    const { dispatch: dataDispatch } = useContext(DataContext);
    const { dispatch: UIDispatch } = useContext(UIContext);
    const { setIsDarkMode, isDarkMode } = useContext(ThemeContext);
    const history = useHistory();

    const handleRemoveNote = () => {
        dataDispatch({
            type: ActionTypes.REMOVE_NOTE,
            id: noteId,
        });
        history.push("/");
    };

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleToggle = () => {
        UIDispatch({ type: ActionTypes.TOGGLE_INFO });
    };

    return (
        <>
            <Button>
                <Icon>
                    <use href={getIcon("sidebar")}></use>
                </Icon>
            </Button>

            <Button onClick={handleDarkMode}>
                <Icon>
                    <use href={getIcon("moon")}></use>
                </Icon>
            </Button>
            <Button onClick={handleRemoveNote}>
                <Icon>
                    <use href={getIcon("delete")}></use>
                </Icon>
            </Button>
            <Button onClick={handleToggle}>
                <Icon>
                    <use href={getIcon("info")}></use>
                </Icon>
            </Button>
        </>
    );
}
