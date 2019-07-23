import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'

import AppNavigator from 'navigation/AppNavigator'

async function preloadResources() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      'Roboto': require('./assets/fonts/Roboto.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
      ...Ionicons.font,

      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ])
}

function handleError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinish(setLoadingComplete) {
  setLoadingComplete(true)
}

function AppEntry(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={preloadResources}
        onError={handleError}
        onFinish={() => handleFinish(setLoadingComplete)}
      />
    )
  }

  return (
    <AppEntry.View>
      {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
      <AppNavigator />
    </AppEntry.View>
  )
}

AppEntry.View = styled.View`
  flex: 1;
  background-color: #FFF;
`

export default AppEntry
