import React from 'react'
import { useSelector } from 'react-redux';
import Home from './components/Home/Home'
import Modal from './components/modal/Modal';

function App(){
  const isOpenModal = useSelector(state => state.modal.isOpenModal)
  
  return (
    <div>
      {isOpenModal ? <Modal/> : <Home/>}   
    </div>
  )
}

export default App