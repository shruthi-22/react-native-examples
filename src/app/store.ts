import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactSlice';
import {createLogger} from 'redux-logger';

const logger = createLogger();
export const store = configureStore({
  reducer: {
    phoneBook: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
