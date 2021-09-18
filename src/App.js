// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import CounterList from "./CounterList";

import './App.css';

function App() {
  const [counterNum, setCounterNum] = useState(0);

  const increaseCounters = ()=>{
    setCounterNum(counterNum+1)
  }
  const decreaseCounters = () =>{
    setCounterNum(counterNum-1)
  }
  
  return (
    <div className="App">
      <Header className="App-header" 
        increaseCounters = {increaseCounters} 
        decreaseCounters = {decreaseCounters}
      />
      <CounterList 
      // {counters} 

      />
    </div>
  );
}

export default App;
