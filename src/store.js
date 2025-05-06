import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import favoritesReducer from "./slices/favoritesSlice";
import loadingReducer from "./slices/loadingSlice";
import selectionReducer from "./slices/selectionSlice";
import fixturesReducer from "./slices/fixturesSlice";
import eventBarReducer from "./slices/eventBarSlice";
import predictionReducer from "./slices/predictionSlice";
import newsReducer from "./slices/newsSlice";
import { socketMiddleware } from "./middleware/socketMiddleware";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    favorites: favoritesReducer,
    loading: loadingReducer,
    selection: selectionReducer,
    fixtures: fixturesReducer,
    eventBar: eventBarReducer,
    prediction: predictionReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore serialization warnings
      immutableCheck: false, // Disable ImmutableStateInvariantMiddleware
    }).concat(apiSlice.middleware, socketMiddleware),
  devTools: true,
});

// Persistor for store
export const persistor = persistStore(store);

export default store;
