import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import { useAppSelector } from '../store'
import { getDateMinueDays } from '../utils/date'
import {
  RootBottomTabsParamList,
  RootNativeStackParamList
} from '../commons/types'

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabsParamList, 'RecentExpenses'>,
  NativeStackScreenProps<RootNativeStackParamList, 'BottomTabs'>
>

const RecentExpenses: React.FC<Props> = () => {
  const { expenses } = useAppSelector((state) => state.expense)

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinueDays(today, 7)
    return (
      new Date(expense.date) >= date7DaysAgo && new Date(expense.date) <= today
    )
  })

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 Days'
      fallBackText='No expenses registered for the last 7 days'
    />
  )
}

export default RecentExpenses
