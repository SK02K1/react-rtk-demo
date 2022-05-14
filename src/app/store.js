import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});
