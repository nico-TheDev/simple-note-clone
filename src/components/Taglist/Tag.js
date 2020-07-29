import styled from "styled-components";
import React from "react";
import Button from "../shared/Button";
import iconDir from "../icon.svg";
import Icon from "../shared/Icon";
import { Link } from "react-router-dom";

const Tag = styled.li`
    height: max-content;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    padding:0 0.5rem;
    a {
        flex: 1;
        display:inline-block;
    }


    & button:first-child {
        position: relative;
        opacity: 1;
        left:${props => props.editMode ? '0' : '-100%'};
    }
    & button:last-child {
        position: relative;
        opacity: 1;
        right:${props => props.editMode ? '0' : '-100%'};
    }

    /* &:hover button:first-child{
        left:0;
    }
    &:hover button:last-child{
        right:0;
    } */
`;

const TagName = styled.p`
    margin:0 10px;
`;

export default function ({ name,editMode }) {
    return (
        <Tag editMode={editMode}>
            <Button>
                <Icon>
                    <use href={`${iconDir}#icon-delete1`}></use>
                </Icon>
            </Button>

            <Link to={`/tags/${name}`}>
                <TagName>{name}</TagName>
            </Link>

            <Button>
                <Icon>
                    <use href={iconDir + "#icon-drag_handle"}></use>
                </Icon>
            </Button>
        </Tag>
    );
}
