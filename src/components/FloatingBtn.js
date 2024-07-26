import React from 'react';
import '../css/FloatingBtn.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSessionInfo } from '../utils/GetSessionInfo';

export default function FloatingBtn({ }) {
    const location = useLocation();
    const navigate = useNavigate();
    const {memberId} = useParams();

    async function moveToLetter(){
        const isLoggedIn = await getSessionInfo();
        console.log('isLoggedIn : ', isLoggedIn)
          if (isLoggedIn == true) {
            navigate(`/settings/${memberId}`); // /로그인한 경우
          }
          else {
            navigate(`/cloudy/letter/member/${memberId}`); // 로그인하지 않은 경우 
          }
        }

    return (
      <button className='floating-button' onClick={()=> moveToLetter()}>
        <img 
                src={location.pathname.includes('cloudy') 
                    ? require('../assets/img/sunny.png') // 로그인 전 플로팅 버튼
                    : require('../assets/img/pen.png') // 로그인 후 플로팅 버튼
                } 
                alt='' 
        />
      </button>
    );
}