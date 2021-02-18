import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import MovieCard from './MovieCard'

const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext)
    return (
        <div>
            <div className='page-header'>
                <h1>My Watchlist</h1>
            </div>

            {watchlist.length > 0 ? (
                <div className='movie-grid'>
                    {watchlist.map(movie => (
                        <MovieCard movie={movie} type='watchlist' />
                    ))}
                </div>
            ) : (
                <p className='no-movies'>No movies in your list!</p>
            )}

        </div>
    )
}

export default Watchlist
