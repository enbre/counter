import React from 'react'

function Header(props) {
   return (
      <div className="counter-header">
      <>
         <h1>Count: {props.counterNum} </h1>
         {/* <h1>Total Count: 5 </h1> */}
         <button onClick={props.decreaseCounters}>-</button>
         <button onClick={props.increaseCounters}>+</button>
      </>   
      <>
         <h2>Base increment: {props.increment}</h2>
         <button onClick={props.decreaseIncrement}>-</button>
         <button onClick={props.increaseIncrement}>+</button>
      </>
      </div>
   )
}

export default Header
