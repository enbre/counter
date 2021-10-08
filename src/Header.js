import React from 'react'
import './CSS/Header.css'

function Header(props) {
   
   const closeCounter = ()=>{
      let lastCounter = document.querySelector('.Counter:last-of-type')
      lastCounter.classList.add('animate__bounceOutDown')
      setTimeout(function () {props.decreaseCounters()},600)
   }

   return (
      <div className="Counter-header">
      <>
         <h1 id = "Total" >Total: {props.total} </h1>
         <h2>Counters: {props.counterNum} </h2>
         {/* <button onClick={props.decreaseCounters} disabled = {props.counterNum<1} >-</button> */}
         <button onClick={closeCounter} disabled = {props.counterNum<1} >-</button>
         <button onClick={props.increaseCounters}>+</button>
      </>   
      <>
         <h2>Increment: {props.increment}</h2>
         <button onClick={props.decreaseIncrement} disabled = {props.increment<2}>-</button>
         <button onClick={props.increaseIncrement}>+</button>
      </>
      </div>
   )
}

export default Header
