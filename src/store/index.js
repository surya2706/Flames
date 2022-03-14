import { configureStore } from '@reduxjs/toolkit';
import resultReducer from '../slice/resultSlice';
import inputReducer from '../slice/inputSlice';

export const store = configureStore({
  reducer: {
    resultReducer,
    inputReducer,
  },
});
