import ActionTypes from '../action/deportment.action'

const INTIALSTATE = {
    DeportmentList: [],
  };
  
const GetDeportmentReducer = (state = INTIALSTATE, action) => {
    switch (action.type) {
      case ActionTypes.GET_DeportmentDATA_LOADING:
        return {
          ...state,
          dataLoading: true,
        };
      case ActionTypes.GET_DeportmentDATA_SUCCESS:
        return {
          ...state,
          data: action.payload,
          dataLoading: false,
        };
      case ActionTypes.GET_DeportmentDATA_FAIL:
        return {
          ...state,
          dataLoading: false,
          data: [],
        };
      default:
        return state;
    }
  };
  export default GetDeportmentReducer;