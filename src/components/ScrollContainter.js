import React from 'react'
import '../css/ScrollContainer.css';

export default function ScrollContainer({children}) {
  return (
    <div className='scroll-container'>{children}</div>
  )
}
