import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GLOBAL_COLORS } from '../../commons/constants'
import { RootNativeNavigationProp } from '../../commons/types'

type Props = { id: string; description: string; amount: number; date: string }

const ExpenseItem: React.FC<Props> = ({ id, description, amount, date }) => {
  const nagivation = useNavigation<RootNativeNavigationProp>()

  const onPress = () => {
    nagivation.navigate('ManageExpense', { expenseId: id })
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date}</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5
  },

  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GLOBAL_COLORS.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 4,
    shadowColor: GLOBAL_COLORS.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.4
  },

  textBase: {
    color: GLOBAL_COLORS.primary50
  },

  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },

  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 4
  },

  amount: {
    color: GLOBAL_COLORS.primary500,
    fontWeight: 'bold',
    minWidth: 80,
    textAlign: 'center'
  }
})
