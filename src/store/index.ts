import { configureStore } from '@reduxjs/toolkit';
import stackLineReducer from './slices/mainSlice';
import { useDispatch as useReduxDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    stackLineData: stackLineReducer
  }
});

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
