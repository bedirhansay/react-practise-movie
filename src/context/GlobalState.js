import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist: [],
  watched: [],
};

const addMovieToWatchlist = (movie) => {
  dispatch({type, 'ADD_MOVIE_TO_WATCHLIST',payload:movie});
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ ahmet: "121" }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
