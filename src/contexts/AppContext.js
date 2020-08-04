import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

/*
note = {
  title: ,
  tags;[],
  body:'';
}

*/

export default function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, {
        sidebarOpen: true,
        navbarOpen: false,
        infoBarOpen: false,
        notes: [
            {
                id: uuidv4(),
                title: "Sample Title 1",
                tags: [
                    {
                        id: uuidv4(),
                        title: "Tag1",
                    },
                    {
                        id: uuidv4(),
                        title: "Tag2",
                    },
                ],
                body: `"sample 1
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nemo aliquam quasi quibusdam nulla ad amet, delectus consectetur commodi? Quam quod a rem molestias, vero at cumque. Voluptates, culpa suscipit."`,
                wordCount:1,
                charCount:99
            },
           
        ],
        trash: [],
        tags: [
            {
                id: uuidv4(),
                title: "Tag1",
            },
            {
                id: uuidv4(),
                title: "Tag2",
            },
        ],
        query: ""    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}
