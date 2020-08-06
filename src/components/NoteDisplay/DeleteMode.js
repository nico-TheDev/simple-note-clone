import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import ActionTypes from "../../ActionTypes";
import Button from "../shared/Button";
import { DataContext } from "../../contexts/DataContext";

const CustomButton = styled(Button)`
    position: relative;
    justify-self: flex-end;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(0, 0, 0, 0.2);
        top: 0;
        left: 0;
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`;

export default function DeleteMode({ noteId }) {
    const { dispatch } = useContext(DataContext);
    const history = useHistory();

    const handleDelete = () => {
        dispatch({
            type: ActionTypes.DELETE_NOTE,
            id: noteId,
        });
        history.push("/trash");
    };

    const handleRestore = () => {
        dispatch({
            type: ActionTypes.RESTORE_NOTE,
            id: noteId,
        });
        history.push("/trash");
    };

    return (
        <>
            <CustomButton bg="crimson" color="white" onClick={handleDelete}>
                Delete Forever
            </CustomButton>
            <CustomButton bg="limegreen" color="white" onClick={handleRestore}>
                Restore
            </CustomButton>
        </>
    );
}
