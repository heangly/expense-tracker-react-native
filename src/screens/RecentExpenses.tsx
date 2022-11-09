import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import { RootBottomTabsParamList, RootStackParamList } from '../commons/types'

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabsParamList, 'RecentExpenses'>,
  NativeStackScreenProps<RootStackParamList, 'BottomTabs'>
>

const RecentExpenses: React.FC<Props> = () => {
  return <Text>RecentExpenses</Text>
}

export default RecentExpenses
