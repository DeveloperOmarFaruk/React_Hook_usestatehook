import React, {useState} from 'react'
import './App.css';

function App() {

  const [myName, setMyName] = useState('MERN Developer Omar Faruk')

  const changeName = () =>{
    
    let val = myName;
    (val === 'MERN Developer Omar Faruk') ? 
    setMyName('FrontEnd Developer Omar Faruk') : setMyName('MERN Developer Omar Faruk')
  }

  return (
    <div className="App">
    
    <h1>{myName}</h1>
    <button className="btn" onClick={changeName} >Click Me Plz</button>

    </div>
  );
}

export default App;
