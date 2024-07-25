import React from 'react'
import '../css/InputLine.css';

export default function InputLine({onChange, content}) {
  return (
    <input
      onChange={e => onChange(e.target.value)}
      value={content}
      placeholder='이름을 적어줘요'
      className='input-line'>
    </input>
  )
}
