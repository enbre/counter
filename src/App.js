// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import CounterList from "./CounterList";
import './CSS/App.css';

function App() {
  const [counterNum, setCounterNum] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [count, setCount] = useState(0);
  // const [adjust, setAdjust] = useState(0);

  // function for calculating total count:
  // const total = counterNum.reduce((total, count)=>(
  //   total + counterNum * count
  // ),0)

  const updateCount = (id, newCount) =>{
    const newCounterNum = Array(counterNum).fill().map(counter =>{
      console.log('counterNum',counterNum,  'count',count, 'id', id )
      if(counterNum.id === id){
        console.log(count, id)
        return { Counter: setCount(newCount)}
        // return {...counter, setCount: newCount}
      }
      return counter;
    })
    console.log(newCounterNum[0], newCounterNum.length)
    setCounterNum (newCounterNum);
  }

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
