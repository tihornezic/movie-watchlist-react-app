// to easily access all of our data from any component 
// with the context API

// -useReducer an alternative to useState; accepts a reducer of type (state, action) => newState, 
// and returns the current state paired with a dispatch method;
    // -dispatch() is the method used to dispatch actions and trigger state changes to the store
    // -dispatch means send off to a destination or for a purpose
// -useReducer is usually preferable to useState when you have complex state logic that involves 
// multiple sub-values or when the next state depends on the previous one; 
// -useReducer also lets you optimize performance for components that trigger deep updates because you can pass 
// dispatch down instead of callbacks.
import {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

// initial state (value) - first thing to do while working with context
const initialState = {
    // array of watchlist movies
    // when the application first loads, we want our initial state to take the value of local storage items
    // if there is anything in localstorage in 'watchlist', turn it back from string to array
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    // array of watched movies
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
}

// create context
export const GlobalContext = createContext(initialState)

// to be able to provide GlobalContext to other components,
// we need to make a provider which allows us to access that 
// global context from other variables

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // triggered whenever the state is changed inside provider
    useEffect(() => {
        // local storage has to be a string (currently watchlist is an array)
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
        // whenever this changes, useEffect fires off again - dependency array
    }, [state])

    // actions
    const addMovieToWatchlist = movie => {
        // payload is naming convention for the property that holds the actual data
        dispatch({type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie})
    }

    const removeMovieFromWatchlist = id => {
        dispatch({type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id})
    }

    const addMovieToWatched = movie => {
        dispatch({type: 'ADD_MOVIE_TO_WATCHED', payload: movie})
    }

    const moveToWatchlist = movie => {
        dispatch({type: 'MOVE_TO_WATCHLIST', payload: movie})
    }

    const removeFromWatched = id => {
        dispatch({type: 'REMOVE_FROM_WATCHED', payload: id})
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist, 
            watched: state.watched,
            // same as addMovieToWatchlist: addMovieToWatchlist 
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}