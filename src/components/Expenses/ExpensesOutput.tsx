import { StyleSheet, View } from 'react-native'
import { GLOBAL_COLORS } from '../../commons/constants'
import { ExpensesAndPeriod } from '../../commons/types'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput: React.FC<ExpensesAndPeriod> = ({
  expenses,
  expensesPeriod
}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_COLORS.primary700
  }
})
