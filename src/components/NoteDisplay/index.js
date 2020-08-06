import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Head from "./NoteDisplayHead";
import ActionTypes from "../../ActionTypes";
import TagContainer from "./TagContainer";
import Taglist from "./Taglist";
import TagInput from "./TagInput";
import Tag from "./Tag";
import DeleteMode from "./DeleteMode";
import NonDeleteMode from "./NonDeleteMode";

import { DataContext } from "../../contexts/DataContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CurrentNoteContext } from "../../contexts/CurrentNoteContext";

const Display = styled.div`
    width: 100%;
    display: ${(props) => (props.noteId ? "grid" : "none")};
    grid-template-rows: 12vh 1fr;
    transform: translateX(${(props) => (props.navbarOpen ? "20vw" : "0")});
    filter: ${(props) => (props.navbarOpen ? "blur(3px)" : "none")};

    @media only screen and (max-width: 800px) {
        transform: translateX(0);
    }
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
    width: 100%;
`;

export default function () {
    const location = useLocation();
    const { state, dispatch } = useContext(DataContext);
    const [query, setQuery] = useState("");
    let { isDarkMode } = useContext(ThemeContext);
    const { setCurrentNote } = useContext(CurrentNoteContext);
    const noteId = location.pathname.slice(7);
    let currentNote,
        noteType,
        trashMode = /trash/.test(location.pathname),
        listOfTags;

    const handleNotesChange = (e) => {
        dispatch({
            type: ActionTypes.HANDLE_NOTES_CHANGE,
            id: noteId,
            text: e.target.value,
            noteType,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ActionTypes.ADD_TAG,
            id: noteId,
            tagname: query,
            noteType,
        });
        setQuery("");
    };

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

    listOfTags =
        currentNote && currentNote.tags.length !== 0
            ? currentNote.tags.map((tag) => (
                  <Tag key={tag.id} tagName={tag.title} />
              ))
            : null;
    setCurrentNote(currentNote);
    return (
        <Display navbarOpen={state.navbarOpen} noteId={noteId}>
            <Head>
                {trashMode ? (
                    <DeleteMode noteId={noteId} />
                ) : (
                    <NonDeleteMode noteId={noteId} />
                )}
            </Head>

            <DisplayInput
                placeholder="New Note"
                value={currentNote ? currentNote.body : "New Note"}
                onChange={handleNotesChange}
            ></DisplayInput>

            <TagContainer onSubmit={handleSubmit}>
                <Taglist>
                    {listOfTags}{" "}
                    <TagInput
                        bg={isDarkMode}
                        type="text"
                        placeholder="Add a tag..."
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                </Taglist>
            </TagContainer>
        </Display>
    );
}
