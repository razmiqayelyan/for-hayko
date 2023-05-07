import React from 'react';
import { suggestedFilmsImg } from '../../assets/suggestedFilms/suggestedFilmsImages';
import { fetchDataWithAxios } from '../../features/movie/moveSlice'
import { useDispatch } from 'react-redux';
import { open } from '../../features/modal/modalReducer';
import './Home.css';

const Moviecard = () => {
    const dispatch = useDispatch()
    const handleClick = (movieName) => {
        dispatch(fetchDataWithAxios(movieName))
        dispatch(open())
    }

  return (
    <div className="movie-grid">
        <div className="movie-card" onClick={() => handleClick("Operation fortune")}>
            <img src={suggestedFilmsImg.operationFortune} alt="Movie Poster" className="movie-poster" />
            <h3 className="movie-title">Operation Fortune</h3>
        </div>

        <div className="movie-card"  onClick={() => handleClick("The Queen's Gambit")}>
            <img src={suggestedFilmsImg.queenGambit} alt="Movie Poster" className="movie-poster" />
            <h3 className="movie-title">The Queen's Gambit</h3>
        </div>

        <div className="movie-card"  onClick={() => handleClick("Black Adam")}>
            <img src={suggestedFilmsImg.blackAdam} alt="Movie Poster" className="movie-poster" />
            <h3 className="movie-title">Black Adam</h3>
        </div>

        <div className="movie-card"  onClick={() => handleClick("Shazam! Fury of the Gods")}>
            <img src={suggestedFilmsImg.Shazam} alt="Movie Poster" className="movie-poster" />
            <h3 className="movie-title">Shazam! Fury of the Gods</h3>
        </div>
    </div>
  )
}

export default Moviecard;