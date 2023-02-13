import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incRement, decRement } from "../redux/action/index";
import Button from "react-bootstrap/Button";
const Input = () => {
  const [number, setNumber] = React.useState(1)
  const { globalCounter } = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter{globalCounter}</h1>
      <div>
        <input type="number" value={number}  onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        <br />
        <Button variant="primary" onClick={() => dispatch(incRement())}>add 1</Button>
        <br />
        <Button variant="primary" onClick={() => dispatch(incRement(number))}>
          Add
        </Button>
        <Button variant="primary" onClick={() => dispatch(decRement(number))}>
          sub
        </Button>
      </div>
    </>
  );
};

export default Input;
