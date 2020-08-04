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

const InfoDate = styled.li`
    display: grid;
    gap: 5px;
`;
export default function () {
    const { darkMode, currentNote } = useContext(ThemeContext);
    const { state, dispatch } = useContext(AppContext);

    return (
        <InfoBody darkMode={darkMode} showInfo={state.infoBarOpen}>
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

            <InfoDate>
                Modified:{" "}
                <span>{currentNote ? currentNote.modified : null}</span>
            </InfoDate>

            <li>
                {currentNote ? currentNote.body.split(" ").length - 1 : 0} words
            </li>

            <li>{currentNote ? currentNote.body.length : 0} characters</li>

            <InfoHead>
                <label htmlFor="check">Pin To Top</label>
                <input type="checkbox" />
            </InfoHead>
        </InfoBody>
    );
}
