import { combineReducers, configureStore } from "@reduxjs/toolkit";
import timeRangeSlice from "./Slices/TimeRange.slice";

export const rootReducer = combineReducers({
  [timeRangeSlice.name]: timeRangeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
