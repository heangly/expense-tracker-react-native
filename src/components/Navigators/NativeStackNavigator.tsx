import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../commons/types'
import ManageExpense from '../../screens/ManageExpense'
import BottomTabNavigator from './BottomTabNavigator'

const NativeStack = createNativeStackNavigator<RootStackParamList>()

const NativeStackNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName='BottomTabs'>
      <NativeStack.Screen
        name='BottomTabs'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <NativeStack.Screen
        name='ManageExpense'
        component={ManageExpense}
        options={{ title: 'Manage Expense' }}
      />
    </NativeStack.Navigator>
  )
}

export default NativeStackNavigator
