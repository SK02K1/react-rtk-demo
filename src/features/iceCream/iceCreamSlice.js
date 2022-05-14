import { createSlice } from '@reduxjs/toolkit';
import { cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    iceCreamOrdered: (state) => {
      state.numberOfIceCreams--;
    },
  },
  extraReducers(builder) {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIceCreams--;
    });
  },
});

export const selectIceCreamCount = (state) => state.iceCream.numberOfIceCreams;
export const { iceCreamOrdered } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
