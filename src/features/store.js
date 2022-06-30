import { configureStore } from '@reduxjs/toolkit';
import apartmentReducer from './apartments/apartmentSlice';

export const store = configureStore({
  reducer: {
    reducerName: apartmentReducer,
  },
});
