import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    userOrders: [],
  },
  reducers: {
    loading: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    loginInit: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutInit: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    logoutFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerInit: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      console.log(action.payload.user);
      state.isFetching = false;
      state.currentUser = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    userOrdersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    userOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.userOrders = action.payload[0].products;
      state.error = false;
    },
    userOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loading,
  loginInit,
  loginSuccess,
  loginFailed,
  logoutInit,
  logoutSuccess,
  logoutFailed,
  registerInit,
  registerSuccess,
  registerFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  userOrdersStart,
  userOrdersSuccess,
  userOrdersFailure,
} = userSlice.actions;
export default userSlice.reducer;
