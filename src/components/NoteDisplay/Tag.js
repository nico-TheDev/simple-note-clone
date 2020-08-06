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
        background: ${({ darkMode }) => (darkMode ? "gray" : "white")};
        border: 1px solid transparent;
        border-color: ${({ darkMode }) => (darkMode ? "transparent" : "black")};

        &:hover {
            background: ${({ darkMode }) => (darkMode ? "white" : "black")};
            color: ${({ darkMode }) => (darkMode ? "black" : "white")};
        }
    }
`;

export default function ({ tagName }) {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <Tag darkMode={isDarkMode}>
            <Link to={`/tag/${tagName}`}>{tagName}</Link>
        </Tag>
    );
}
