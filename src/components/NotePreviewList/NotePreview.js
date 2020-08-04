import React from "react";
import NoteBox from "./NoteBox";
import styled from "styled-components";
import { Link } from "react-router-dom";

// PREVIEW SUBTITLE 48 characters => 51 with the 3 dots

const Subtitle = styled.p`
    color: gray;
    display: ${(props) => (props.withText ? "block" : "none")};
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

export default function NotePreview({
    details: { title, body, id, pinToTop },
    noteType,
}) {
    return (
        <Link to={`/${noteType}/${id}`} style={{order: pinToTop ? '-999' : 'unset'}}>
            <NoteBox>
                <h3>{title ? cutText(60, title) : "New Note"}</h3>
                <Subtitle withText={body}>
                    {body ? cutText(40,body) : "New Note"}
                </Subtitle>
            </NoteBox>
        </Link>
    );
}
