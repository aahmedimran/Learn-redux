const INTIALSTATE = {
  globalTodo: [],
};

const addTOdo = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        globalTodo: [...state.globalTodo, { id, data }],
      };
    case "REMOVE":
      const newglobalTodo = state.globalTodo.filter(
        (elem) => elem.id !== action.id
      );
      return {
        ...state,
        globalTodo: newglobalTodo,
      };
    case "REMOVEALLTODO":
      return {
        ...state,
        globalTodo: [],
      };

    default:
      return { ...state };
  }
};
export default addTOdo;
