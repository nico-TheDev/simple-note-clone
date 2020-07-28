import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";

const AppContext = createContext();

/*
note = {
  title: ,
  tags;[],
  body:'';
}

*/

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, {
    sidebarOpen:false,
    navbarOpen:false,
    infoBarOpen:false,
    notes:[],
    trash:[],
    tags:[],
    query:''
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
