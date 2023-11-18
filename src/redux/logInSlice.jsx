import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';
const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  extraReducers: {
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.email;
      state.user = action.payload.password;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },
  },
});
