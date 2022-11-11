import { Pressable, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Icon } from '../../commons/types'

type Props = {
  iconName: Icon
  size: number
  color: string
  onPress: () => void
}

const IconButton: React.FC<Props> = ({ iconName, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },

  pressed: {
    opacity: 0.75
  }
})
