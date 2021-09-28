import React from 'react'
import Counter from './Counter'
import './CSS/Counter-list.css'

function CounterList(props) {
   
   // Counters is the array of all counters (state stored in App.js and buttons in Header.js)
   let counters = Array(props.counterNum).fill().map((counter, index)=>(
      // console.log(counterNum)
      <Counter key={index} id = {index} increment = {props.increment} count = {props.count} updateCount = {props.updateCount}/>
   ))
   return (
      <div className="Counter-list">
         {counters}
         {/* {counters} */}
         {/* [...{counterNum}] */}
         {/* <Counter /> */}
         {/* <Counter /> */}
      </div>
   )
}

export default CounterList
