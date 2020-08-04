import styled from "styled-components";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Tag = styled.li`
    & a {
        padding: 0.3rem 1.5rem;
        color: inherit;
        border-radius: 4rem;
        margin: 0.5rem;
        display: inline-block;
        &:hover {
            background: lime;
        }
    }
`;

export default function ({ tagName }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Tag>
            <Link to={`/tag/${tagName}`} bg={darkMode.toString()}>
                {tagName}
            </Link>
        </Tag>
    );
}
