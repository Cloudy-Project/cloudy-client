import React from 'react'
import '../css/GoogleLoginBtn.css';

export default function GoogleLoginBtn() {
  return (
    <div className='google-login-btn'>
      <img className='google-login-logo' src={require('../assets/img/icon_logo_Google.png')} alt='' />
      <label className='google-login-label'>
        Google로 로그인
      </label>
      <img className='google-login-logo' alt='' />
    </div>
  )
}
