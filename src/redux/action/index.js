import axios from "axios";
import ActionTypes from "./deportment.action";
export const incRement = (number = 1) => {
  return (dispatch) => {
    dispatch({
      type: "INCREMENT",
      payload: number,
    });
  };
};
export const decRement = () => {
  return (dispatch) => {
    dispatch({
      type: "DECREMENT",
    });
  };
};
export const addTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: {
        id: new Date().getTime(),
        data: data,
      },
    });
  };
};
export const removeTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };
};
export const removeAllTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVEALLTODO",
    });
  };
};

export const GET_DEPORTMENT = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_DeportmentDATA_LOADING,
      });
      const data = await axios.get("http://localhost:3001/api/GetDeportment");
      console.log("data", data);
      dispatch({
        type: ActionTypes.GET_DeportmentDATA_SUCCESS,
        payload: data.data.data,
      });
      console.log(data);
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: ActionTypes.GET_DeportmentDATA_FAIL,
      });
    }
  };
};
