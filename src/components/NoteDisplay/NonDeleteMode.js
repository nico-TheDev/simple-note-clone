import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import Icon from "../shared/Icon";
import Button from "../shared/Button";
import iconDir from "../icon.svg";
import globalTypes from "../../GlobalTypes";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function NonDeleteMode({ noteId }) {
    const { state, dispatch } = useContext(AppContext);
    const { setDarkMode, darkMode } = useContext(ThemeContext);
    const history = useHistory();

    return (
        <>
            <Button onClick={() => dispatch({type:globalTypes.toggleSidebar})}>
                <Icon>
                    <use href={iconDir + "#icon-sidebar"}></use>
                </Icon>
            </Button>

            <Button onClick={() => setDarkMode(!darkMode)}>
                <Icon>
                    <use href={iconDir + "#icon-moon"}></use>
                </Icon>
            </Button>
            <Button
                onClick={() => {
                    dispatch({
                        type: globalTypes.removeNote,
                        id: noteId,
                    });
                    history.push('/');

                }}
            >
                <Icon>
                    <use href={iconDir + "#icon-delete"}></use>
                </Icon>
            </Button>
            <Button onClick={() => dispatch({ type: globalTypes.toggleInfo })}>
                <Icon>
                    <use href={iconDir + "#icon-info"}></use>
                </Icon>
            </Button>
        </>
    );
}
