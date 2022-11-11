import { StyleSheet, Text, View } from 'react-native'
import { GLOBAL_COLORS } from '../../commons/constants'
import { ExpensesAndPeriod } from '../../commons/types'

const ExpensesSummary: React.FC<ExpensesAndPeriod> = ({
  expenses,
  expensesPeriod
}) => {
  const expensesSum = expenses
    .reduce((acc, curr) => acc + curr.amount, 0)
    .toFixed(2)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>${expensesSum}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GLOBAL_COLORS.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  period: {
    fontSize: 12,
    color: GLOBAL_COLORS.primary400
  },

  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GLOBAL_COLORS.primary500
  }
})
