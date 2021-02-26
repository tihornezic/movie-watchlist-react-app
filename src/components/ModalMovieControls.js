import React from 'react'
import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {toast, toastify} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const ModalMovieControls = ({setShowModal, movie, type}) => {
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
        <>
            {type === 'watchlist' && (
                <>
                    <button className='modal-ctrl-btn' onClick={() => {addMovieToWatched(movie); notifyMovieToWatched(movie); setShowModal(prev => !prev)}}>
                        <i className='fa-fw far fa-eye'></i>
                    </button>

                    <button className='modal-ctrl-btn' onClick={() => {removeMovieFromWatchlist(movie.id); notifyRemoveFromWatchlist(movie); setShowModal(prev => !prev)}}>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className='modal-ctrl-btn' onClick={() => {moveToWatchlist(movie); notifyMovieToWatchlist(movie); setShowModal(prev => !prev)}}>
                        <i className='fa-fw far fa-eye-slash'></i>
                    </button>

                    <button className='modal-ctrl-btn' onClick={() => {removeFromWatched(movie.id); notifyRemoveFromWatched(movie); setShowModal(prev => !prev)}}>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}
        </>
    )
}

export default ModalMovieControls
