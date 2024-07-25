import React from 'react';
import '../css/FloatingBtn.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function FloatingBtn({ }) {
    const location = useLocation();
    const navigate = useNavigate();
    const {memberId} = useParams();
    
    const onClickBtn = () => {
        if (location.pathname.includes('cloudy')) {
            navigate(`/cloudy/letter/member/${memberId}`); // 로그인하지 않은 경우 
        } else {
            navigate(`/settings/${memberId}`); // /로그인한 경우
        }
    };

    const img = type === 'SETTINGS' ? require('../assets/img/pen.png') : require('../assets/img/sunny.png');

    return (
      <div className='floating-button' onClick={(onClickBtn)}>
        <img
                className='floating-btn-img'
                src={location.pathname.includes('cloudy') 
                    ? require('../assets/img/sunny.png') // 로그인 전 플로팅 버튼
                    : require('../assets/img/pen.png') // 로그인 후 플로팅 버튼
                } 
                alt='' 
        />
      </div>
    );
}