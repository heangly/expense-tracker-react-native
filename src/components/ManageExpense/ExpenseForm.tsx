import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { RootNativeNavigationProp } from '../../commons/types'
import { useAppDispatch, useAppSelector } from '../../store'
import { addExpense, updateExpense } from '../../store/slices/expenseSlice'
import Button from '../UI/Button'
import Input from './Input'

type UserInput = {
  amount: { value: string; isValid: boolean }
  date: { value: string; isValid: boolean }
  description: { value: string; isValid: boolean }
}
type Props = { isEditing: boolean; expenseId: string; onCancel: () => void }

const ExpenseForm: React.FC<Props> = ({ isEditing, expenseId, onCancel }) => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<RootNativeNavigationProp>()
  const { expenses } = useAppSelector((state) => state.expense)

  const currentExpense = useMemo(() => {
    return expenses.find((expense) => expense.id === expenseId)
  }, [expenseId])

  const [userInput, setUserInput] = useState<UserInput>({
    amount: {
      value: currentExpense?.amount.toString() ?? '',
      isValid: !!currentExpense
    },
    date: { value: currentExpense?.date ?? '', isValid: !!currentExpense },
    description: {
      value: currentExpense?.description ?? '',
      isValid: !!currentExpense
    }
  })

  const userInputsAreValid = () => {
    const amountIsValid =
      !isNaN(parseFloat(userInput.amount.value)) &&
      parseFloat(userInput.amount.value) > 0
    const dateData = userInput.date.value.split('-')
    const dateIsValid =
      dateData[0].length === 4 &&
      dateData[1].length > 0 &&
      dateData[1].length <= 2 &&
      dateData[2].length > 0 &&
      dateData[2].length <= 2
    const descriptionIsValid = userInput.description.value.trim().length > 0

    userInput.amount.isValid = amountIsValid
    userInput.date.isValid = dateIsValid
    userInput.description.isValid = descriptionIsValid
    return amountIsValid && dateIsValid && descriptionIsValid
  }

  const onSubmit = () => {
    if (!userInputsAreValid()) {
      Alert.alert('Invalid input', 'Please check your input values')
      return
    }

    const expenseData = {
      id: expenseId,
      description: userInput.description.value,
      amount: parseFloat(userInput.amount.value),
      date: userInput.date.value
    }

    const dispatchFunc = isEditing ? updateExpense : addExpense
    dispatch(dispatchFunc(expenseData))

    navigation.goBack()
  }

  const onInputChange = (key: keyof typeof userInput, enterdInput: string) => {
    setUserInput({
      ...userInput,
      [key]: { value: enterdInput, isValid: userInput[key].isValid }
    })
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          additionalStyles={styles.rowInput}
          errorStyles={
            currentExpense && !userInput.amount.isValid
              ? styles.error
              : undefined
          }
          textInputConfig={{
            keyboardType: 'decimal-pad',
            autoCorrect: false,
            autoCapitalize: 'none',
            value: userInput.amount.value,
            onChangeText: (value) => onInputChange('amount', value)
          }}
        />

        <Input
          label='Date'
          additionalStyles={styles.rowInput}
          errorStyles={
            currentExpense && !userInput.date.isValid ? styles.error : undefined
          }
          textInputConfig={{
            maxLength: 10,
            placeholder: 'YYYY-MM-DD',
            value: userInput.date.value,
            onChangeText: (value) => onInputChange('date', value)
          }}
        />
      </View>

      <Input
        label='Description'
        errorStyles={
          currentExpense && !userInput.description.isValid
            ? styles.error
            : undefined
        }
        textInputConfig={{
          multiline: true,
          value: userInput.description.value,
          onChangeText: (value) => onInputChange('description', value)
        }}
      />

      <View style={styles.buttons}>
        <Button mode='flat' onPress={onCancel} additionalStyles={styles.button}>
          Cancel
        </Button>

        <Button onPress={onSubmit} additionalStyles={styles.button}>
          {isEditing ? 'Update' : 'And'}
        </Button>
      </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  form: {
    marginTop: 10
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },

  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  rowInput: {
    flex: 1
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8
  },

  error: {
    borderWidth: 1,
    borderColor: 'red'
  }
})
