import React from "react";
import NoteBox from "./NoteBox";
import styled from "styled-components";
import { Link } from "react-router-dom";

// PREVIEW SUBTITLE 48 characters => 51 with the 3 dots

const Subtitle = styled.p`
    color: gray;
`;

function cutText(limit, text) {
    const arrWords = text.split(" ");
    let newText = [];

    if (text.length >= limit) {
        arrWords.reduce((total, word) => {
            if (total <= limit) {
                total += word.length;
                newText.push(word);
                return total;
            }
        }, 0);

        console.log(newText.join(" ") + "...");
        return newText.join(" ") + "...";
    } else {
        return text;
    }
}

export default function NotePreview({ details: { title, body,id } }) {
    return (
        <Link to={`/note/${id}`}>
            <NoteBox>
                <h3>{cutText(25, title)}</h3>
                <Subtitle>{cutText(40, body)}</Subtitle>
            </NoteBox>
        </Link>
    );
}
