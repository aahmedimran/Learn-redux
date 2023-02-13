import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, removeAllTodo } from "../redux/action/index";

const Todo = () => {
  const [inputVal, setInterVal] = React.useState("");
  const { globalTodo } = useSelector((state) => state.addTOdo);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInterVal(e.target.value)}
        className="bg-green-300"
      />
      <br />
      <button
        onClick={() => {
          dispatch(addTodo(inputVal));
          setInterVal("");
        }}
      >
        Add TODO
      </button>
      <br />
      {globalTodo.map((elem) => (
        <div className=" border-[3px] mt-3" key={elem.id}>
          <div className="flex  justify-center">
            <div>{elem.data}</div>
            <div>
              <button
                onClick={() => {
                  dispatch(removeTodo(elem.id));
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      {globalTodo.length ? (
        <button
          onClick={() => {
            dispatch(removeAllTodo());
          }}
        >
          removeAllTodo
        </button>
      ) : (
        <p>data not found </p>
      )}
    </>
  );
};

export default Todo;
