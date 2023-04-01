/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import { todoSlices } from "./todoSlices";
import { counterSlice } from "./counterSlice";
const store = configureStore({
  reducer: {
    todo: todoSlices.reducer,
    counter: counterSlice.reducer,
  }
});
export default store;
