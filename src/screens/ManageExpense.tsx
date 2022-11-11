import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { GLOBAL_COLORS } from '../commons/constants'
import { RootNativeStackParamList } from '../commons/types'
import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import { useAppDispatch } from '../store'
import {
  addExpense,
  deleteExpense,
  updateExpense
} from '../store/slices/expenseSlice'

type Props = NativeStackScreenProps<RootNativeStackParamList, 'ManageExpense'>

const ManageExpense: React.FC<Props> = ({ route, navigation }) => {
  const { expenseId } = route.params
  const isEditing = !!expenseId
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, expenseId])

  const onCancel = () => {
    navigation.goBack()
  }

  const onConfirm = () => {
    const expense = {
      description: 'test',
      amount: 19.99,
      date: '2023-05-19'
    }

    if (isEditing) {
      dispatch(updateExpense({ ...expense, id: expenseId! }))
    } else {
      dispatch(addExpense({ ...expense, id: Math.random().toString() }))
    }

    navigation.goBack()
  }

  const onDelete = () => {
    dispatch(deleteExpense({ id: expenseId! }))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={onCancel} additionalStyles={styles.button}>
          Cancel
        </Button>

        <Button onPress={onConfirm} additionalStyles={styles.button}>
          {isEditing ? 'Update' : 'And'}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName='trash'
            color={GLOBAL_COLORS.error500}
            size={24}
            onPress={onDelete}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_COLORS.primary800
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GLOBAL_COLORS.primary200,
    alignItems: 'center'
  }
})
