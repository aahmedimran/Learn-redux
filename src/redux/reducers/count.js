const INTIALSTATE = {
  globalCounter: 5,
};

const changeTheNumber = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        globalCounter: state.globalCounter + action.payload,
      };
    case "DECREMENT":
      return {
        globalCounter: state.globalCounter - 1,
      };
    default:
      return { ...state };
  }
};
export default changeTheNumber;
