import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import MainNavigator from './src/components/Navigators/MainNavigator'

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style='light' />
      <MainNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
