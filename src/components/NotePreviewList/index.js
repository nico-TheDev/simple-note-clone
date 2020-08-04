import React, { useContext } from "react";
import NotePreview from "./NotePreview";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import { useLocation } from "react-router-dom";

const PreviewList = styled.div`
    height: 100%;
    display:grid;
    overflow-y: ${(props) => (props.length > 6 ? "scroll" : "initial")};
    align-content:start;
`;

const Placeholder = styled.h2`
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem;
    width: 100%;
`;

// Overflow only when notes are over 6;

export default function () {
    const location = useLocation();
    const { state } = useContext(AppContext);
    const regex = /trash/;
    let previewItems, noteType;

    if (state.query !== "") {
        noteType = "notes";
        previewItems = state.notes.filter((item) => {
            if (item.body.toLowerCase().includes(state.query.toLowerCase())) {
                return item;
            }
        });
    } else if (regex.test(location.pathname)) {
        noteType = "trash";
        previewItems = state.trash;
    } else if (/tag/.test(location.pathname)) {
        noteType = "notes";
        previewItems = state.notes.filter((item) => {
            const tagList = item.tags.map((tag) => tag.title);

            if (tagList.includes(location.pathname.slice(5))) {
                return item;
            }
        });
        console.log(previewItems);
    } else {
        noteType = "notes";
        previewItems = state.notes;
    }

    return (
        <PreviewList length={state.notes.length}>
            {previewItems.length > 0 ? (
                previewItems.map((item) => (
                    <NotePreview
                        key={item.id}
                        details={item}
                        noteType={noteType}
                    />
                ))
            ) : (
                <Placeholder>No Item Found 📝</Placeholder>
            )}
        </PreviewList>
    );
}
