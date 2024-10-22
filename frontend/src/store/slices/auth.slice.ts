import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  token: string;
};

const initialState: State = {
  // todo: use redux-persist
  token: localStorage.getItem('token') || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setAuthToken, logout } = authSlice.actions;
