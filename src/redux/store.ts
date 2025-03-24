import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;