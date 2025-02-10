import { configureStore } from "@reduxjs/toolkit";
import finderReducer from "./slices/finder";

export const store = configureStore({
  reducer: {
    finder: finderReducer,
  },
});
