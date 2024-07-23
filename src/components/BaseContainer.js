import React from 'react'
import '../css/BaseContainer.css';

export default function BaseContainer({children}) {
  return (
    <div className='base-container'>
      {children}
    </div>
  )
}