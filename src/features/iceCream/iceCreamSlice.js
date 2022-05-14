import { createSlice } from '@reduxjs/toolkit';

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
});

export const selectIceCreamCount = (state) => state.iceCream.numberOfIceCreams;
export const { iceCreamOrdered } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
