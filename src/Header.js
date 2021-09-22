import React from 'react'

function Header(counterNum, decreaseCounters,increaseCounters, decreaseIncrement, increaseIncrement) {
   return (
      <div className="counter-header">
      <>
         {/* <h1>Count: {counterNum} </h1> */}
         <h1>Total Count: 5 </h1>
         <button onClick={decreaseCounters}>-</button>
         <button onClick={increaseCounters}>+</button>
      </>   
      <>
         <h2>Base increment: </h2>
         <button onClick={decreaseIncrement}>-</button>
         <button onClick={increaseIncrement}>+</button>
      </>
      </div>
   )
}

export default Header
