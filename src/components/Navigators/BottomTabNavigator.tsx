import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { GLOBALCOLORS } from '../../commons/constants'
import { RootBottomTabsParamList } from '../../commons/types'
import AllExpenses from '../../screens/AllExpenses'
import RecentExpenses from '../../screens/RecentExpenses'

const BottomTabs = createBottomTabNavigator<RootBottomTabsParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GLOBALCOLORS.primary500 },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GLOBALCOLORS.primary500
        },
        tabBarActiveTintColor: 'white'
      }}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          )
        }}
      />

      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default BottomTabNavigator
