import React, { useState } from 'react';
import './Home.css';
import { useDispatch } from 'react-redux';
import { fetchDataWithAxios } from '../../features/movie/moveSlice'
import { open, close } from '../../features/modal/modalReducer';
import Moviecard from './Moviecard';

const Home = () => {
  const [moviesName, setMoviesName] = useState("")
  const dispatch = useDispatch()

const buttonHandler = () => {
  if(moviesName === "" || !isNaN(moviesName)) return setMoviesName('') && dispatch(close());
  dispatch(fetchDataWithAxios(moviesName))
  dispatch(open())
}

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Movie Search App</h1>
        <div className="search-form">
          <input type="text" value={moviesName} className="search-input" placeholder="Search for movies..." onChange={(e) => setMoviesName(e.target.value)} />
          <button className="search-button" type="submit" onClick={buttonHandler}>Search</button>
        </div>
      </header>
      <main className="main-content">
        <h2 className="section-title">Suggested Movies</h2>
            <Moviecard/> 
      </main>
    </div>
  );
};

export default Home;