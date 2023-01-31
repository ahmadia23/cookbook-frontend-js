import { configureStore } from "@reduxjs/toolkit";
import cookbookSlice from "./cookbooks-slice";

const store = configureStore({
  reducer: {
    cookbooks: cookbookSlice.reducer
  }
})

export default store;
