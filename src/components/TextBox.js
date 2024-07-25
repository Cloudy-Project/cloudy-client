import React from 'react'
import '../css/TextBox.css';

export default function TextBox({content, writer, type}) {
  if(type === 'LETTER') {
    return (
      <div className='letter-box'>
        <p className='content'>{content}</p>
        <p className='writer'>- {writer} -</p>
      </div>
    )
  } else if(type === 'REPLY') {
    return (
      <div className='reply-box'>
        <div className='writer-box'>
          {/* 의, 이의 채우기 */}
          <p className='writer-name'>{writer} 답장</p>
        </div>
        <p className='content'>{content}</p>
      </div>
    )
  }
}
