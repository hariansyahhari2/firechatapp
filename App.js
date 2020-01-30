import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import LoginScreen from './screens/LoginScreen.js'
import ChatScreen from './screens/ChatScreen'

const screens = {
  "Login": {
    screen: LoginScreen
  },
  "Chat Room": {
    screen: ChatScreen
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)