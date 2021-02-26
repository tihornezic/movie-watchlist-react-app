import React from 'react'
import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {toast, toastify} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
    
toast.configure()

const MovieControls = ({movie, type}) => {
    const {removeMovieFromWatchlist, addMovieToWatched,
    moveToWatchlist, removeFromWatched} = useContext(GlobalContext)

    const notifyMovieToWatched = (movie) => {
        toast(`${movie.title} added to Watched!`, {position: toast.POSITION.TOP_CENTER, autoClose: 3500})
    }

    const notifyMovieToWatchlist = (movie) => {
        toast(`${movie.title} added to Watchlist!`, {position: toast.POSITION.TOP_CENTER, autoClose: 3500})
    }

    const notifyRemoveFromWatchlist = (movie) => {
        toast.error(`${movie.title} removed from Watchlist!`, {position: toast.POSITION.TOP_CENTER, autoClose: 3500})
    }

    const notifyRemoveFromWatched = (movie) => {
        toast.error(`${movie.title} removed from Watched!`, {position: toast.POSITION.TOP_CENTER, autoClose: 3500})
    }

    return (
        <div className='inner-card-controls'>
            {type === 'watchlist' && (
                <>
                    <button className='ctrl-btn' onClick={() => {addMovieToWatched(movie); notifyMovieToWatched(movie)}}>
                        <i className='fa-fw far fa-eye'></i>
                    </button>

                    <button className='ctrl-btn' onClick={() => {removeMovieFromWatchlist(movie.id); notifyRemoveFromWatchlist(movie)}}>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className='ctrl-btn' onClick={() => {moveToWatchlist(movie); notifyMovieToWatchlist(movie)}}>
                        <i className='fa-fw far fa-eye-slash'></i>
                    </button>

                    <button className='ctrl-btn' onClick={() => {removeFromWatched(movie.id); notifyRemoveFromWatched(movie)}}>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls
