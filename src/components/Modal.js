import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {useSpring, animated} from 'react-spring'
import {useRef, useEffect, useCallback} from 'react'

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .7);
    z-index: 1000;
`

const ModalContent = styled.div`
    display: flex;
    color: var(--primary);
`

const MovieInfo = styled.div`
    padding: 0px 30px;

    h3 {
        margin-bottom: 20px;
        font-size: 1.6rem;
    }

    p {
        font-weight: 600;
        font-size:  .95rem;
        margin-bottom: 10px;
    }

    span {
        color: var(--secondary-darker);
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: var(--primary);
`

const Modal = ({showModal, setShowModal, movie}) => {
    // to close modal by clicking outside of it
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            // miliseconds
            duration: 200
        },
        opacity: showModal ? 1 : 0,
        minWidth: `60%`,
        position: `fixed`,
        top: `50%`,
        left: `50%`,
        backgroundColor: `rgba(255, 255, 255, .95)`,
        boxShadow: `0 5px 16px rgba(0, 0, 0, .7)`,
        padding: `50px 40px`,
        zIndex: `10`,
        color: `#000`,
        borderRadius: `5px`,
        transform: showModal ? `translate(-50%, -50%)` : `translate(-50%, -100%)`,
    })

    // to close modal by clicking outside of it
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    // for capturing the esc key
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    // for capturing the esc key
    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation} showModal={showModal}>
                        <ModalContent>
                            <img style={{width: '225px'}} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={`${movie.title}Poster`} />
                            <MovieInfo>
                                <h3>{movie.title}</h3>
                                <p>
                                    Rating: {movie.vote_average ? <span>{movie.vote_average}</span> :
                                        '-'}
                                </p>
                                <p>
                                    Release year: {movie.release_date ? <span>{movie.release_date.substring(0, 4)}</span> :
                                        '-'}
                                </p>
                                <p>
                                    Popularity: {movie.popularity ? <span>{movie.popularity}</span> : '-'}
                                </p>
                                <p>
                                    Vote Count: {movie.vote_count ? <span>{movie.vote_count}</span> : '-'}
                                </p>
                                <p>
                                    Overview:
                                </p>
                                <p>{movie.overview ? <p>{movie.overview}</p> : '-'}</p>
                            </MovieInfo>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default Modal
