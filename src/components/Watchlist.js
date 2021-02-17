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
           <div className='movie-grid'>
                {watchlist.map(movie => (
                    <MovieCard movie={movie} type='watchlist'/>
                ))}
           </div>

        </div>
    )
}

export default Watchlist
