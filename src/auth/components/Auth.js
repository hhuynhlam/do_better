import React, { useEffect, useState } from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { Container, Content, Input, Item } from 'native-base'
import { flow } from 'lodash/fp'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'
import STORAGE from 'config/storage'
import fetchUser from '../api/fetchUser'

const HOME_ROUTE_NAME = 'Main'

function Auth(props) {
  const { navigation } = props
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    async function getAuthToken() {
      const authToken = await AsyncStorage.getItem(STORAGE.AUTH_TOKEN)

      if (authToken) {
        navigation.navigate(HOME_ROUTE_NAME)
      }

      setIsLoading(false)
    }

    getAuthToken()
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      <Content>
        <Item>
          <Auth.Input placeholder='First Name' />
        </Item>
        <Item>
          <Auth.Input placeholder='Last Name' />
        </Item>
      </Content>
    </Container>
  )
}

Auth.Input = styled(Input)`
  padding-bottom: 20px;
`

export default flow([
  withNavigation,
])(Auth)
