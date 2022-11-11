import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GLOBAL_COLORS } from '../../commons/constants'
import { RootNativeStackParamList } from '../../commons/types'
import ManageExpense from '../../screens/ManageExpense'
import BottomTabNavigator from './BottomTabNavigator'

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()

const NativeStackNavigator = () => {
  return (
    <NativeStack.Navigator
      initialRouteName='BottomTabs'
      screenOptions={{
        headerStyle: { backgroundColor: GLOBAL_COLORS.primary500 },
        headerTintColor: 'white'
      }}
    >
      <NativeStack.Screen
        name='BottomTabs'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <NativeStack.Screen
        name='ManageExpense'
        component={ManageExpense}
        options={{ title: 'Manage Expense', presentation: 'modal' }}
      />
    </NativeStack.Navigator>
  )
}

export default NativeStackNavigator
