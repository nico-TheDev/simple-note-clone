import React, { createContext, useReducer } from "react";
import DataReducer from "../reducers/DataReducer";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
    const [state, dispatch] = useReducer(DataReducer, {
        notes: [],
        trash: [],
        tags: [],
    });

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
}
