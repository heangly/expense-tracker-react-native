import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import NativeStackNavigator from './NativeStackNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator
