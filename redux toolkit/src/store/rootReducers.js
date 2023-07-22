
import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todoSlices } from "./todoSlices";
import  { getProductSlice } from './getProdouct'
import { addProductSlice } from "./addProduct";
import { getSingleproductSlice } from "./getSingleProduct";

const rootReducers = combineReducers({
    todo: todoSlices.reducer,
    counter: counterSlice.reducer,
    product:getProductSlice.reducer,
    addProduct:addProductSlice.reducer,
    singleproduct:getSingleproductSlice.reducer
});
export default rootReducers;