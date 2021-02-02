
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
                            Rating: <span className='vote-average'>{movie.vote_average ? movie.vote_average : 
                            '-'}</span>
                        </p>
                        <p className='subinfo'>
                            Release year: {movie.release_date ? movie.release_date.substring(0, 4) :
                            '-'}
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
