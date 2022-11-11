import { StyleSheet, Text, View } from 'react-native'
import { GLOBAL_COLORS } from '../../commons/constants'
import { ExpensesAndPeriod } from '../../commons/types'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput: React.FC<
  ExpensesAndPeriod & { fallBackText?: string }
> = ({ expenses, expensesPeriod, fallBackText }) => {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GLOBAL_COLORS.primary700
  },

  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
})
