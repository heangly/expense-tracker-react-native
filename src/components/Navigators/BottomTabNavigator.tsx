import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { GLOBAL_COLORS } from '../../commons/constants'
import { RootBottomTabsParamList } from '../../commons/types'
import AllExpenses from '../../screens/AllExpenses'
import RecentExpenses from '../../screens/RecentExpenses'
import IconButton from '../UI/IconButton'

const BottomTabs = createBottomTabNavigator<RootBottomTabsParamList>()

const BottomTabNavigator = () => {
  const onPress = () => {}

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GLOBAL_COLORS.primary500,
          shadowColor: 'transparent'
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GLOBAL_COLORS.primary500,
          borderTopWidth: 0, // remove white line on top of tab bar
          paddingTop: 5
        },
        tabBarActiveTintColor: 'white',
        headerRight: ({ tintColor }) => (
          <IconButton
            iconName='add'
            size={24}
            color={tintColor as string}
            onPress={onPress}
          />
        )
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
