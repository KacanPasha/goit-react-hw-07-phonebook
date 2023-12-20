import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});


