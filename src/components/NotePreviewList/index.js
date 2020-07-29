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
    let previewItems;
    
    console.log(regex.test(location.pathname));

    if(regex.test(location.pathname)){
        previewItems = state.trash;
    }else{
        previewItems = state.notes;
    }

    return (
        <PreviewList>
            {previewItems.map((item) => (
                <NotePreview key={item.id} details={item}/>
            ))}
        </PreviewList>
    );
}
