import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import { useAppSelector } from '../store'

const AllExpenses = () => {
  const { expenses } = useAppSelector((state) => state.expense)

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod='Total'
      fallBackText='No expenses registered found!'
    />
  )
}

export default AllExpenses
