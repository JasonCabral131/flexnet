import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist"
import { reduxApi } from "./services/reduxApi";
import movieSlice from "./feature/movieSlice";
const persistConfig = {
    key: 'root',
    storage: AsyncStorage, // use AsyncStorage for React Native
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    [reduxApi.reducerPath]: reduxApi.reducer,
    movie: movieSlice,

})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(reduxApi.middleware),
      devTools: process.env.NODE_ENV !== 'production',
  })
  setupListeners(store.dispatch)
  export type AppDispatch  = typeof store.dispatch;
  export type RootState  = ReturnType<typeof store.getState>;