import React from 'react'
import '../css/InputLine.css';

export default function InputLine({onChange, content}) {
  return (
    <input
      onChange={e => onChange(e.target.value)}
      value={content}
      className='input-line'>
    </input>
  )
}
