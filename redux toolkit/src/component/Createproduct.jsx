import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../store/addProduct';

const Createproduct = () => {
    const [name, setName] = useState('')
    const [uni, setUni] = useState('')

     const dispatch = useDispatch();
    // const users = useSelector((state)=>state.addProduct.data);

  return (
    <>
    <div>createproduct</div>

<input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
<input type="text" onChange={(e)=>setUni(e.target.value)} value={uni} />
<button onClick={()=>dispatch(addproduct({name,uni}))}>addproduct</button>
    </>
  )
}

export default Createproduct