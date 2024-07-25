import React from 'react'
import '../css/InputLine.css';

export default function InputLine({onClick, onChange, content, disable = false, placeholder = '이름을 적어줘요'}) {
  return (
    <input
      onClick={onClick}
      disabled={disable}
      onChange={e => onChange(e.target.value)}
      value={content}
      placeholder={placeholder}
      className='input-line'>
    </input>
  )
}
