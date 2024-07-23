import React from 'react'
import '../css/LoginLogo.css';

export default function LoginLogo() {
  return (
    <div className='login-logo-container'>
      <img className='login-logo' src={require('../assets/img/cloudy.png')} alt='' />
      <label className='login-dec'>편지함을 만들어 보아요</label>
    </div>
  )
}
