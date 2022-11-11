import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import expenseReducer from './slices/expenseSlice'

const store = configureStore({
  reducer: { expense: expenseReducer }
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
