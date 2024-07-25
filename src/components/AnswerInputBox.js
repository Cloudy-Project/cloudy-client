import React, { useState } from 'react'

export default function AnswerInputBox({letterId, memberId, replier, replyId, replyContent}) {
  const [content, setContent] = useState(replyContent !== null ? replyContent : '');

  const handleSubmit = async () => {
    const method = replyId === null ? 'POST' : 'PATCH';
    let body;
    if(method === 'POST') {
      body = {
        "letterId": letterId,
        "memberId": memberId,
        "content": content
      }
    } else if(method === 'PATCH') {
      body = {
        "id": replyId,
        "content": content
      }
    }
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/answer`, {
      method: method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if(res.ok) {
      if(method === 'POST') {
        alert('🌧️ 답장을 보냈어요!');
      } else if(method === 'PATCH') {
        alert('🌧️ 답장을 수정했어요!');
      }
      window.location.reload();
    }
  }

  const onKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSubmit();
    }
  }

  return (
    <div className='reply-box'>
      <div className='writer-box'>
        {/* 의, 이의 채우기 */}
        <p className='writer-name'>{replier} 답장</p>
      </div>
      <textarea
        onKeyDown={onKeyDown}
        onChange={e => setContent(e.target.value)}
        className='content'
        placeholder='답장을 입력하고 엔터를 눌러 보내요'
        value={content}>
      </textarea>
    </div>
  )
}
