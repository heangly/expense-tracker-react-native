import { FlatList, ListRenderItem, Text, View } from 'react-native'
import { Expense } from '../../commons/types'
import ExpenseItem from './ExpenseItem'

type Props = { expenses: Expense[] }

const ExpensesList: React.FC<Props> = ({ expenses }) => {
  const renderExpenseItem: ListRenderItem<Expense> = ({ item }) => (
    <ExpenseItem {...item} />
  )

  return (
    <FlatList<Expense>
      keyExtractor={(item) => item.id}
      data={expenses}
      renderItem={renderExpenseItem}
    />
  )
}

export default ExpensesList
