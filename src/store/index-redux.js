import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login";

const store = configureStore({
  reducer: {
    authStatus : authSlice.reducer
  }
})

export default store;
