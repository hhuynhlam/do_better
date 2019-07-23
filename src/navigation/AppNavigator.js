import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthScreen from 'screens/AuthScreen'
import MainTabNavigator from './MainTabNavigator'

export default createAppContainer(
  createSwitchNavigator({
    // AuthScreen: AuthScreen,
    Main: MainTabNavigator,
  })
)
