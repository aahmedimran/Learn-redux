import { createSlice } from "@reduxjs/toolkit";
export const todoSlices = createSlice({
  name: "todo",
  initialState: {
    todoList:[],
  },
  reducers: {
    todoItem : (state,action) => {
       state.todoList = action.payload
    },
    addTodo: (state) => {
      console.log(state.todoList
        );
      const Todo = {
        id: new Date().getTime(),
        // text: action.payload,
      };
      state.todoList.push(Todo);
      localStorage.setItem("todoList",JSON.stringify(state.todoList))
    },
    removeTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((elem) => elem.id !== action.payload);
     
      localStorage.setItem("todoList",JSON.stringify(state.todoList))


    },
    removeAllTodo(state) {
      state.todoList = [];
      console.log(state.todoList);
      localStorage.setItem("todoList",JSON.stringify(state.todoList))


    },
  },
});
export const { addTodo, removeTodo, removeAllTodo ,todoItem} = todoSlices.actions;
