
import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todoSlices } from "./todoSlices";
import  { getProductSlice } from './getProdouct'
import { addProductSlice } from "./addProduct";

const rootReducers = combineReducers({
    todo: todoSlices.reducer,
    counter: counterSlice.reducer,
    product:getProductSlice.reducer,
    addProduct:addProductSlice.reducer
});
export default rootReducers;