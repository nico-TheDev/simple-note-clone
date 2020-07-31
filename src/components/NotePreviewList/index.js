import React, { useContext, useState } from "react";
import NotePreview from "./NotePreview";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import { useLocation } from 'react-router-dom';

const PreviewList = styled.div`
    height: 100%;
    overflow-y: ${  props => props.length > 6 ? 'scroll' : 'initial'};
`;

const Placeholder = styled.h2`
    text-align:center;
    font-size:1.2rem;
    font-weight:bold;
    padding:1rem;
    width:100%;
`;

// Overflow only when notes are over 6;

export default function () {
    const location = useLocation();
    const { state } = useContext(AppContext);
    const regex = /trash/;
    let previewItems, noteType;
    

    if(regex.test(location.pathname)){
        noteType = 'trash'
        previewItems = state.trash;
    }else{
        noteType = 'notes'
        previewItems = state.notes;
    }

    return (
        <PreviewList length={state.notes.length}>
            {previewItems.length > 0 ? previewItems.map((item) => (
                <NotePreview key={item.id} details={item} noteType={noteType}/>
            )) : <Placeholder>No Item Found 📝</Placeholder>}
        </PreviewList>
    );
}
