import { NavigatorScreenParams } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export type RootStackParamList = {
  BottomTabs: undefined
  ManageExpense: undefined
}

export type RootBottomTabsParamList = {
  RecentExpenses: NavigatorScreenParams<RootStackParamList>
  AllExpenses: undefined
}

export type Expense = {
  id: string
  description: string
  amount: number
  date: Date
}

export type ExpensesAndPeriod = {
  expenses: Expense[]
  expensesPeriod: string
}

export type Icon = keyof typeof Ionicons.glyphMap
