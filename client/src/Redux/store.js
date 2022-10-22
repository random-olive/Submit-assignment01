import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

//persist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

//slices
import { userSlice } from "./slices/userSlice";

//logger
const logger = createLogger();

//
const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        ReduxThunk: {},
        serializableCheck: false,
      }).concat(logger),
  },
  composeWithDevTools()
);

export default store;
