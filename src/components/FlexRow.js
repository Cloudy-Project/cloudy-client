import React from 'react'
import '../css/FlexRow.css';

export default function FlexRow({children}) {
  return (
    <div className='flex-row-container'>
      {children}
    </div>
  )
}
