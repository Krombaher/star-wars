import { configureStore } from '@reduxjs/toolkit';
import { starWarsApi } from '../api/StarWarsApi';
import charactersSlice from './charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
