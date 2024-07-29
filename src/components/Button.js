import React from 'react'
import '../css/Button.css';

export default function Button({onClickBtn, btnName}) {
  return (
    <button type='button' className='cloudy-button' onClick={() => onClickBtn()}>
      {btnName}
    </button>
  )
}
