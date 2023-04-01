
import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todoSlices } from "./todoSlices";
const rootReducer = combineReducers({
    todo: todoSlices.reducer,
    counter: counterSlice.reducer,

});
export default rootReducer;