
import { useState } from 'react';
import './App.css'


function App() {

   //let counter = 20;
  const [counter, setCounter] = useState(5)
   function addValue(){
    setCounter(counter+1)
    

  }
   function removeValue(){
    if(counter>0)
    setCounter(counter-1)

  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>
        Add Value: {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        Remove Value: {counter}
      </button>
    </>
  )
}

export default App
