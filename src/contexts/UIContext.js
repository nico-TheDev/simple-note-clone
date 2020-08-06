import React, { createContext, useReducer } from "react";
import UIReducer from "../reducers/UIReducer";

export const UIContext = createContext();

export default function UIContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(UIReducer, {
        isSidebarOpen: true,
        isNavbarOpen: false,
        isInfoBarOpen: false,
    });

    return <UIContext.Provider>{children}</UIContext.Provider>;
}
