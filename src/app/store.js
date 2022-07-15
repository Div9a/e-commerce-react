import { configureStore } from '@reduxjs/toolkit';
import Reducers from '../store';

export const store = configureStore({
  reducer: {
    counter: Reducers,
  },
});
