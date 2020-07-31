import React, { useContext, useState } from "react";
import Head from "./NoteDIsplayHead";
import Icon from "../shared/Icon";
import Button from "../shared/Button";
import iconDir from "../icon.svg";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";
import globalTypes from "../../GlobalTypes";

const Display = styled.div`
    display: ${props => props.noteId ? 'grid' : 'none'};
    grid-template-rows: 12vh 1fr;
    transform: translateX(${(props) => (props.navbarOpen ? "20vw" : "0")});
`;

const DisplayInput = styled.textarea`
    border: none;
    padding: 1rem 3rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    height: 100%;
    font-size: 1.2rem;
    background: transparent;
`;

const CustomButton = styled(Button)`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(0, 0, 0, 0.2);
        top: 0;
        left: 0;
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`;

export default function () {
    const location = useLocation();
    const { state, dispatch } = useContext(AppContext);
    let { darkMode, setDarkMode } = useContext(ThemeContext);
    const noteId = location.pathname.slice(7);
    let currentNote,
        noteType,
        trashMode = /trash/.test(location.pathname);

    console.log(location);
    console.log(location.pathname.slice(7));

    if (/notes/.test(location.pathname)) {
        noteType = "notes";
        state.notes.forEach((item) => {
            console.log(item.id === noteId);
            if (item.id === noteId) {
                currentNote = item;
            }
        });
    } else {
        noteType = "trash";
        state.trash.forEach((item) => {
            if (item.id === noteId) {
                currentNote = item;
            }
        });
    }

    currentNote && console.log(currentNote.body);
    return (
        <Display navbarOpen={state.navbarOpen} noteId={noteId}>
            <Head>
                {trashMode ? (
                    <>
                        <Button></Button>
                        <CustomButton
                            bg="crimson"
                            color="white"
                            onClick={() =>
                                dispatch({
                                    type: globalTypes.deleteNote,
                                    id: noteId,
                                })
                            }
                        >
                            Delete Forever
                        </CustomButton>
                        <CustomButton
                            bg="limegreen"
                            color="white"
                            onClick={() =>
                                dispatch({
                                    type: globalTypes.restoreNote,
                                    id: noteId,
                                })
                            }
                        >
                            Restore
                        </CustomButton>
                    </>
                ) : (
                    <>
                        <Button>
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
                            onClick={() =>
                                dispatch({
                                    type: globalTypes.removeNote,
                                    id: noteId,
                                })
                            }
                        >
                            <Icon>
                                <use href={iconDir + "#icon-delete"}></use>
                            </Icon>
                        </Button>
                        <Button>
                            <Icon>
                                <use href={iconDir + "#icon-info"}></use>
                            </Icon>
                        </Button>
                    </>
                )}
            </Head>

            <DisplayInput
                placeholder="New Note"
                value={currentNote ? currentNote.body : "New Note"}
                onChange={(e) =>
                    dispatch({
                        type: globalTypes.handleNotesChange,
                        id: noteId,
                        text: e.target.value,
                        noteType,
                    })
                }
            ></DisplayInput>
        </Display>
    );
}
