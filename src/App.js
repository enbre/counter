// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import CounterList from "./CounterList";


import './App.css';

function App() {
  const [counterNum, setCounterNum] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [count, setCount] = useState(0);
  // const [adjust, setAdjust] = useState(0);

  // function for calculating total count:
  // const total = counterNum.reduce((total, count)=>(
  //   total + counterNum * count
  // ),0)
  const updateCount = (key, newCount) =>{
    const newCounterNum = counterNum.map(counter =>{
      if(counter.key === key){
        return {...counter, count: newCount}
      }
      return counter;
    })
    setCounterNum (newCounterNum);
  }

  // const updateAdjust = (adjust, key) =>{

  // }

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
        increment = {increment}
        increaseCounters = {increaseCounters} 
        decreaseCounters = {decreaseCounters}
        increaseIncrement = {increaseIncrement}
        decreaseIncrement = {decreaseIncrement}
      />
      <CounterList 
        counterNum = {counterNum}
        increment = {increment}
        count = {count}
        updateCount = {updateCount}
        // key = {counter.key}
        // adjust = {adjust}
        // updateAdjust = {updateAdjust}

      />
    
    </div>
  );
}

export default App;
