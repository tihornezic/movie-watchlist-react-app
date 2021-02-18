// building a store which stores the state data
// so the store holds the object which holds the
// application state data;
// need a reducer (about to build) - a function 
// that returns some state data, so basically it describes
// how state is transferred into the next state

export default(state, action) => {
    // action is the object that tells reducer
    // how to change the state
    switch(action.type){
        case 'ADD_MOVIE_TO_WATCHLIST':
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
        case 'ADD_MOVIE_TO_WATCHED':
            return {
                ...state,
                // remove a movie from the watchlist
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                // and then add it to the watched list
                watched: [action.payload, ...state.watched]
            }
        default:
            return state;
    }
}