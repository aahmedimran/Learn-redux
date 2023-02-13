import ActionTypes from "./actionTypes";
import axios from "axios";

export const AUTH = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.Login_User_LOADING,
      });
      const response = await axios.post(
        "http://localhost:3001/api/Login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      
      dispatch({
        type: ActionTypes.Login_User_SUCCESS,
        payload: response.data.profile
      });
      console.log("response",response.data.profile);
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: ActionTypes.Login_User_FAIL,
      });
    }
  };
};
