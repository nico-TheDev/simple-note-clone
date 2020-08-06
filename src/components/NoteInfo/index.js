import React, { useContext } from "react";
import styled from "styled-components";

import Icon from "../shared/Icon";
import getIcon from "../../getIcon";
import Button from "../shared/Button";
import InfoBody from "./InfoBody";
import ActionTypes from "../../ActionTypes";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UIContext } from "../../contexts/UIContext";
import { CurrentNoteContext } from "../../contexts/CurrentNoteContext";

const InfoHead = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoDate = styled.li`
    display: grid;
    gap: 5px;
`;
export default function () {
    const { darkMode } = useContext(ThemeContext);
    const { currentNote } = useContext(CurrentNoteContext);
    const { state, dispatch } = useContext(UIContext);

    const wordLength = currentNote ? currentNote.body.split(" ").length - 1 : 0;
    const charLength = currentNote ? currentNote.body.length : 0;

    const handleClick = () => {
        dispatch({ type: ActionTypes.TOGGLE_INFO });
    };

    return (
        <InfoBody darkMode={darkMode} showInfo={state.isInfoBarOpen}>
            <InfoHead>
                <h3>Info</h3>
                <Button onClick={handleClick}>
                    <Icon>
                        <use href={getIcon("remove_circle")}></use>
                    </Icon>
                </Button>
            </InfoHead>

            <InfoDate>
                Modified:{" "}
                {currentNote ? <span>currentNote.modified</span> : null}
            </InfoDate>

            <li>
                {wordLength}
                {wordLength !== 1 ? "words" : "word"}
            </li>

            <li>{charLength} characters</li>

            <InfoHead>
                <label htmlFor="check">Pin To Top</label>
                <input type="checkbox" />
            </InfoHead>
        </InfoBody>
    );
}
