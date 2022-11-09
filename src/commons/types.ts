import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  BottomTabs: undefined
  ManageExpense: undefined
}

export type RootBottomTabsParamList = {
  RecentExpenses: NavigatorScreenParams<RootStackParamList>
  AllExpenses: undefined
}
