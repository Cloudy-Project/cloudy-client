import React from 'react'
import getConsonant from '../utils/GetConsonant';

export default function ReplyInputBox({replier, replyContent, onChange, onKeyDown}) {
  return (
    <div className='reply-box'>
      <div className='writer-box'>
        <p className='writer-name'>{replier + getConsonant(replier)} 답장</p>
      </div>
      <textarea
        onKeyDown={onKeyDown}
        onChange={onChange}
        className='content'
        placeholder='여기를 눌러 답장을 작성해요'
        value={replyContent}>
      </textarea>
    </div>
  )
}
