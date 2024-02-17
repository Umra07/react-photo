import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import photosReducer from './slices/photosSlice';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
