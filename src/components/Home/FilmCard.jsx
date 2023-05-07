import React from 'react'
import { suggestedFilmsImg } from '../../assets/suggestedFilms/suggestedFilmsImages'


const FilmCard = ({film, handleClick}) => {
  return (
    <div onClick={() => handleClick(film.name)} className="movie-card" >
    <img   src={suggestedFilmsImg[film.img]} alt="Movie Poster" className="movie-poster" />
    <h3 className="movie-title">{film.summary}</h3>
        </div>
  )
}

export default FilmCard