import React from 'react'
import { RootStackParamList } from './routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../../screens/Dashboard'
import Genre from '../../screens/Genre'
import TransparentModal from '../../screens/Modal/TransparentModal'
import Search from '../../screens/Search'

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
      <Stack.Screen name="Genre" component={Genre} />
      <Stack.Screen name="TransparentModal" component={TransparentModal} options={{
        presentation: "transparentModal"
      }}/>
       <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
  )
}

export default React.memo(Routes)