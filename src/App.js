// import logo from './logo.svg';
import React, {useState } from "react";
import Header from "./Header";
import CounterList from "./CounterList";
import Counter from "./Counter"
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
    console.log('----------')
    console.log('counterNum',counterNum, 'newCount',newCount, 'count',count, 'id', id )
    const clicked = document.getElementById(2);
    // const clicked = document.getElementById(`Counter${id}`);
    console.log('clicked:',clicked)
    // if(id === clicked){
    if(id === 2){
      setCount (newCount);
    }
    // const newCounterNum = Array(counterNum).fill().map((counter,id) =>(
    //   // if(counterNum[id] === id){
    //       // console.log('count:',count, id)
    //   <Counter key ={id} count = {newCount} />
    //   //   return  <Counter />
    //   //   // return {...counter, setCount: newCount}
    //   // }
    //   // console.log("---")
    //   // return <Counter />;

    // ))
    // console.log('test',newCounterNum)
    
    
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
