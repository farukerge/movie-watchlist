import { createContext, useEffect, useReducer } from "react";
import  AppReducer  from  "./AppRecucer"

//initial state

const initialState = {
    watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
    watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

//create context

export const globalContext = createContext(initialState);


//provider component

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state]);


    //actions
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    }

    return (
        <globalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
        }}>
            {props.children}
        </globalContext.Provider>
    )
}