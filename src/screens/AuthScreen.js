import React from 'react'
import styled from 'styled-components/native'
import { Auth } from 'auth'

function AuthScreen() {
  return (
    <AuthScreen.View>
      <Auth />
    </AuthScreen.View>
  )
}

AuthScreen.View = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
  padding: 50px;
`

export default AuthScreen
