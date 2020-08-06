import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import NotePreview from "./NotePreview";
import { AppContext } from "../../contexts/AppContext";
import { DataContext } from "../../contexts/DataContext";

const PreviewList = styled.div`
    height: 100%;
    display: grid;
    overflow-y: ${({ length }) => (length > 6 ? "scroll" : "initial")};
    align-content: start;
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
    const { state } = useContext(DataContext);
    const [previewItems, setPreviewItems] = useState([]);
    const [noteType, setNoteType] = useState("");

    if (state.query !== "") {
        setNoteType("notes");
        const itemList = state.notes.filter((item) => {
            if (item.body.toLowerCase().includes(state.query.toLowerCase())) {
                return item;
            }
        });
        setPreviewItems(itemList);
    } else if (/trash/.test(location.pathname)) {
        setNoteType("trash");
        setPreviewItems(state.trash);
    } else if (/tag/.test(location.pathname)) {
        setNoteType("notes");
        const itemList = state.notes.filter((item) => {
            const tagList = item.tags.map((tag) => tag.title);

            if (tagList.includes(location.pathname.slice(5))) {
                return item;
            }
        });
        setPreviewItems(itemList);
    } else {
        setNoteType("notes");
        setPreviewItems(state.notes);
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
