import { useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [familiar,setFamiliar] = useState(false);
  
  return (
    
    <div className="App">
       <button  onClick={() =>setFamiliar(!familiar)}>Toogle</button>
       {
         <h1>Is familiar : {familiar.toString()}</h1>
       }
       <User familiar={familiar} ></User>
    </div>
  );
}

export default App;
