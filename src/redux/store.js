import { configureStore } from "@reduxjs/toolkit";
import bioReducer from "../features/bioSlice";

export const store = configureStore({
  reducer: {
    bio: bioReducer,
  },
});
export default store;
