import { Expense } from '../commons/types'

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-12-19')
  },

  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-01-05')
  },

  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2022-12-01')
  },

  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-02-19')
  },

  {
    id: 'e5',
    description: 'Another book',
    amount: 19.99,
    date: new Date('2023-02-18')
  }
]

export default DUMMY_EXPENSES
