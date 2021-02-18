import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import MovieCard from './MovieCard'

const Watched = () => {
    const {watched} = useContext(GlobalContext)

    return (
        <div>
            <div className='movie-page-header'>
                <div className='page-header'>
                    <h1>Watched Movies</h1>
                </div>
                <span className='count-pill'>{watched.length} {watched.length === 1 ? 'movie' : 'movies'}</span>
            </div>

            {watched.length > 0 ? (
                <div className='movie-grid'>
                    {watched.map(movie => (
                        <MovieCard movie={movie} type='watched' />
                    ))}
                </div>
            ) : (
                    <p className='no-movies'>No movies in your list!</p>
                )}

        </div>
    )
}

export default Watched
