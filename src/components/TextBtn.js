import React from 'react'
import '../css/TextBtn.css';

export default function TextBtn({onClick, children}) {
  return (
    <div onClick={onClick} className='text-btn'>{children}</div>
  )
}
