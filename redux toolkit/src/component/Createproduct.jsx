import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addproduct } from '../store/addProduct';

const Createproduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [uni, setUni] = useState('')
  return (
    <div>
      <div>createproduct</div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" onChange={(e) => setUni(e.target.value)} value={uni} />
      <button onClick={() => dispatch(addproduct({ name, uni }))}>addproduct</button>
    </div>
  )
}

export default Createproduct