import changeTheNumber from "./count";
import addTOdo from './todo'
import GetDeportmentReducer from './getdeportment'
import { combineReducers } from "redux";
import Login from '../auth/reducer'
const rootReducer = combineReducers({
  changeTheNumber,
  addTOdo,
  GetDeportmentReducer,
  Login

});
export default rootReducer;
