import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { GLOBAL_COLORS } from '../../commons/constants'

type Props = {
  children: string
  mode?: 'flat'
  additionalStyles?: ViewStyle
  onPress: () => void
}

const Button: React.FC<Props> = ({
  children,
  mode,
  additionalStyles,
  onPress
}) => {
  return (
    <View style={additionalStyles}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: '#cccc' }}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GLOBAL_COLORS.primary500
  },

  flat: {
    backgroundColor: 'transparent'
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  },

  flatText: {
    color: GLOBAL_COLORS.primary200
  },

  pressed: {
    opacity: 0.5,
    backgroundColor: GLOBAL_COLORS.primary100,
    borderRadius: 4
  }
})
