import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native'
import { GLOBAL_COLORS } from '../../commons/constants'

type Props = {
  label: 'Amount' | 'Date' | 'Description'
  textInputConfig: Partial<TextInputProps>
  additionalStyles?: ViewStyle
  errorStyles?: ViewStyle
}

const Input: React.FC<Props> = ({
  label,
  textInputConfig,
  additionalStyles,
  errorStyles
}) => {
  return (
    <View style={[styles.inputContainer, additionalStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig.multiline && styles.inputMultiline,
          errorStyles
        ]}
        {...textInputConfig}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },

  label: {
    fontSize: 14,
    color: GLOBAL_COLORS.primary100,
    marginBottom: 4
  },

  input: {
    backgroundColor: GLOBAL_COLORS.primary100,
    padding: 8,
    borderRadius: 6,
    fontSize: 18,
    color: GLOBAL_COLORS.primary700
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
})
