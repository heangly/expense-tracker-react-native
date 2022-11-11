import { NavigatorScreenParams } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootNativeStackParamList = {
  BottomTabs: undefined
  ManageExpense: { expenseId: string | null }
}

export type RootBottomTabsParamList = {
  RecentExpenses: NavigatorScreenParams<RootNativeStackParamList>
  AllExpenses: undefined
}

export type RootNativeNavigationProp =
  NativeStackNavigationProp<RootNativeStackParamList>

export type Expense = {
  id: string
  description: string
  amount: number
  date: string
}

export type ExpensesAndPeriod = {
  expenses: Expense[]
  expensesPeriod: string
}

export type Icon = keyof typeof Ionicons.glyphMap
