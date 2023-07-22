import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/counterSlice";
import {  fetchData } from "../store/getProdouct";
import { addproduct } from "../store/addProduct";
import { getSingleproduct } from "../store/getSingleProduct";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const product = useSelector((state)=>state.product.data);
  
const postid = useSelector((state)=>state.singleproduct.id)
console.log(postid
  ,"postid==>")
  
  useEffect(() => {
   dispatch(fetchData());
  }, []);
  useEffect(()=>{dispatch(getSingleproduct(5))},[])
 

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
