import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootBottomTabsParamList, RootStackParamList } from '../commons/types'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import DUMMY_EXPENSES from '../data/dummyData'

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabsParamList, 'RecentExpenses'>,
  NativeStackScreenProps<RootStackParamList, 'BottomTabs'>
>

const RecentExpenses: React.FC<Props> = () => {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Last 7 Days' />
  )
}

export default RecentExpenses
