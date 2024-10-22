import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api.slice';
import { authSlice } from './slices/auth.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
