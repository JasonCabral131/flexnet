import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {  NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import Routes from './src/container/Routes';
import {Provider} from "react-redux";
import { store } from "./src/redux/store";

export const navigationRef = createNavigationContainerRef()

const  App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
      <Provider store={store}>
          <NavigationContainer 
          ref={navigationRef}
          >
            <Routes />
          </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>

  );
}

export default React.memo(App)
