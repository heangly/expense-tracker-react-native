import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import DUMMY_EXPENSES from '../data/dummyData'

const AllExpenses = () => {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Total' />
}

export default AllExpenses
