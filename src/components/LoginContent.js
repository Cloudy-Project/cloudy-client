import React from 'react'
import '../css/LoginContent.css';

export default function LoginContent({children}) {
  return (
    <div className='login-content'>
      {children}
    </div>
  )
}