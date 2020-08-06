import React, { useContext, useState } from "react";
import styled from "styled-components";

import Tag from "./Tag";
import Button from "../shared/Button";
import { DataContext } from "../../contexts/DataContext";

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
    display: ${({ isDisplayed }) => (isDisplayed ? "inline-block" : "none")};
`;

export default function () {
    const { state } = useContext(DataContext);
    const [editMode, setEditMode] = useState(false);

    const handleClick = () => {
        setEditMode(!editMode);
    };

    const tagList = state.tags.map((item) => (
        <Tag key={item.id} details={item} editMode={editMode} />
    ));

    return (
        <List>
            <ListHead>
                <h3>Tags</h3>

                <CustomButton
                    isDisplayed={state.tags.length !== 0}
                    onClick={handleClick}
                >
                    {editMode ? "Done" : "Edit"}
                </CustomButton>
            </ListHead>
            {tagList}
        </List>
    );
}
