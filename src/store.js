import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import favoritesReducer from './slices/favoritesSlice';
import loadingReducer from './slices/loadingSlice';
import selectionReducer from './slices/selectionSlice'; // Import selectionSlice

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    favorites: favoritesReducer,
    loading: loadingReducer,
    selection: selectionReducer, // Add selection reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
