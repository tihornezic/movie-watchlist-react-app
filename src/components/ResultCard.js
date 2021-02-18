import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const ResultCard = ({movie}) => {
    
    // grabbing action we created
    // destructuring 
    const {addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext)


    // search the watchlist if a movie is already there
    let storedMovie = watchlist.find(object => object.id === movie.id)
    let storedMovieWatched = watched.find(object => object.id === movie.id)
    // if storedMovie is not equal to null, return true; if nothing is returned, return false 
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false
    const watchedDisabled = storedMovieWatched ?  true : false

    return (
        <div>
            <div className='result-card'>
                <div className='poster-wrapper'>
                    {movie.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title}Poster`} />
                        :
                        <div className='filter-poster'></div>
                    }
                </div>
                <div className='info'>
                    <div className='header'>
                        <h3 className='title'>{movie.title}</h3>
                        <p className='subinfo'>
                            Rating: {movie.vote_average ? <span className='subinfo-subtext'>{movie.vote_average}</span> : 
                            '-'}
                        </p>
                        <p className='subinfo'>
                            Release year: {movie.release_date ? <span class='subinfo-subtext'>{movie.release_date.substring(0, 4)}</span> :
                            '-'}
                        </p>
                        <p className='overview'>
                            <span className='subinfo'>Overview:</span> {movie.overview ? [movie.overview.length >= 300 ? movie.overview.substring(0, 301) : movie.overview] + '...' : '-'}
                        </p>
                    </div>
                    <div class='controls'>
                        <button className='btn' disabled={watchlistDisabled} 
                        onClick={() => addMovieToWatchlist(movie)}>
                            Add to Watchlist
                        </button>   
                        <button className='btn' disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}>
                            Add to Watched
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
