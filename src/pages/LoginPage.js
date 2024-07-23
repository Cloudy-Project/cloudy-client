import React from 'react'
import BaseContainer from '../components/BaseContainer'
import GoogleLoginBtn from '../components/GoogleLoginBtn'
import LoginLogo from '../components/LoginLogo'
import LoginContent from '../components/LoginContent'

export default function LoginPage() {
  return (
    <BaseContainer>
      <LoginContent>
        <LoginLogo />
        <GoogleLoginBtn />
      </LoginContent>
    </BaseContainer>
  )
}
