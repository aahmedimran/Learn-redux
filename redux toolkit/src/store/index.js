/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import { todoSlices } from "./todoSlices";
import { counterSlice } from "./counterSlice";
import  { getProductSlice }  from './getProdouct'
const store = configureStore({
  reducer: {
    todo: todoSlices.reducer,
    counter: counterSlice.reducer,
    product:getProductSlice.reducer
  }
});
export default store;
