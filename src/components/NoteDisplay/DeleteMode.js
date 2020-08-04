import React,{ useContext } from "react";
import Button from "../shared/Button";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import globalTypes from "../../GlobalTypes";

const CustomButton = styled(Button)`
    position: relative;

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
    const { state, dispatch } = useContext(AppContext);

    return (
        <>
            <Button></Button>
            <CustomButton
                bg="crimson"
                color="white"
                onClick={() =>
                    dispatch({
                        type: globalTypes.deleteNote,
                        id: noteId,
                    })
                }
            >
                Delete Forever
            </CustomButton>
            <CustomButton
                bg="limegreen"
                color="white"
                onClick={() =>
                    dispatch({
                        type: globalTypes.restoreNote,
                        id: noteId,
                    })
                }
            >
                Restore
            </CustomButton>
        </>
    );
}
