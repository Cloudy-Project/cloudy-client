import React, { useState } from 'react'
import '../css/InputBox.css';

export default function InputBox({onChange, content, type}) {
  return (
    <div className='letter-box'>
      <textarea onChange={e => onChange(e.target.value)} className='content' value={content}></textarea>
    </div>
  )
}
