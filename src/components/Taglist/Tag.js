import styled from "styled-components";
import React,{ useContext } from "react";
import Button from "../shared/Button";
import iconDir from "../icon.svg";
import Icon from "../shared/Icon";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import globalTypes from '../../GlobalTypes';


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
        left: ${(props) => (props.editMode ? "0" : "-100%")};
    }
    & button:last-child {
        position: relative;
        opacity: 1;
        right: ${(props) => (props.editMode ? "0" : "-100%")};
    }

    /* &:hover button:first-child{
        left:0;
    }
    &:hover button:last-child{
        right:0;
    } */
`;

const TagName = styled.p`
    margin: 0 10px;
`;

export default function ({ details: { title: name, id }, editMode }) {
    const { dispatch } = useContext(AppContext);



    return (
        <Tag editMode={editMode}>
            <Button onClick={() => dispatch({ type:globalTypes.removeTag,id,name }) }>
                <Icon>
                    <use href={`${iconDir}#icon-delete1`}></use>
                </Icon>
            </Button>

            <Link to={`/tag/${name}`}>
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
