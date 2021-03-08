import React, {useState} from 'react'
import './App.css';

function App() {

  const [myName, setMyName] = useState('Developer Omar Faruk')

  const changeName = () =>{
  
    setMyName('MERN Developer Omar Faruk')
  }

  return (
    <div className="App">
    
    <h1>{myName}</h1>
    <button className="btn" onClick={changeName} >Click Me Plz</button>

    </div>
  );
}

export default App;
