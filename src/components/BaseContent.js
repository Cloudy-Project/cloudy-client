import React from 'react'
import '../css/BaseContainer.css';

export default function BaseContent({children}) {
  return (
    <div className='base-content'>
      {children}
    </div>
  )
}
