import React, { useContext, useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { AppContext } from "../../contexts/AppContext";
import Button from "../shared/Button";

const List = styled.ul`
    display: grid;
    gap: 1rem;
    align-content: start;
`;

const ListHead = styled.li`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    h3 {
        margin-right: auto;
        padding-left: 2rem;
    }
`;

const CustomButton = styled(Button)`
    display: ${(props) => (props.isDisplayed ? "inline-block" : "none")};
`;

export default function () {
    const { state } = useContext(AppContext);
    const [editMode, setEditMode] = useState(false);

    return (
        <List>
            <ListHead>
                <h3>Tags</h3>

                <CustomButton isDisplayed={state.tags.length !== 0} onClick={() => setEditMode(!editMode)}>
                    {editMode ? "Done" : "Edit"}
                </CustomButton>
            </ListHead>
            {state.tags.map((item) => (
                <Tag key={item.id} details={item} editMode={editMode} />
            ))}
        </List>
    );
}
