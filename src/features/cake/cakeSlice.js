import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered: (state) => {
      state.numberOfCakes--;
    },
    cakeRestocked: (state, { payload: { restockValue } }) => {
      state.numberOfCakes += restockValue;
    },
  },
});

export const selectCakesCount = (state) => state.cake.numberOfCakes;
export const { cakeOrdered, cakeRestocked } = cakeSlice.actions;
export default cakeSlice.reducer;
