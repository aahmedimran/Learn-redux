import ActionTypes from './actionTypes'
const INTIALSTATE = {
  user: {},
};

  const Login = (state=INTIALSTATE,action)=>{
    switch (action.type) {
        case ActionTypes.Login_User_LOADING:
          return {
            ...state,
            dataLoading: true,
          };
        case ActionTypes.Login_User_SUCCESS:
          return {
            ...state,
            data: action.payload,
            dataLoading: false,
          };
        case ActionTypes.Login_User_FAIL:
          return {
            ...state,
            dataLoading: false,
          };
        default:
          return state;
      }
  }
  export default Login