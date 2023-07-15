import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/counterSlice";
import {  fetchData } from "../store/getProdouct";
import { addproduct } from "../store/addProduct";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const product = useSelector((state)=>state.product.data);
  

  
  useEffect(() => {
   dispatch(fetchData());
  }, []);
  
 

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
