import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import counterReducer from '_features/counter/counterSlice';
import errorReducer from '_features/error/errorSlice';
import statusReducer from '_features/status/statusSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['error', 'status'],
  timeout: null,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  error: errorReducer,
  status: statusReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export const persistor = persistStore(store);
