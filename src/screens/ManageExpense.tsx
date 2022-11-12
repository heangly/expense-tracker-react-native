import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { GLOBAL_COLORS } from '../commons/constants'
import { RootNativeStackParamList } from '../commons/types'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import IconButton from '../components/UI/IconButton'
import { useAppDispatch } from '../store'
import { deleteExpense } from '../store/slices/expenseSlice'

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

  const onDelete = () => {
    dispatch(deleteExpense({ id: expenseId! }))
    navigation.goBack()
  }

  const onCancel = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        expenseId={expenseId ?? Math.random().toString()}
        onCancel={onCancel}
      />

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

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GLOBAL_COLORS.primary200,
    alignItems: 'center'
  }
})
