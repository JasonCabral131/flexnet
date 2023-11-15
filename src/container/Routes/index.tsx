import React from 'react'
import { RootStackParamList } from './routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../../screens/Dashboard'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
      <Stack.Screen name="Dashboard" component={Dashboard} />

  </Stack.Navigator>
  )
}

export default React.memo(Routes)