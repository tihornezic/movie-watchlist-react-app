import React from 'react'
import MovieControls from './MovieControls'
import Modal from './Modal'
import {useState} from 'react'


const MovieCard = ({movie, type}) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <div className='movie-card'>
            <div onClick={openModal} className='overlay'></div>
            <Modal showModal={showModal} setShowModal={setShowModal} movie={movie} />
                {movie.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title}Poster`} />
                    :
                    <div className='filler-poster'></div>
                }
            
            <MovieControls type={type} movie={movie} />
        </div>
    )
}

export default MovieCard
