import React from 'react'
import '../css/DeleteBtn.css';

export default function DeleteBtn({onClick}) {
  return (
    <button className='delete-btn' onClick={onClick}>
      <img className='trash-img' src={require('../assets/img/Trash.png')} alt='' />
    </button>
  )
}
