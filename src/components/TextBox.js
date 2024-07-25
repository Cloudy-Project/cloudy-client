import React from 'react'
import '../css/TextBox.css';
import getConsonant from '../utils/GetConsonant';
import DeleteBtn from './DeleteBtn';
import { useNavigate } from 'react-router-dom';

export default function TextBox({letterId, memberId, content, writer, type}) {
  const navigate = useNavigate();
  
  if(type === 'LETTER') {
    if(letterId === undefined) {
      return (
      <div className='letter-box'>
        <p className='content'>{content}</p>
        <p className='writer'>- {writer} -</p>
      </div>
      )
    }
    const onClickDeleteBtn = async () => {
      if(window.confirm('이 편지와 답장을 정말 삭제하시겠어요? 🥲') == false) {
        return;
      }
      const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/${letterId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if(res.ok) {
        navigate(`/${memberId}`);
      } else {
        alert('편지를 삭제하는 데 실패했어요 🌧️');
      }
    }

    return (
      <div className='letter-box'>
        <p className='content'>{content}</p>
        <DeleteBtn onClick={onClickDeleteBtn} />
        <p className='writer'>- {writer} -</p>
      </div>
    )
  } else if(type === 'REPLY') {
    return (
      <div className='reply-box'>
        <div className='writer-box'>
          <p className='writer-name'>{writer + getConsonant(writer)} 답장</p>
        </div>
        <p className='content'>{content}</p>
      </div>
    )
  }
}
