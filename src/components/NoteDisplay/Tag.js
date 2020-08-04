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
        background:${props => props.darkMode ? 'gray' : 'white'};
        border:1px solid transparent;
        border-color:${props => props.darkMode ? 'transparent' : 'black'};
    
        &:hover {
            background:${props => props.darkMode ? 'white' : 'black'};
            color:${props => props.darkMode ? 'black' : 'white'};
        }
    }
`;

export default function ({ tagName }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Tag darkMode={darkMode}>
            <Link to={`/tag/${tagName}`}>{tagName}</Link>
        </Tag>
    );
}
