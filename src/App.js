// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import CounterList from "./CounterList";

import './App.css';

function App() {
  const [counterNum, setCounterNum] = useState(0);
  const [increment, setIncrement] = useState(1);



  const increaseCounters = ()=>{
    setCounterNum(counterNum+1)
  };
  const decreaseCounters = () =>{
    setCounterNum(counterNum-1)
  };
  const increaseIncrement = () => {
    setIncrement(increment+1)
  };
  const decreaseIncrement = () =>{
    setIncrement(increment-1)
  };



  return (
    <div className="App">
    
      <Header className="App-header" 
        counterNum = {counterNum}
        increaseCounters = {increaseCounters} 
        decreaseCounters = {decreaseCounters}
        increaseIncrement = {increaseIncrement}
        decreaseIncrement = {decreaseIncrement}
      />
      <CounterList 
      // {counters} 

      />
    
    </div>
  );
}

export default App;
