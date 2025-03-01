import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import favoritesReducer from "./slices/favoritesSlice";
import loadingReducer from "./slices/loadingSlice";
import selectionReducer from "./slices/selectionSlice";
import fixturesReducer from "./slices/fixturesSlice";

// Persist config for only the fixtures slice
const fixturesPersistConfig = {
  key: "fixtures",
  storage,
};

// Wrap fixturesReducer with persistReducer
const persistedFixturesReducer = persistReducer(fixturesPersistConfig, fixturesReducer);

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    favorites: favoritesReducer,
    loading: loadingReducer,
    selection: selectionReducer,
    fixtures: persistedFixturesReducer, // Persist only fixtures
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore serialization warnings
      immutableCheck: false, // Disable ImmutableStateInvariantMiddleware
    }).concat(apiSlice.middleware),
  devTools: true,
});

// Persistor for store
export const persistor = persistStore(store);

export default store;
