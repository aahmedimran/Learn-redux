import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  GET_DEPORTMENT,
} from "../redux/action/index";
const Deportment = () => {
    const { data } = useSelector((state) => state.GetDeportmentReducer);
  const dispatch = useDispatch();
 



  React.useEffect(() => {
    if (!data) {
    dispatch(GET_DEPORTMENT());
    }
  }, [data, dispatch]);
  return (
    <div>
       {data?.map((elems) => (
        <div key={elems._id}>
          <span>deportmentName :{elems?.deportmentName}</span>
          <span>  | contactPerson :{elems?.contactPerson}</span>
        </div>
      ))}
    </div>
  )
}

export default Deportment
