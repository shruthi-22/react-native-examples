import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactSlice';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   whitelist: ['contacts'],
};


// todo what is serializable check
export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(persistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);