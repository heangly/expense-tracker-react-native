import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Expense } from '../../commons/types'
import DUMMY_EXPENSES from '../../data/dummyData'

type InitialStateProps = { expenses: Expense[] }

const initialState: InitialStateProps = {
  expenses: DUMMY_EXPENSES
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload)
    },

    deleteExpense: (state, action: PayloadAction<{ id: string }>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      )
    },

    updateExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.forEach((expense) => {
        if (expense.id === action.payload.id) {
          expense.description = action.payload.description
          expense.amount = action.payload.amount
          expense.date = action.payload.date
        }
      })
    }
  }
})

export const addExpense = expenseSlice.actions.addExpense
export const deleteExpense = expenseSlice.actions.deleteExpense
export const updateExpense = expenseSlice.actions.updateExpense
export default expenseSlice.reducer
