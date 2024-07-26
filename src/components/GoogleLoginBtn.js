import React from 'react'
import '../css/GoogleLoginBtn.css';

export default function GoogleLoginBtn() {
  return (
      <a href={process.env.REACT_APP_SERVER_URL + "/oauth2/authorization/google"} className='google-login-btn'>
        <img className='google-login-logo' src={require('../assets/img/icon_logo_Google.png')} alt='' />
        <p className='google-login-label'>
          Google로 로그인
        </p>
        <img className='google-login-logo' alt='' />
      </a>
  )
}
