import React from 'react';
import '../css/FloatingBtn.css';
import { useNavigate } from 'react-router-dom';

export default function FloatingBtn({ }) {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate('/cloudy/letter');
    }

    return (
      <button className='floating-button' onClick={(onClickBtn)}>
        <img src={require('../assets/img/sunny.png')} alt='' />  
      </button>
    );
}