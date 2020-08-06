import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../shared/Button";
import getIcon from "../../getIcon";
import Icon from "../shared/Icon";
import ActionTypes from "../../ActionTypes";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";

const Tag = styled.li`
    height: max-content;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 0.5rem;
    a {
        flex: 1;
        display: inline-block;
    }

    & button:first-child {
        position: relative;
        opacity: 1;
        left: ${({ editMode }) => (editMode ? "0" : "-100%")};
    }
    & button:last-child {
        position: relative;
        opacity: 1;
        right: ${({ editMode }) => (editMode ? "0" : "-100%")};
    }
`;

const TagName = styled.p`
    margin: 0 10px;
`;

export default function ({ details: { title: name, id }, editMode }) {
    const { dispatch } = useContext(DataContext);

    const handleClick = () => {
        dispatch({ type: ActionTypes.REMOVE_TAG, id, name })
    }

    return (
        <Tag editMode={editMode}>
            <Button
                onClick={handleClick}
            >
                <Icon>
                    <use href={getIcon('delete1')}></use>
                </Icon>
            </Button>

            <Link to={`/tag/${name}`}>
                <TagName>{name}</TagName>
            </Link>

            <Button>
                <Icon>
                    <use href={getIcon('drag_handle')}></use>
                </Icon>
            </Button>
        </Tag>
    );
}