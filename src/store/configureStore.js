import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import reducer from "./reducer";
import api from "./middleware/api";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, reducer);

export default function () {
  return configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      api,
    ],
  });
}
