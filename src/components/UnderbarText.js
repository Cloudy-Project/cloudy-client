import React from 'react'
import '../css/UnderbarText.css';

export default function UnderbarText({onClick, children}) {
  return (
    <div onClick={onClick} className='underbar-text'>{children}</div>
  )
}
