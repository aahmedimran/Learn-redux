import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeAllTodo,
  removeTodo,
  todoItem,
} from "../store/todoSlices";
const Todo = () => {
  const [todo, settodo] = React.useState("");
  const todoData = useSelector((state) => state?.todo?.todoList);
  // localStorage.setItem("todoList",JSON.stringify([]))

  const todoItemdata = JSON.parse(localStorage.getItem("todoList"));
  const dispatch = useDispatch();
  useEffect(() => {
    if (todoItemdata) dispatch(todoItem(todoItemdata));
    /* eslint-disable-next-line */
  }, []);
  return (
    <>
      <div>
        <input type="text" onChange={(e) => settodo(e.target.value)} />
        <button onClick={() => dispatch(addTodo(todo))}>addTodo</button>
      </div>
      <div>
        {todoData.length > 0 &&
          todoData?.map((todo) => (
            <div key={todo?.id}>
              {todo?.text}
              <button onClick={() => dispatch(removeTodo(todo?.id))}>
                removeTodo
              </button>
            </div>
          ))}
        <button onClick={() => dispatch(removeAllTodo())}>removeAllTodo</button>
      </div>
    </>
  );
};

export default Todo;
