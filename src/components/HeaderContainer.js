import React, { useEffect, useState } from 'react';
import '../css/HeaderContainer.css';
import getConsonant from '../utils/GetConsonant';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HeaderContainer({ memberId, name = '' }) {
  const [consonant, setConsonant] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setConsonant(getConsonant(name));
  }, [name])

  const onClickHome = () => {
    const currentPath = location.pathname;

    if (currentPath.includes('cloudy')) {
      navigate(`/cloudy/${memberId}`) //로그인하지 않은 경우
    }
    else {
      navigate(`/${memberId}`); //로그인 한 경우
    }
  }

  return (
    <div className='header-container'>
      <div onClick={() => onClickHome()} className='home-btn-container'>
        <img
          className='home-btn'
          src={require('../assets/img/Home.png')}
          alt=''
        />
      </div>
      <label className='user-text'>{name}{consonant} 편지함</label>
    </div>
  );
}
