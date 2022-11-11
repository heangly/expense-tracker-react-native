import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import MainNavigator from './src/components/Navigators/MainNavigator'
import store from './src/store'

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style='light' />

      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
