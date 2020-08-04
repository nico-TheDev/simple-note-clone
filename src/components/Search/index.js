import React, { useContext } from "react";
import Search from "./Search";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import iconDir from "../icon.svg";
import SearchInput from "./SearchInput";
import { AppContext } from "../../contexts/AppContext";
import globalTypes from "../../GlobalTypes";

export default function () {
    const { dispatch, state } = useContext(AppContext);

    return (
        <Search>
            <Button onClick={() => dispatch({ type: globalTypes.toggleNav })}>
                <Icon>
                    <use href={`${iconDir}#icon-menu`}></use>
                </Icon>
            </Button>

            <SearchInput
                placeholder="All Notes"
                type="text"
                onChange={(e) =>
                    dispatch({
                        type: globalTypes.changeQuery,
                        query: e.target.value,
                    })
                }
                value={state.query}
            />

            <Button onClick={() => dispatch({ type: globalTypes.addNote })}>
                <Icon>
                    <use href={`${iconDir}#icon-add-note`}></use>
                </Icon>
            </Button>
        </Search>
    );
}
