import React from 'react';
import { fetchDataWithAxios } from '../../features/movie/moveSlice'
import { useDispatch } from 'react-redux';
import { open } from '../../features/modal/modalReducer';
import './Home.css';
import { popularFilms } from '../../assets/data'
import FilmCard from './FilmCard';


const Moviecard = () => {
    const dispatch = useDispatch()
    const handleClick = (movieName) => {
        dispatch(fetchDataWithAxios(movieName))
        dispatch(open())
    }

  return (
    <div className="movie-grid">
        {popularFilms.map(film => <FilmCard key={film.id} film={film} handleClick={handleClick} />)}
    </div>
  )
}

export default Moviecard;