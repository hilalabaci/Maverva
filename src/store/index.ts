import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./applicationSlice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    // Add more slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



