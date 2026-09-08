import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice.js";
import jobSlice from "./jobSlice.js";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    job: jobSlice,
  },
});

export default store;
