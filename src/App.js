import React, {useState} from "react";
import Header from "./Header";
import CounterList from "./CounterList";

function App() {
  const [counterNum, setCounterNum] = useState(0);
  const [increment, setIncrement] = useState(1);
  let [total, setTotal] = useState(0);

  const updateTotal = ()=>{
    let totalArr = [0];
    document.querySelectorAll(`.Counter`).forEach(val =>
      totalArr.push(parseInt(val.attributes.value.value)))
    let newTotal =  totalArr.reduce((a,b)=> a+b)   
    setTotal(newTotal)   
    document.getElementById('Total').innerText = `Total: ${newTotal}`
}

  const increaseCounters = ()=>{
    setCounterNum(counterNum+1)
  };
  const decreaseCounters = () =>{
    setCounterNum(counterNum-1)
    if(counterNum === 1) { 
      updateTotal()
    }
  };
  const increaseIncrement = () => {
    setIncrement(increment+1)
  };
  const decreaseIncrement = () =>{
    setIncrement(increment-1)
  };

  return (
    <div className="App">
    
      <Header  
        counterNum = {counterNum}
        increment = {increment}
        increaseCounters = {increaseCounters} 
        decreaseCounters = {decreaseCounters}
        increaseIncrement = {increaseIncrement}
        decreaseIncrement = {decreaseIncrement}
        total = {total}
      />
      <CounterList 
        counterNum = {counterNum}
        increment = {increment}
        updateTotal = {updateTotal}
        />
    
    </div>
  );
}

export default App;
