import React, { useContext } from "react";
import Icon from "../shared/Icon";
import iconDir from "../icon.svg";
import Button from "../shared/Button";
import InfoBody from "./InfoBody";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import globalTypes from "../../GlobalTypes";

const InfoHead = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function () {
    const { darkMode, currentNote } = useContext(ThemeContext);
    const { state, dispatch } = useContext(AppContext);

    return (
        <InfoBody theme={darkMode} showInfo={state.infoBarOpen}>
            <InfoHead>
                <h3>Info</h3>
                <Button
                    onClick={() => dispatch({ type: globalTypes.toggleInfo })}
                >
                    <Icon>
                        <use href={iconDir + "#icon-remove_circle"}></use>
                    </Icon>
                </Button>
            </InfoHead>

            <li>Modified: insert time here</li>

            <li>{currentNote ? currentNote.body.split(' ').length : null} words</li>

            <li>{currentNote ? currentNote.body.length : null} characters</li>

            <InfoHead>
                <label htmlFor="check">Pin To Top</label>
                <input type="checkbox" />
            </InfoHead>
        </InfoBody>
    );
}
