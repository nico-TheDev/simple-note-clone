import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const initialState = localStorage.getItem("state")
        ? JSON.parse(localStorage.getItem("state"))
        : {
              sidebarOpen: true,
              navbarOpen: false,
              infoBarOpen: false,
              notes: [],
              trash: [],
              tags: [],
              query: "",
          };
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}
