import React, { useEffect, useState } from 'react';
import '../css/HeaderContainer.css';
import getConsonant from '../utils/GetConsonant';
import { useNavigate, useParams } from 'react-router-dom';

export default function HeaderContainer({ name = '' }) {
  const [consonant, setConsonant] = useState();
  const navigate = useNavigate();
  const {memberId} = useParams();

  useEffect(() => {
    setConsonant(getConsonant(name));
  })

  const goToMypage= () => {
    const currentPath = window.location.pathname;

    if (currentPath.includes('cloudy')) {
      navigate('/cloudy/${memberId}') //로그인하지 않은 경우
    }
    else {
      navigate(`/${memberId}`); //로그인 한 경우
    }
  }

  return (
    <div className='header-container'>
      <button className='home-btn' type='button' onClick={goToMypage}>
        <img src={require('../assets/img/Home.png')} alt=''/>
      </button>
      <label className='user-text'>{name}{consonant} 편지함</label>
    </div>
  );
}