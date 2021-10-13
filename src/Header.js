import React from 'react'
import './CSS/Header.css'

function Header(props) {
   
   const closeCounter = ()=>{
      let lastCounter = document.querySelector('.Counter:last-of-type')
      lastCounter.classList.add('animate__bounceOutDown')
      setTimeout(function () {props.decreaseCounters()},400)
   }

   return (
      <div className="Counter-header">
         <div className="Header-text">
            <h2>Counters: &#160; {props.counterNum} </h2>
         </div>   
         <div className="Header-buttons">
            <button onClick={closeCounter} disabled = {props.counterNum<1} >-</button>
            <button onClick={props.increaseCounters}>+</button>
         </div>   
         <div className="Header-text">
            <h2>Increment: {props.increment}</h2>
         </div>
         <div className="Header-buttons">
            <button onClick={props.decreaseIncrement} disabled = {props.increment<2}>-</button>
            <button onClick={props.increaseIncrement}>+</button>
         </div>
         <div className="Header-text">
            <h2 id = "Total" >Total:{props.total} </h2>
         </div>
      </div>
   )
}

export default Header
