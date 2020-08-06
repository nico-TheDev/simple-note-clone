import React, { useContext } from "react";
import Search from "./Search";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import getIcon from "../../getIcon";
import SearchInput from "./SearchInput";
import ActionTypes from "../../ActionTypes";
import { QueryContext } from "../../contexts/QueryContext";
import { DataContext } from "../../contexts/DataContext";
import { UIContext } from "../../contexts/UIContext";

export default function () {
    const { query, setQuery } = useContext(QueryContext);
    const { dispatch } = useContext(DataContext);
    const { dispatch: UIDispatch } = useContext(UIContext);

    const handleToggleNav = () => {
        UIDispatch({ type: ActionTypes.TOGGLE_NAV });
    };

    const handleAddNote = () => {
        dispatch({ type: ActionTypes.ADD_NOTE });
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Search>
            <Button onClick={handleToggleNav}>
                <Icon>
                    <use href={getIcon("menu")}></use>
                </Icon>
            </Button>

            <SearchInput
                placeholder="All Notes"
                type="text"
                onChange={handleChange}
                value={query}
            />

            <Button onClick={handleAddNote}>
                <Icon>
                    <use href={getIcon("add-note")}></use>
                </Icon>
            </Button>
        </Search>
    );
}
