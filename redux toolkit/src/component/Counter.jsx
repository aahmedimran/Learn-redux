import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      counter( {count})
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Counter;
