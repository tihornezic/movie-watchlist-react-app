
const ResultCard = ({movie}) => {
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
                            <span className='subinfo'>Overview:</span> {movie.overview ? [movie.overview.length >= 330 ? movie.overview.substring(0, 331) : movie.overview] + '...' : '-'}
                        </p>
                    </div>
                    <div class='controls'>
                        <button className='btn'>
                            Add to Watchlist
                        </button>   
                        <button className='btn'>
                            Add to Watched
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
