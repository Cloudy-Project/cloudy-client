import React from 'react'
import '../css/Label.css';

export default function Label({content}) {
  return (
    <label className='label'>
      {content}
    </label>
  )
}
