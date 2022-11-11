import { NavigatorScreenParams } from '@react-navigation/native'

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
