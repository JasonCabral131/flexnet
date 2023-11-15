import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {  NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import Routes from './src/container/Routes';
import {Provider} from "react-redux";
import { store } from "./src/redux/store";
import {NativeBaseProvider} from "native-base"
import { LogBox } from 'react-native';
export const navigationRef = createNavigationContainerRef()
LogBox.ignoreAllLogs(true)
console.warn = (error) => {
return JSON.stringify(error, null, 3)
}
const  App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
      <Provider store={store}>
      <NativeBaseProvider>
          <NavigationContainer 
          ref={navigationRef}
          >
            <Routes />
          </NavigationContainer>
          </NativeBaseProvider>
      </Provider>
    </GestureHandlerRootView>

  );
}

export default React.memo(App)
