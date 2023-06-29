
import { useEffect } from 'react';
import './App.css';
import Counter from './component/Counter';
import Todo from './component/Todo';


const App=()=> {
 
  


  return (
    <div className="App">
      <h1>Main</h1>
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
