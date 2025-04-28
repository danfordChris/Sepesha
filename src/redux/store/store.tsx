import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from './persistedReducer';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization check
    }),
});

export const persistor = persistStore(store); 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

