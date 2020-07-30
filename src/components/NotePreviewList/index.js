import React, { useContext, useState } from "react";
import NotePreview from "./NotePreview";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import { useLocation } from 'react-router-dom';

const PreviewList = styled.div`
    height: 100%;
    overflow-y: initial;
`;

// Overflow only when notes are over 6;

export default function () {
    const location = useLocation();
    const { state } = useContext(AppContext);
    const regex = /trash/;
    let previewItems, noteType;
    
    console.log(regex.test(location.pathname));

    if(regex.test(location.pathname)){
        noteType = 'trash'
        previewItems = state.trash;
    }else{
        noteType = 'notes'
        previewItems = state.notes;
    }

    return (
        <PreviewList>
            {previewItems.map((item) => (
                <NotePreview key={item.id} details={item} noteType={noteType}/>
            ))}
        </PreviewList>
    );
}
