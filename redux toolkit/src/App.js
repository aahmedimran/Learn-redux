
import { useEffect } from 'react';
import './App.css';
import Counter from './component/Counter';
import Todo from './component/Todo';
import Createproduct from './component/Createproduct';
import History from './component/History';


const App=()=> {
 
  


  return (
    <div className="App">
      <h1>Main</h1>
      <Counter/>
      <Todo/>
      <Createproduct/>
      <History/>
    </div>
  );
}

export default App;
