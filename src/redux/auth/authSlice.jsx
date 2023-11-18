import { register, logIn, logOut, fetchCurrentUser } from '../operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //registration
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
    },
    // logIn
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      //state.user = action.payload;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },
    // logOut
    [logOut.pending](state) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, action) {
      state.error = action.payload;
    },
    //refresh

    [fetchCurrentUser.pending](state) {
      state.isRefresh = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      //state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefresh = false;
    },
  },
});
export default authSlice.reducer;
