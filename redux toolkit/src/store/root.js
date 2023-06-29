
import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todoSlices } from "./todoSlices";
import  { getProductSlice } from './getProdouct'

const rootReducer = combineReducers({
    todo: todoSlices.reducer,
    counter: counterSlice.reducer,
    product:getProductSlice.reducer

});
export default rootReducer;