import React from 'react'
import Gap from './Gap';
import { useLocation } from 'react-router-dom';
import Button from './Button';

export default function NoLetterHere({isLogin, memberName = ''}) {
  const location = useLocation();
  if(isLogin) {
    const onClickBtn = () => {
      navigator.clipboard.writeText(window.location.host + '/cloudy' + location.pathname);
      alert('클립보드에 링크가 복사되었어요!');
    }
    return (
      <div className='null-container'>
      <div className='null-content'>
        <p>
          아직 도착한 편지가 없네요!
        </p>
        <p>
          링크를 친구에게 공유해 보세요
        </p>
        <Gap gap={30} />
        <p>
          {window.location.host + '/cloudy' + location.pathname}
        </p>
        <Gap gap={30} />
        <Button onClickBtn={onClickBtn} btnName='링크복사하기' />
      </div>
    </div>
    )
  }

  return (
    <div className='null-container'>
      <div className='null-content'>
        <p>
          아직 도착한 편지가 없네요!
        </p>
        <p>
          햇님을 눌러 {memberName}에게 첫 번째 편지를 보내봐요
        </p>
      </div>
    </div>
  )
}
