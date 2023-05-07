import React from 'react'
import { useSelector } from 'react-redux';
import Home from './components/Home/Home'
import Modal from './components/modal/Modal';
import { getModalData } from './features/modal/modalReducer';

function App(){
  const {isOpenModal} = useSelector(getModalData)
  
  return (
    <div>
      {isOpenModal ? <Modal/> : <Home/>}   
    </div>
  )
}

export default App