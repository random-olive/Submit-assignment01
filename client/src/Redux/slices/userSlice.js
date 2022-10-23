import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken:'',
  refreshToken:'',
  displayName:'',
  email:'',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.list=action.payload.list;
    },
  },
});

export const { getUser } = userSlice.actions;