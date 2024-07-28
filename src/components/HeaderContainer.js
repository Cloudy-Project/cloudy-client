import React, { useEffect, useState } from 'react';
import '../css/HeaderContainer.css';
import getConsonant from '../utils/GetConsonant';
import { useNavigate, useParams } from 'react-router-dom';
import { getSessionInfo } from '../utils/GetSessionInfo';

export default function HeaderContainer({ name = '' }) {
  const [consonant, setConsonant] = useState();
  const navigate = useNavigate();
  const {memberId} = useParams();

  useEffect(() => {
    setConsonant(getConsonant(name));
  })
  
  async function moveToMypage(){
    const isLoggedIn = await getSessionInfo(memberId);
    console.log('isLoggedIn : ', isLoggedIn)
      if (isLoggedIn == true) {
        navigate(`/${memberId}`); //로그인 한 경우
      }
      else {
        navigate(`/cloudy/${memberId}`) //로그인하지 않은 경우
      }
    }
  
  return (
    <div className='header-container'>
      <button className='home-btn' type='button' onClick={()=> moveToMypage()}>
        <img src={require('../assets/img/Home.png')} alt=''/>
      </button>
      <div></div>
      <label className='user-text'>{name}{consonant} 편지함</label>
    </div>
  );
}