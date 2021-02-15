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
        default:
            return state;
    }
}