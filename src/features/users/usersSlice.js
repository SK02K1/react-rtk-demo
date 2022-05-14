import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get(USERS_URL);
  return res.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
      state.users = [];
    });
  },
});

export default usersSlice.reducer;
