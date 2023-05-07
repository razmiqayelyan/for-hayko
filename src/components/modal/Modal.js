import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../features/modal/modalReducer';
import './Modal.css';
import { Convertminutes } from '../../logic/ConvertHour';

const Modal = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.movie.data)
    const isLoading = useSelector((state) => state.movie.isLoading)
    const error = useSelector((state) => state.movie.error)

    if (isLoading) {
        return (
            <div className="loading">
              <div className="loading-spinner"></div>
              Loading...
            </div>
          )
    }
    if (error) {
        setTimeout(() => {
            dispatch(close())
        }, 3500)
        return <div className='error-message'>Error: {error}</div>
    }

    if (data.Actors === "N/A" || data.Plot === "N/A" || data.Writter === "N/A" || data.Poster === "N/A" || data.imdbRating === "N/A" || data.Runtime === "N/A") {
        setTimeout(() => {
            dispatch(close())
        }, 3500)
        return <div className='error-message'>We don't have much information about that film</div>
    }

    return (
        <div className='modal'>
            <h1 className='title'>{data?.Title}</h1>
            <img src={data?.Poster} alt="loading..." className='img' />
                <div className='description'>
                    <h1 className='actor'>{data?.Actors}</h1>
                    <p className='plot'>{data?.Plot}</p>
                    <div className="writer">{data?.Writer}</div>
                </div>
                <div className='result'>
                    <p className='score'>{data?.imdbRating}/10</p>
                    <p className='runtime'><Convertminutes minutes={data?.Runtime}/></p>
                    <button onClick={() => dispatch(close())}>find new one</button>
                </div>
        </div>
    )

}

export default Modal;