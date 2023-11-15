import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {  NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import Routes from './src/container/Routes';
import {Provider} from "react-redux";
import { store, persistor } from "./src/redux/store";
import {NativeBaseProvider} from "native-base"
import { PersistGate } from 'redux-persist/integration/react';

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
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            <NavigationContainer 
            ref={navigationRef}
            >
              <Routes />
            </NavigationContainer>
            </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>

  );
}

export default React.memo(App)
